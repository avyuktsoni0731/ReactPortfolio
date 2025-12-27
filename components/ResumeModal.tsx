"use client";
import { useEffect, useCallback } from "react";
import { useResume, getResumeUrl } from "./ResumeContext";
import { X, Download, ExternalLink } from "lucide-react";

export function ResumeModal() {
  const { resumeData, isModalOpen, closeResumeModal } = useResume();
  const resumeUrl = getResumeUrl(resumeData);

  // Handle escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeResumeModal();
      }
    },
    [closeResumeModal]
  );

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, handleKeyDown]);

  if (!isModalOpen) return null;

  // Convert Firebase Storage URL to embeddable format or use as-is
  const getEmbedUrl = (url: string) => {
    // If it's a Google Drive preview URL, use directly
    if (url.includes("drive.google.com")) {
      return url;
    }
    // Firebase Storage URLs work directly in iframes for PDFs
    return url;
  };

  const getDownloadUrl = (url: string) => {
    if (url.includes("drive.google.com") && url.includes("preview")) {
      // Convert preview URL to download URL
      return url.replace("/preview", "/view?usp=sharing");
    }
    return url;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeResumeModal}
      />

      {/* Modal Container */}
      <div className="relative w-[95vw] h-[90vh] max-w-5xl bg-[#0a192f] rounded-xl border border-[#233554] shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#233554] bg-[#112240]">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-semibold text-[#ccd6f6]">Resume</h2>
            {resumeData?.fileName && (
              <span className="text-sm text-[#8892b0]">
                {resumeData.fileName}
              </span>
            )}
          </div>
          <div className="flex items-center gap-3">
            <a
              href={getDownloadUrl(resumeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-[#64ffda] hover:bg-[#64ffda]/10 rounded-lg transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>
            <a
              href={resumeData?.url || getDownloadUrl(resumeUrl)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#64ffda] text-[#0a192f] rounded-lg hover:bg-[#64ffda]/90 transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <button
              onClick={closeResumeModal}
              className="p-2 text-[#8892b0] hover:text-[#ccd6f6] hover:bg-[#233554] rounded-lg transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-[#1d2d50]">
          <iframe
            src={getEmbedUrl(resumeUrl)}
            className="w-full h-full border-0"
            title="Resume"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
