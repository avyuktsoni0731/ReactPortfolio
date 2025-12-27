"use client";
import { useState, useEffect } from "react";
import {
  getSkills,
  addSkill,
  updateSkill,
  deleteSkill,
  Skill,
} from "@/lib/firebase";

const SKILL_CATEGORIES = [
  "Languages",
  "Frameworks",
  "Tools",
  "Databases",
  "Other",
];

// Common skill icons mapping
const SKILL_ICONS: Record<string, string> = {
  python: "devicon-python-plain",
  javascript: "devicon-javascript-plain",
  typescript: "devicon-typescript-plain",
  react: "devicon-react-original",
  nextjs: "devicon-nextjs-plain",
  nodejs: "devicon-nodejs-plain",
  java: "devicon-java-plain",
  cpp: "devicon-cplusplus-plain",
  c: "devicon-c-plain",
  html: "devicon-html5-plain",
  css: "devicon-css3-plain",
  tailwind: "devicon-tailwindcss-plain",
  mongodb: "devicon-mongodb-plain",
  postgresql: "devicon-postgresql-plain",
  mysql: "devicon-mysql-plain",
  firebase: "devicon-firebase-plain",
  git: "devicon-git-plain",
  github: "devicon-github-plain",
  docker: "devicon-docker-plain",
  aws: "devicon-amazonwebservices-original",
  linux: "devicon-linux-plain",
  figma: "devicon-figma-plain",
  vscode: "devicon-vscode-plain",
};

export function SkillsAdmin() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<Omit<Skill, "id">>({
    name: "",
    icon: "",
    category: "Languages",
    order: 0,
  });

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    setLoading(true);
    const data = await getSkills();
    setSkills(data);
    setLoading(false);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      icon: "",
      category: "Languages",
      order: skills.length,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      await updateSkill(editingId, formData);
    } else {
      await addSkill(formData);
    }

    await loadSkills();
    resetForm();
  };

  const handleEdit = (skill: Skill) => {
    setFormData({
      name: skill.name,
      icon: skill.icon,
      category: skill.category,
      order: skill.order,
    });
    setEditingId(skill.id || null);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this skill?")) {
      await deleteSkill(id);
      await loadSkills();
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  if (loading) {
    return <div className="text-[#8892b0]">Loading skills...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#ccd6f6]">
          Skills ({skills.length})
        </h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-[#64ffda] text-[#0a192f] font-medium rounded-lg hover:bg-[#64ffda]/90 transition-colors"
        >
          Add Skill
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#112240] rounded-xl p-6 w-full max-w-md border border-[#233554]">
            <h3 className="text-xl font-semibold text-[#ccd6f6] mb-4">
              {editingId ? "Edit Skill" : "Add New Skill"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                  required
                />
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                >
                  {SKILL_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[#8892b0] text-sm mb-1">
                  Icon Class
                </label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) =>
                    setFormData({ ...formData, icon: e.target.value })
                  }
                  placeholder="e.g., devicon-react-original"
                  className="w-full px-4 py-2 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] focus:outline-none focus:border-[#64ffda]"
                />
                <p className="text-xs text-[#8892b0] mt-1">
                  Use Devicon classes. Preview:{" "}
                  <a
                    href="https://devicon.dev/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#64ffda] underline"
                  >
                    devicon.dev
                  </a>
                </p>
                {/* Quick icon suggestions */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(SKILL_ICONS)
                    .slice(0, 8)
                    .map(([name, icon]) => (
                      <button
                        key={name}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            icon,
                            name:
                              formData.name ||
                              name.charAt(0).toUpperCase() + name.slice(1),
                          })
                        }
                        className="p-2 bg-[#0a192f] border border-[#233554] rounded hover:border-[#64ffda] transition-colors"
                        title={name}
                      >
                        <i className={`${icon} text-xl text-[#ccd6f6]`}></i>
                      </button>
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
                  className="flex-1 py-2 bg-[#64ffda] text-[#0a192f] font-medium rounded-lg hover:bg-[#64ffda]/90 transition-colors"
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

      {/* Skills List by Category */}
      <div className="space-y-6">
        {SKILL_CATEGORIES.map((category) => {
          const categorySkills = groupedSkills[category] || [];
          if (categorySkills.length === 0) return null;

          return (
            <div key={category}>
              <h3 className="text-lg font-medium text-[#8892b0] mb-3">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="bg-[#0a192f] rounded-lg p-3 border border-[#233554] flex items-center gap-3"
                  >
                    <i className={`${skill.icon} text-2xl text-[#64ffda]`}></i>
                    <span className="flex-1 text-[#ccd6f6]">{skill.name}</span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => handleEdit(skill)}
                        className="p-1 text-[#8892b0] hover:text-[#64ffda] transition-colors"
                      >
                        ✎
                      </button>
                      <button
                        onClick={() => skill.id && handleDelete(skill.id)}
                        className="p-1 text-[#8892b0] hover:text-red-400 transition-colors"
                      >
                        ×
                      </button>
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
