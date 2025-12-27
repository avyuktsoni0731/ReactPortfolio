"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getResume, ResumeData } from "@/lib/firebase";

interface ResumeContextType {
  resumeData: ResumeData | null;
  isModalOpen: boolean;
  openResumeModal: () => void;
  closeResumeModal: () => void;
  refreshResume: () => Promise<void>;
  isLoading: boolean;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

// Fallback resume URL (Google Drive)
const FALLBACK_RESUME_URL =
  "https://drive.google.com/file/d/1gnF1YRNGqTjYibXuN2ZDj2zIN7qHD5y1/preview";

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResume = async () => {
    setIsLoading(true);
    try {
      const data = await getResume();
      setResumeData(data);
    } catch (error) {
      console.log("Using fallback resume");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const openResumeModal = () => setIsModalOpen(true);
  const closeResumeModal = () => setIsModalOpen(false);
  const refreshResume = async () => {
    await fetchResume();
  };

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        isModalOpen,
        openResumeModal,
        closeResumeModal,
        refreshResume,
        isLoading,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}

export function getResumeUrl(resumeData: ResumeData | null): string {
  if (resumeData?.url) {
    return resumeData.url;
  }
  return FALLBACK_RESUME_URL;
}
