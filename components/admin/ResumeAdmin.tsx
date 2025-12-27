"use client";
import { useState, useEffect, useRef } from "react";
import {
  getResume,
  uploadResume,
  deleteResume,
  ResumeData,
} from "@/lib/firebase";
import { Upload, Trash2, FileText, ExternalLink, Clock } from "lucide-react";

export function ResumeAdmin() {
  const [resume, setResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadResume();
  }, []);

  const loadResume = async () => {
    setLoading(true);
    const data = await getResume();
    setResume(data);
    setLoading(false);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      const result = await uploadResume(file);
      clearInterval(progressInterval);
      setUploadProgress(100);

      if (result) {
        setResume(result);
        setTimeout(() => {
          setUploadProgress(0);
        }, 1000);
      } else {
        alert("Failed to upload resume");
        setUploadProgress(0);
      }
    } catch (error) {
      console.error("Upload error:", error);
      clearInterval(progressInterval);
      alert("Failed to upload resume");
      setUploadProgress(0);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this resume?")) return;

    const success = await deleteResume();
    if (success) {
      setResume(null);
    } else {
      alert("Failed to delete resume");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return <div className="text-[#8892b0]">Loading resume...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#ccd6f6]">
          Resume Management
        </h2>
      </div>

      {/* Current Resume */}
      {resume ? (
        <div className="bg-[#0a192f] rounded-xl p-6 border border-[#233554]">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-[#233554] rounded-xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-[#64ffda]" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#ccd6f6]">
                {resume.fileName}
              </h3>
              <div className="flex items-center gap-2 text-[#8892b0] text-sm mt-1">
                <Clock className="w-4 h-4" />
                <span>Uploaded: {formatDate(resume.uploadedAt)}</span>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#64ffda] text-[#0a192f] rounded-lg hover:bg-[#64ffda]/90 transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Resume
                </a>
                <button
                  onClick={handleDelete}
                  className="flex items-center gap-2 px-4 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors text-sm"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#0a192f] rounded-xl p-8 border border-[#233554] border-dashed text-center">
          <FileText className="w-12 h-12 text-[#8892b0] mx-auto mb-4" />
          <p className="text-[#8892b0] mb-2">No resume uploaded yet</p>
          <p className="text-[#8892b0]/60 text-sm">
            Upload your resume to display it on your portfolio
          </p>
        </div>
      )}

      {/* Upload Section */}
      <div className="bg-[#112240] rounded-xl p-6 border border-[#233554]">
        <h3 className="text-lg font-medium text-[#ccd6f6] mb-4">
          {resume ? "Update Resume" : "Upload Resume"}
        </h3>

        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        {uploading ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="animate-spin w-5 h-5 border-2 border-[#64ffda] border-t-transparent rounded-full" />
              <span className="text-[#ccd6f6]">Uploading...</span>
            </div>
            <div className="h-2 bg-[#233554] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#64ffda] transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        ) : (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-4 border-2 border-dashed border-[#233554] rounded-xl text-[#8892b0] hover:text-[#64ffda] hover:border-[#64ffda] transition-colors flex items-center justify-center gap-3"
          >
            <Upload className="w-5 h-5" />
            <span>Click to upload PDF (max 10MB)</span>
          </button>
        )}

        <p className="text-xs text-[#8892b0]/60 mt-3">
          Uploading a new resume will replace the current one. The resume will
          be displayed in a modal overlay across your portfolio.
        </p>
      </div>

      {/* Info Section */}
      <div className="bg-[#112240]/50 rounded-xl p-4 border border-[#233554]/50">
        <h4 className="text-sm font-medium text-[#64ffda] mb-2">
          💡 How it works
        </h4>
        <ul className="text-sm text-[#8892b0] space-y-1">
          <li>• Your resume is stored securely in Firebase Storage</li>
          <li>
            • Clicking any "Resume" button opens the PDF in a modal overlay
          </li>
          <li>
            • Visitors can view, download, or open the resume in a new tab
          </li>
          <li>
            • If no resume is uploaded, a fallback Google Drive link is used
          </li>
        </ul>
      </div>
    </div>
  );
}
