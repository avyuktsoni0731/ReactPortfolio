"use client";
import { useState, useEffect, useRef } from "react";
import {
  getExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
  uploadImage,
  Experience,
} from "@/lib/firebase";

const EXPERIENCE_TYPES = [
  { value: "work", label: "Work Experience" },
  { value: "education", label: "Education" },
  { value: "event", label: "Event/Achievement" },
];

export function ExperiencesAdmin() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState<Omit<Experience, "id">>({
    title: "",
    company: "",
    location: "",
    date: "",
    description: "",
    type: "work",
    icon: "",
    order: 0,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    setLoading(true);
    const data = await getExperiences();
    setExperiences(data);
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      company: "",
      location: "",
      date: "",
      description: "",
      type: "work",
      icon: "",
      order: experiences.length,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleIconUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file, "icons");
      if (url) {
        setFormData({ ...formData, icon: url });
      } else {
        alert("Failed to upload icon");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload icon");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateExperience(editingId, formData);
    } else {
      await addExperience(formData);
    }

    await loadExperiences();
    resetForm();
  };

  const handleEdit = (experience: Experience) => {
    setFormData({
      title: experience.title,
      company: experience.company,
      location: experience.location,
      date: experience.date,
      description: experience.description,
      type: experience.type,
      icon: experience.icon || "",
      order: experience.order,
    });
    setEditingId(experience.id || null);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      await deleteExperience(id);
      await loadExperiences();
    }
  };

  const groupedExperiences = experiences.reduce((acc, exp) => {
    if (!acc[exp.type]) {
      acc[exp.type] = [];
    }
    acc[exp.type].push(exp);
    return acc;
  }, {} as Record<string, Experience[]>);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return "💼";
      case "education":
        return "🎓";
      case "event":
        return "🏆";
      default:
        return "📌";
    }
  };

  if (loading) {
    return <div className="text-[#8892b0]">Loading experiences...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#ccd6f6]">
          Experiences ({experiences.length})
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-[#64ffda] text-[#0a192f] font-medium rounded-lg hover:bg-[#64ffda]/90 transition-colors"
        >
          Add Experience
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#112240] rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#233554]">
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
              {editingId ? "Edit Experience" : "Add New Experience"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      type: e.target.value as Experience["type"],
                    })
                  }
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                >
                  {EXPERIENCE_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Title / Role
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="e.g., Software Developer, B.Tech in CSE"
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Company / Institution
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="e.g., Google, MIT"
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#8892b0] text-sm mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="e.g., San Francisco, CA"
                    className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  />
                </div>
                <div>
                  <label className="block text-[#8892b0] text-sm mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    placeholder="e.g., Jan 2023 - Present"
                    className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  placeholder="Describe your role, achievements, or what you learned..."
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Company/Institution Icon (optional)
                </label>
                <div className="space-y-2">
                  {/* Icon Preview */}
                  {formData.icon && (
                    <div className="flex items-center gap-3 p-3 bg-[#0a192f] border border-[#233554] rounded-lg">
                      <img
                        src={formData.icon}
                        alt="Icon preview"
                        className="w-10 h-10 object-contain rounded"
                      />
                      <span className="flex-1 text-[#8892b0] text-sm truncate">
                        {formData.icon}
                      </span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, icon: "" })}
                        className="text-red-400 hover:text-red-300"
                      >
                        ×
                      </button>
                    </div>
                  )}

                  {/* Upload Button */}
                  <div className="flex gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleIconUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="flex-1 px-4 py-2 bg-[#233554] text-[#ccd6f6] rounded-lg hover:bg-[#233554]/80 disabled:opacity-50 transition-colors"
                    >
                      {uploading ? "Uploading..." : "📷 Upload Icon"}
                    </button>
                  </div>

                  {/* Or enter URL */}
                  <div className="flex items-center gap-2 text-[#8892b0] text-xs">
                    <div className="flex-1 h-px bg-[#233554]" />
                    <span>or enter URL</span>
                    <div className="flex-1 h-px bg-[#233554]" />
                  </div>

                  <input
                    type="text"
                    value={formData.icon}
                    onChange={(e) =>
                      setFormData({ ...formData, icon: e.target.value })
                    }
                    placeholder="https://example.com/logo.png"
                    className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Order
                </label>
                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: parseInt(e.target.value),
                    })
                  }
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={uploading}
                  className="flex-1 py-2 bg-[#64ffda] text-[#0a192f] font-medium rounded-lg hover:bg-[#64ffda]/90 disabled:opacity-50 transition-colors"
                >
                  {editingId ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 py-2 bg-[#233554] text-[#ccd6f6] rounded-lg hover:bg-[#233554]/80 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Experiences List by Type */}
      <div className="space-y-6">
        {EXPERIENCE_TYPES.map(({ value, label }) => {
          const typeExperiences = groupedExperiences[value] || [];
          if (typeExperiences.length === 0) return null;

          return (
            <div key={value}>
              <h3 className="text-lg font-medium text-[#8892b0] mb-3 flex items-center gap-2">
                {getTypeIcon(value)} {label}
              </h3>
              <div className="space-y-3">
                {typeExperiences.map((exp) => (
                  <div
                    key={exp.id}
                    className="bg-[#0a192f] rounded-lg p-4 border border-[#233554]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          {exp.icon && (
                            <img
                              src={exp.icon}
                              alt=""
                              className="w-8 h-8 object-contain rounded"
                            />
                          )}
                          <div>
                            <h4 className="font-semibold text-[#ccd6f6]">
                              {exp.title}
                            </h4>
                            <p className="text-[#64ffda] text-sm">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-[#8892b0]">
                          {exp.location && <span>📍 {exp.location}</span>}
                          <span>📅 {exp.date}</span>
                        </div>
                        <p className="text-[#8892b0] text-sm mt-2 line-clamp-2">
                          {exp.description}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(exp)}
                          className="px-3 py-1 text-[#64ffda] hover:bg-[#64ffda]/10 rounded transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => exp.id && handleDelete(exp.id)}
                          className="px-3 py-1 text-red-400 hover:bg-red-400/10 rounded transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
