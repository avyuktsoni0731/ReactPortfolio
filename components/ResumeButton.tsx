"use client";
import { useResume } from "./ResumeContext";
import { FileText } from "lucide-react";

interface ResumeButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "icon";
}

export function ResumeButton({
  className = "",
  children,
  variant = "default",
}: ResumeButtonProps) {
  const { openResumeModal } = useResume();

  if (variant === "icon") {
    return (
      <button
        onClick={openResumeModal}
        className={`flex items-center justify-center ${className}`}
        aria-label="View Resume"
      >
        <FileText className="w-5 h-5" />
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        onClick={openResumeModal}
        className={`px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors ${className}`}
      >
        {children || "Resume"}
      </button>
    );
  }

  return (
    <button
      onClick={openResumeModal}
      className={`px-4 py-2 bg-[#64ffda] text-[#0a192f] rounded hover:bg-[#64ffda]/90 transition-colors font-medium ${className}`}
    >
      {children || "Resume"}
    </button>
  );
}
