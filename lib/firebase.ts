import { initializeApp, getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

// Firebase configuration - Replace with your own config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

// Types
export interface Project {
  id?: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
  badge?: string;
  order: number;
}

export interface Skill {
  id?: string;
  name: string;
  icon: string;
  category: string;
  order: number;
}

export interface Experience {
  id?: string;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  type: "work" | "education" | "event";
  icon?: string;
  order: number;
}

export interface Contribution {
  id?: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  images: string[];
  linkedInUrl: string;
  order: number;
}

export interface ResumeData {
  id?: string;
  url: string;
  fileName: string;
  uploadedAt: string;
}

// Projects CRUD
export const getProjects = async (): Promise<Project[]> => {
  try {
    const q = query(collection(db, "projects"), orderBy("order", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Project[];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const addProject = async (
  project: Omit<Project, "id">
): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, "projects"), project);
    return docRef.id;
  } catch (error) {
    console.error("Error adding project:", error);
    return null;
  }
};

export const updateProject = async (
  id: string,
  project: Partial<Project>
): Promise<boolean> => {
  try {
    await updateDoc(doc(db, "projects", id), project);
    return true;
  } catch (error) {
    console.error("Error updating project:", error);
    return false;
  }
};

export const deleteProject = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "projects", id));
    return true;
  } catch (error) {
    console.error("Error deleting project:", error);
    return false;
  }
};

// Skills CRUD
export const getSkills = async (): Promise<Skill[]> => {
  try {
    const q = query(collection(db, "skills"), orderBy("order", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Skill[];
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
};

export const addSkill = async (
  skill: Omit<Skill, "id">
): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, "skills"), skill);
    return docRef.id;
  } catch (error) {
    console.error("Error adding skill:", error);
    return null;
  }
};

export const updateSkill = async (
  id: string,
  skill: Partial<Skill>
): Promise<boolean> => {
  try {
    await updateDoc(doc(db, "skills", id), skill);
    return true;
  } catch (error) {
    console.error("Error updating skill:", error);
    return false;
  }
};

export const deleteSkill = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "skills", id));
    return true;
  } catch (error) {
    console.error("Error deleting skill:", error);
    return false;
  }
};

// Experiences CRUD
export const getExperiences = async (): Promise<Experience[]> => {
  try {
    const q = query(collection(db, "experiences"), orderBy("order", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Experience[];
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
};

export const addExperience = async (
  experience: Omit<Experience, "id">
): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, "experiences"), experience);
    return docRef.id;
  } catch (error) {
    console.error("Error adding experience:", error);
    return null;
  }
};

export const updateExperience = async (
  id: string,
  experience: Partial<Experience>
): Promise<boolean> => {
  try {
    await updateDoc(doc(db, "experiences", id), experience);
    return true;
  } catch (error) {
    console.error("Error updating experience:", error);
    return false;
  }
};

export const deleteExperience = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "experiences", id));
    return true;
  } catch (error) {
    console.error("Error deleting experience:", error);
    return false;
  }
};

// Contributions CRUD
export const getContributions = async (): Promise<Contribution[]> => {
  try {
    const q = query(collection(db, "contributions"), orderBy("order", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Contribution[];
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return [];
  }
};

export const addContribution = async (
  contribution: Omit<Contribution, "id">
): Promise<string | null> => {
  try {
    const docRef = await addDoc(collection(db, "contributions"), contribution);
    return docRef.id;
  } catch (error) {
    console.error("Error adding contribution:", error);
    return null;
  }
};

export const updateContribution = async (
  id: string,
  contribution: Partial<Contribution>
): Promise<boolean> => {
  try {
    await updateDoc(doc(db, "contributions", id), contribution);
    return true;
  } catch (error) {
    console.error("Error updating contribution:", error);
    return false;
  }
};

export const deleteContribution = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, "contributions", id));
    return true;
  } catch (error) {
    console.error("Error deleting contribution:", error);
    return false;
  }
};

// Resume CRUD
export const getResume = async (): Promise<ResumeData | null> => {
  try {
    const snapshot = await getDocs(collection(db, "resume"));
    if (snapshot.docs.length > 0) {
      const doc = snapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data(),
      } as ResumeData;
    }
    return null;
  } catch (error) {
    console.error("Error fetching resume:", error);
    return null;
  }
};

export const uploadResume = async (file: File): Promise<ResumeData | null> => {
  try {
    // Upload PDF to Firebase Storage
    const fileName = `resume_${Date.now()}.pdf`;
    const storageRef = ref(storage, `resume/${fileName}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    // Delete existing resume document if any
    const existing = await getDocs(collection(db, "resume"));
    for (const doc of existing.docs) {
      await deleteDoc(doc.ref);
    }

    // Create new resume document
    const resumeData = {
      url,
      fileName: file.name,
      uploadedAt: new Date().toISOString(),
    };
    const docRef = await addDoc(collection(db, "resume"), resumeData);

    return {
      id: docRef.id,
      ...resumeData,
    };
  } catch (error) {
    console.error("Error uploading resume:", error);
    return null;
  }
};

export const deleteResume = async (): Promise<boolean> => {
  try {
    const snapshot = await getDocs(collection(db, "resume"));
    for (const doc of snapshot.docs) {
      await deleteDoc(doc.ref);
    }
    return true;
  } catch (error) {
    console.error("Error deleting resume:", error);
    return false;
  }
};

// Storage Functions
export const uploadImage = async (
  file: File,
  folder: string = "images"
): Promise<string | null> => {
  try {
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}_${file.name.replace(
      /[^a-zA-Z0-9.]/g,
      "_"
    )}`;
    const storageRef = ref(storage, fileName);

    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};

export const uploadImageFromUrl = async (
  imageUrl: string,
  folder: string = "images"
): Promise<string | null> => {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Generate filename from URL
    const urlParts = imageUrl.split("/");
    const originalName =
      urlParts[urlParts.length - 1].split("?")[0] || "image.png";
    const timestamp = Date.now();
    const fileName = `${folder}/${timestamp}_${originalName.replace(
      /[^a-zA-Z0-9.]/g,
      "_"
    )}`;
    const storageRef = ref(storage, fileName);

    await uploadBytes(storageRef, blob);
    const downloadURL = await getDownloadURL(storageRef);

    return downloadURL;
  } catch (error) {
    console.error("Error uploading image from URL:", error);
    return null;
  }
};

export const deleteImage = async (imageUrl: string): Promise<boolean> => {
  try {
    // Extract path from Firebase Storage URL
    const storageRef = ref(storage, imageUrl);
    await deleteObject(storageRef);
    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
    return false;
  }
};

export { db, storage };
