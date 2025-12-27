"use client";
import { useState, useEffect } from "react";
import { ProjectsAdmin } from "@/components/admin/ProjectsAdmin";
import { SkillsAdmin } from "@/components/admin/SkillsAdmin";
import { ExperiencesAdmin } from "@/components/admin/ExperiencesAdmin";
import { ContributionsAdmin } from "@/components/admin/ContributionsAdmin";
import { ResumeAdmin } from "@/components/admin/ResumeAdmin";

type Tab = "projects" | "skills" | "experiences" | "contributions" | "resume";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD ||
      password === "avyukt2024"
    ) {
      setIsAuthenticated(true);
      setError("");
      localStorage.setItem("admin_auth", "true");
    } else {
      setError("Invalid password");
    }
  };

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }

    // Restore default cursor on admin page (override globals.css cursor: none)
    const style = document.createElement("style");
    style.id = "admin-cursor-fix";
    style.textContent = "* { cursor: auto !important; }";
    document.head.appendChild(style);

    return () => {
      // Remove the style when leaving the page
      const existingStyle = document.getElementById("admin-cursor-fix");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_auth");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-4">
        <div className="bg-[#112240] rounded-xl p-8 w-full max-w-md border border-[#233554]">
          <h1 className="text-2xl font-bold text-[#ccd6f6] mb-6 text-center">
            Admin Access
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[#0a192f] border border-[#233554] rounded-lg text-[#ccd6f6] placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda]"
              />
            </div>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-[#64ffda] text-[#0a192f] font-semibold rounded-lg hover:bg-[#64ffda]/90 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#ccd6f6]">
            Portfolio Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-[#8892b0] hover:text-[#64ffda] transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#233554] overflow-x-auto">
          {(
            [
              "projects",
              "skills",
              "experiences",
              "contributions",
              "resume",
            ] as Tab[]
          ).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium capitalize transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? "text-[#64ffda] border-b-2 border-[#64ffda]"
                  : "text-[#8892b0] hover:text-[#ccd6f6]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-[#112240] rounded-xl border border-[#233554] p-6">
          {activeTab === "projects" && <ProjectsAdmin />}
          {activeTab === "skills" && <SkillsAdmin />}
          {activeTab === "experiences" && <ExperiencesAdmin />}
          {activeTab === "contributions" && <ContributionsAdmin />}
          {activeTab === "resume" && <ResumeAdmin />}
        </div>
      </div>
    </div>
  );
}
