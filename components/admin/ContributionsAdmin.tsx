"use client";
import { useState, useEffect, useRef } from "react";
import {
  getContributions,
  addContribution,
  updateContribution,
  deleteContribution,
  uploadImage,
  Contribution,
} from "@/lib/firebase";

export function ContributionsAdmin() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState<Omit<Contribution, "id">>({
    title: "",
    organization: "",
    date: "",
    description: "",
    images: [],
    linkedInUrl: "",
    order: 0,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadContributions();
  }, []);

  const loadContributions = async () => {
    setLoading(true);
    const data = await getContributions();
    setContributions(data);
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      organization: "",
      date: "",
      description: "",
      images: [],
      linkedInUrl: "",
      order: contributions.length,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploading(true);
    try {
      const uploadedUrls: string[] = [];
      for (const file of Array.from(files)) {
        const url = await uploadImage(file, "contributions");
        if (url) {
          uploadedUrls.push(url);
        }
      }
      setFormData({
        ...formData,
        images: [...formData.images, ...uploadedUrls],
      });
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload some images");
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateContribution(editingId, formData);
    } else {
      await addContribution(formData);
    }

    await loadContributions();
    resetForm();
  };

  const handleEdit = (contribution: Contribution) => {
    setFormData({
      title: contribution.title,
      organization: contribution.organization,
      date: contribution.date,
      description: contribution.description,
      images: contribution.images,
      linkedInUrl: contribution.linkedInUrl,
      order: contribution.order,
    });
    setEditingId(contribution.id || null);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this contribution?")) {
      await deleteContribution(id);
      await loadContributions();
    }
  };

  if (loading) {
    return <div className="text-[#8892b0]">Loading contributions...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#ccd6f6]">
          Contributions ({contributions.length})
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-[#64ffda] text-[#0a192f] font-medium rounded-lg hover:bg-[#64ffda]/90 transition-colors"
        >
          Add Contribution
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#112240] rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#233554]">
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
              {editingId ? "Edit Contribution" : "Add New Contribution"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="e.g., Event Coordinator, Speaker"
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Organization / Event
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  placeholder="e.g., IEEE Computer Society - Code-o-Fiesta 3.0"
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
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
                  placeholder="e.g., October 2024"
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
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
                  placeholder="Describe your role and contributions..."
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Event Images
                </label>
                <div className="space-y-3">
                  {/* Images Preview Grid */}
                  {formData.images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {formData.images.map((img, index) => (
                        <div
                          key={index}
                          className="relative aspect-video rounded overflow-hidden bg-[#0a192f] border border-[#233554]"
                        >
                          <img
                            src={img}
                            alt={`Event image ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Upload Button */}
                  <div className="flex gap-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="flex-1 px-4 py-2 bg-[#233554] text-[#ccd6f6] rounded-lg hover:bg-[#233554]/80 disabled:opacity-50 transition-colors"
                    >
                      {uploading ? "Uploading..." : "📷 Upload Images"}
                    </button>
                  </div>
                  <p className="text-xs text-[#8892b0]">
                    You can select multiple images at once
                  </p>
                </div>
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.linkedInUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedInUrl: e.target.value })
                  }
                  placeholder="https://linkedin.com/in/..."
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
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

      {/* Contributions List */}
      <div className="grid gap-4 md:grid-cols-2">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="bg-[#0a192f] rounded-lg p-4 border border-[#233554]"
          >
            <div className="flex items-start gap-4">
              {contribution.images[0] && (
                <img
                  src={contribution.images[0]}
                  alt={contribution.title}
                  className="w-20 h-14 object-cover rounded"
                />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#ccd6f6] truncate">
                  {contribution.title}
                </h3>
                <p className="text-[#64ffda] text-sm truncate">
                  {contribution.organization}
                </p>
                <p className="text-[#8892b0] text-xs mt-1">
                  📅 {contribution.date} • 📷 {contribution.images.length}{" "}
                  images
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleEdit(contribution)}
                  className="px-3 py-1 text-[#64ffda] hover:bg-[#64ffda]/10 rounded transition-colors text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    contribution.id && handleDelete(contribution.id)
                  }
                  className="px-3 py-1 text-red-400 hover:bg-red-400/10 rounded transition-colors text-sm"
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
}
