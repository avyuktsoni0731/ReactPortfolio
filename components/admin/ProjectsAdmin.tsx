"use client";
import { useState, useEffect, useRef } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
  uploadImage,
  Project,
} from "@/lib/firebase";

export function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    techStack: [],
    image: "",
    link: "",
    badge: "",
    order: 0,
  });
  const [techInput, setTechInput] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    const data = await getProjects();
    setProjects(data);
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      techStack: [],
      image: "",
      link: "",
      badge: "",
      order: projects.length,
    });
    setTechInput("");
    setEditingId(null);
    setShowForm(false);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file, "projects");
      if (url) {
        setFormData({ ...formData, image: url });
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateProject(editingId, formData);
    } else {
      await addProject(formData);
    }

    await loadProjects();
    resetForm();
  };

  const handleEdit = (project: Project) => {
    setFormData({
      title: project.title,
      description: project.description,
      techStack: project.techStack,
      image: project.image,
      link: project.link,
      badge: project.badge || "",
      order: project.order,
    });
    setEditingId(project.id || null);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
      await loadProjects();
    }
  };

  const addTech = () => {
    if (techInput.trim() && !formData.techStack.includes(techInput.trim())) {
      setFormData({
        ...formData,
        techStack: [...formData.techStack, techInput.trim()],
      });
      setTechInput("");
    }
  };

  const removeTech = (tech: string) => {
    setFormData({
      ...formData,
      techStack: formData.techStack.filter((t) => t !== tech),
    });
  };

  if (loading) {
    return <div className="text-[#8892b0]">Loading projects...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#ccd6f6]">
          Projects ({projects.length})
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-[#64ffda] text-[#0a192f] font-medium rounded-lg hover:bg-[#64ffda]/90 transition-colors"
        >
          Add Project
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#112240] rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#233554]">
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
              {editingId ? "Edit Project" : "Add New Project"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
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
                  rows={3}
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Project Image
                </label>
                <div className="space-y-2">
                  {/* Image Preview */}
                  {formData.image && (
                    <div className="relative w-full h-40 rounded-lg overflow-hidden bg-[#0a192f] border border-[#233554]">
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, image: "" })}
                        className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600"
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
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="flex-1 px-4 py-2 bg-[#233554] text-[#ccd6f6] rounded-lg hover:bg-[#233554]/80 disabled:opacity-50 transition-colors"
                    >
                      {uploading ? "Uploading..." : "📷 Upload Image"}
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
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    placeholder="https://example.com/image.png"
                    className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Project Link
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) =>
                    setFormData({ ...formData, link: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Badge (optional)
                </label>
                <input
                  type="text"
                  value={formData.badge}
                  onChange={(e) =>
                    setFormData({ ...formData, badge: e.target.value })
                  }
                  placeholder="e.g., Google Solution Challenge"
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Tech Stack
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && (e.preventDefault(), addTech())
                    }
                    placeholder="Add technology"
                    className="flex-1 px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  />
                  <button
                    type="button"
                    onClick={addTech}
                    className="px-4 py-2 bg-[#233554] text-[#ccd6f6] rounded-lg hover:bg-[#233554]/80"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#0a192f] text-[#64ffda] text-sm rounded-full flex items-center gap-2"
                    >
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTech(tech)}
                        className="text-[#8892b0] hover:text-red-400"
                      >
                        ×
                      </button>
                    </span>
                  ))}
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

      {/* Projects List */}
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0a192f] rounded-lg p-4 border border-[#233554] flex items-start gap-4"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-24 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[#ccd6f6]">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="px-2 py-0.5 bg-[#64ffda]/10 text-[#64ffda] text-xs rounded">
                    {project.badge}
                  </span>
                )}
              </div>
              <p className="text-[#8892b0] text-sm mt-1 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs text-[#64ffda]">
                    {tech}
                    {project.techStack.indexOf(tech) < 3 && " • "}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(project)}
                className="px-3 py-1 text-[#64ffda] hover:bg-[#64ffda]/10 rounded transition-colors"
              >
                Edit
              </button>
              <button
                onClick={() => project.id && handleDelete(project.id)}
                className="px-3 py-1 text-red-400 hover:bg-red-400/10 rounded transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
