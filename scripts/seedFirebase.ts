/**
 * Firebase Seed Script with Image Upload
 * Run with: npm run seed
 *
 * Make sure to set up your .env.local with Firebase credentials before running!
 */

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import * as fs from "fs";
import * as path from "path";

// Firebase configuration - using environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// ============ IMAGE UPLOAD HELPERS ============

async function uploadLocalImage(
  localPath: string,
  folder: string
): Promise<string> {
  try {
    // Remove leading slash and construct full path
    const relativePath = localPath.startsWith("/")
      ? localPath.slice(1)
      : localPath;
    const fullPath = path.join(process.cwd(), "public", relativePath);

    if (!fs.existsSync(fullPath)) {
      console.log(
        `   ⚠️  Local file not found: ${fullPath}, using original path`
      );
      return localPath;
    }

    const fileBuffer = fs.readFileSync(fullPath);
    const fileName = path.basename(localPath);
    const timestamp = Date.now();
    const storagePath = `${folder}/${timestamp}_${fileName.replace(
      /[^a-zA-Z0-9.]/g,
      "_"
    )}`;

    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, fileBuffer);
    const downloadURL = await getDownloadURL(storageRef);

    console.log(`   ✓ Uploaded: ${fileName}`);
    return downloadURL;
  } catch (error) {
    console.error(`   ⚠️  Failed to upload ${localPath}:`, error);
    return localPath;
  }
}

async function uploadImageFromUrl(
  imageUrl: string,
  folder: string
): Promise<string> {
  try {
    // Fetch the image
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Generate filename from URL
    const urlParts = imageUrl.split("/");
    const originalName =
      urlParts[urlParts.length - 1].split("?")[0] || "image.png";
    const timestamp = Date.now();
    const storagePath = `${folder}/${timestamp}_${originalName.replace(
      /[^a-zA-Z0-9.]/g,
      "_"
    )}`;

    const storageRef = ref(storage, storagePath);
    await uploadBytes(storageRef, buffer);
    const downloadURL = await getDownloadURL(storageRef);

    console.log(`   ✓ Uploaded from URL: ${originalName}`);
    return downloadURL;
  } catch (error) {
    console.error(`   ⚠️  Failed to upload from URL ${imageUrl}:`, error);
    return imageUrl;
  }
}

async function uploadImage(imagePath: string, folder: string): Promise<string> {
  // Check if it's a URL or local path
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return uploadImageFromUrl(imagePath, folder);
  } else if (imagePath.startsWith("/") || !imagePath.includes("://")) {
    return uploadLocalImage(imagePath, folder);
  }
  return imagePath;
}

// ============ YOUR CURRENT DATA ============

const projects = [
  {
    title: "EttyDB",
    description:
      "A Remote Database Management and Integration Service that allows you to manage your website's database entries using Telegram.",
    techStack: ["MongoDB", "Telegram API", "Crypto.js", "JavaScript"],
    image: "/projects/ettyDB.png",
    link: "https://github.com/stktyagi/EttyDB",
    badge: "",
    order: 0,
  },
  {
    title: "TCP Client-Server Socket",
    description:
      "Implemented client-server communication using socket programming in C, handling real-time data transfer via TCP/IP protocol with low latency.",
    techStack: ["C", "TCP/IP", "Socket Programming", "Multithreading"],
    image: "/projects/socketProgramming.png",
    link: "https://github.com/avyuktsoni0731/socket-programming-c",
    badge: "",
    order: 1,
  },
  {
    title: "Vital",
    description:
      "A health assistance provider that provides feedback according to age, gender, allergies and health problems.",
    techStack: ["Flask", "React.js", "Next.js", "MongoDB", "Gemini API"],
    image: "/projects/vital.png",
    link: "https://github.com/avyuktsoni0731/vitalWebApp",
    badge: "",
    order: 2,
  },
  {
    title: "CryptoDrive",
    description:
      "Base-64 Cryptographic Encryption based cloud file-storage platform addressing data security and leak prevention.",
    techStack: ["Flask", "React.js", "Google OAuth", "Cryptography"],
    image:
      "https://github.com/avyuktsoni0731/CryptoDrive/blob/main/images/Encrypted.png?raw=true",
    link: "https://github.com/avyuktsoni0731/CryptoDrive",
    badge: "",
    order: 3,
  },
  {
    title: "PyMongoAuth",
    description:
      "SHA-256 Cryptographic Encryption based Authentication System with salted password storage and MongoDB backend.",
    techStack: ["Python", "MongoDB", "SHA256", "PBKDF2_HMAC"],
    image:
      "https://github.com/avyuktsoni0731/python-mongo-authentication/blob/main/static/mongoDB.png?raw=true",
    link: "https://github.com/avyuktsoni0731/python-mongo-authentication",
    badge: "",
    order: 4,
  },
  {
    title: "PowerOptima",
    description:
      "Energy Efficiency Calculator using prediction models to optimize Wind Turbine and Solar Cell efficiency.",
    techStack: ["Python", "Flask", "Firebase", "Numpy", "Pandas"],
    image: "https://github.com/avyuktsoni0731/efficalc/raw/main/images/1.png",
    link: "https://github.com/avyuktsoni0731/efficalc",
    badge: "Google Solution Challenge",
    order: 5,
  },
  {
    title: "FluxFeed",
    description:
      "Dynamic web-based news aggregator using web-scraping to deliver real-time headlines from diverse sources.",
    techStack: ["Python", "Flask", "Beautiful Soup"],
    image:
      "https://github.com/avyuktsoni0731/fluxfeed/raw/main/assets/fluxfeed_landing.png",
    link: "https://github.com/avyuktsoni0731/fluxfeed",
    badge: "",
    order: 6,
  },
];

const skills = [
  // Languages
  {
    name: "Python",
    icon: "devicon-python-plain",
    category: "Languages",
    order: 0,
  },
  { name: "C", icon: "devicon-c-plain", category: "Languages", order: 1 },
  {
    name: "C++",
    icon: "devicon-cplusplus-plain",
    category: "Languages",
    order: 2,
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    category: "Languages",
    order: 3,
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    category: "Languages",
    order: 4,
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain",
    category: "Languages",
    order: 5,
  },
  { name: "CSS3", icon: "devicon-css3-plain", category: "Languages", order: 6 },

  // Frameworks
  {
    name: "Flask",
    icon: "devicon-flask-original",
    category: "Frameworks",
    order: 0,
  },
  {
    name: "React.js",
    icon: "devicon-react-original",
    category: "Frameworks",
    order: 1,
  },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain",
    category: "Frameworks",
    order: 2,
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain",
    category: "Frameworks",
    order: 3,
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-plain",
    category: "Frameworks",
    order: 4,
  },
  {
    name: "Next.js",
    icon: "devicon-nextjs-plain",
    category: "Frameworks",
    order: 5,
  },
  {
    name: "Selenium Webdriver",
    icon: "devicon-selenium-original",
    category: "Frameworks",
    order: 6,
  },
  {
    name: "Pandas",
    icon: "devicon-pandas-original",
    category: "Frameworks",
    order: 7,
  },
  {
    name: "Matplotlib",
    icon: "devicon-matplotlib-original",
    category: "Frameworks",
    order: 8,
  },

  // Tools
  {
    name: "VS Code",
    icon: "devicon-vscode-plain",
    category: "Tools",
    order: 0,
  },
  { name: "Git", icon: "devicon-git-plain", category: "Tools", order: 1 },
  { name: "MS Office", icon: "", category: "Tools", order: 2 },
  {
    name: "Ubuntu (Linux)",
    icon: "devicon-ubuntu-plain",
    category: "Tools",
    order: 3,
  },
  {
    name: "DigitalOcean",
    icon: "devicon-digitalocean-plain",
    category: "Tools",
    order: 4,
  },
  { name: "Render", icon: "", category: "Tools", order: 5 },
  {
    name: "Vercel",
    icon: "devicon-vercel-original",
    category: "Tools",
    order: 6,
  },
];

const experiences = [
  {
    title: "Web & Tech Lead",
    company: "Google Developer Groups on Campus, ZHCET",
    location: "Aligarh, India",
    date: "Nov 2024 - Present",
    description:
      "Leading the technical team to build projects together, helping everyone work on their skills while promoting a collaborative and supportive culture at the same time.",
    type: "work",
    icon: "/gdgcLogo.png",
    order: 0,
  },
  {
    title: "Head of Web Operations",
    company: "IEEE Student Branch, AMU",
    location: "Aligarh, India",
    date: "Aug 2024 - Present",
    description:
      "Incharge of handling the web operations of the club, managing the website and the technical team.",
    type: "work",
    icon: "",
    order: 1,
  },
  {
    title: "Web Master",
    company: "IEEE Computer Society - ZHCET, AMU",
    location: "Aligarh, India",
    date: "Jul 2024 - Present",
    description: "Managing the website of the society, and the technical team.",
    type: "work",
    icon: "",
    order: 2,
  },
  {
    title: "Web Developer",
    company: "AMURoboclub",
    location: "Aligarh, India",
    date: "May 2024 - Present",
    description:
      "Developing and maintaining the website of the club, and working on the technical projects (both hardware and software).",
    type: "work",
    icon: "",
    order: 3,
  },
];

const contributions = [
  {
    title: "Organising Team Member",
    organization: "AMURoboclub - Vercera 4.0",
    date: "February 2025",
    description:
      "Organized Treasure Hunt, Software Hackathon, and Coding Contest at Vercera 4.0. Developed the event dashboard with Next.js & PocketBase, handling payments, registrations, and team management. Also contributed to sponsorships and event coverage.",
    images: [
      "/IMG_6136.jpg",
      "/aboutPic.jpg",
      "/Vercera4.0/treasureHuntClue.JPG",
      "/Vercera4.0/chess.jpg",
      "/Vercera4.0/waterBottle.jpg",
      "/Vercera4.0/BGMI.jpg",
      "/Vercera4.0/tekken8.JPG",
      "/Vercera4.0/lineFollower.jpg",
      "/Vercera4.0/treasureHunt.jpg",
      "/Vercera4.0/halfTeamPic.jpg",
      "/Vercera4.0/treasureHuntTeamPic.jpg",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
    order: 0,
  },
  {
    title: "Technical Organising Team Member",
    organization: "AUV ZHCET - AMUROVc3.0",
    date: "November 2024",
    description:
      "Incharge of setting up and managing network meshes and access points with camera control and streaming.",
    images: [
      "/ROVc3.0/teamNirma.JPG",
      "/ROVc3.0/teamUqaab.JPG",
      "/ROVc3.0/teamDTU.JPG",
      "/ROVc3.0/soloBehind.JPG",
      "/ROVc3.0/teamPic.JPG",
      "/ROVc3.0/technicalTeamPic.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
    order: 1,
  },
  {
    title: "Event Coordinator",
    organization: "IEEE Computer Society ZHCET - Code-o-Fiesta 3.0",
    date: "October 2024",
    description:
      "Conceptualized the coding contest, along with a proper planning and moderation of the event, to framing the questions.",
    images: [
      "/Code-o-Fiesta3.0/frontLeaderboard.JPG",
      "/Code-o-Fiesta3.0/participantsFront.JPG",
      "/Code-o-Fiesta3.0/participantsBack.JPG",
      "/Code-o-Fiesta3.0/ICSTeamPic.JPG",
      "/Code-o-Fiesta3.0/teamPic.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
    order: 2,
  },
  {
    title: "Speaker",
    organization:
      "CodeChef ZHCET x Polytechnic Roboclub - Unlocking the Power of Web: Workshop",
    date: "October 2024",
    description:
      "Conducted a hands-on Web Development Workshop covering the basics of HTML CSS and JS fundamentals and API integration, with a live project for practical learning.",
    images: [
      "/UnlockingThePowerOfWeb/soloPic.jpg",
      "/UnlockingThePowerOfWeb/audience.JPG",
      "/UnlockingThePowerOfWeb/console.JPG",
      "/UnlockingThePowerOfWeb/codechefTeamPic.JPG",
      "/UnlockingThePowerOfWeb/codechefXPolytechnicTeamPic.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
    order: 3,
  },
  {
    title: "Organizer",
    organization: "AMURoboclub - NSD Software Hackathon",
    date: "August 2024",
    description:
      "Conceptualized the event covering everything from judging criteria, and evaluation of 1st round, till the announcement of winners.",
    images: [
      "/NSD/presentation.JPG",
      "/NSD/teamDiscussion.JPG",
      "/NSD/audience.JPG",
      "/NSD/team.JPG",
    ],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
    order: 4,
  },
  {
    title: "Speaker",
    organization: "IEEE Computer Society ZHCET - LaTeX Essentials Workshop",
    date: "November 2023",
    description:
      "Spoke on Day 2, guiding attendees on Overleaf, tables, figures, and research paper formatting with a hands-on session for 50+ participants.",
    images: ["/LaTeXEssentials/latexSS.png"],
    linkedInUrl:
      "https://www.linkedin.com/in/avyuktsoni0731/details/volunteering-experiences/",
    order: 5,
  },
];

// ============ SEED FUNCTIONS ============

async function clearCollection(collectionName: string) {
  console.log(`🗑️  Clearing ${collectionName} collection...`);
  const snapshot = await getDocs(collection(db, collectionName));
  const deletePromises = snapshot.docs.map((d) =>
    deleteDoc(doc(db, collectionName, d.id))
  );
  await Promise.all(deletePromises);
  console.log(`   ✓ Cleared ${snapshot.docs.length} documents`);
}

async function seedProjects() {
  console.log(`📤 Seeding projects with image uploads...`);
  let count = 0;

  for (const project of projects) {
    console.log(`\n   Processing: ${project.title}`);

    // Upload image to Firebase Storage
    const imageUrl = await uploadImage(project.image, "projects");

    // Create project with uploaded image URL
    await addDoc(collection(db, "projects"), {
      ...project,
      image: imageUrl,
    });
    count++;
  }

  console.log(`\n   ✓ Added ${count} projects`);
}

async function seedExperiences() {
  console.log(`📤 Seeding experiences with icon uploads...`);
  let count = 0;

  for (const exp of experiences) {
    console.log(`\n   Processing: ${exp.title}`);

    // Upload icon to Firebase Storage if present
    let iconUrl = exp.icon;
    if (exp.icon && exp.icon !== "") {
      iconUrl = await uploadImage(exp.icon, "icons");
    }

    // Create experience with uploaded icon URL
    await addDoc(collection(db, "experiences"), {
      ...exp,
      icon: iconUrl,
    });
    count++;
  }

  console.log(`\n   ✓ Added ${count} experiences`);
}

async function seedSkills() {
  console.log(`📤 Seeding skills...`);
  for (const skill of skills) {
    await addDoc(collection(db, "skills"), skill);
  }
  console.log(`   ✓ Added ${skills.length} skills`);
}

async function seedContributions() {
  console.log(`📤 Seeding contributions with image uploads...`);
  let count = 0;

  for (const contribution of contributions) {
    console.log(`\n   Processing: ${contribution.title}`);

    // Upload all images to Firebase Storage
    const uploadedImages: string[] = [];
    for (const imagePath of contribution.images) {
      const imageUrl = await uploadImage(imagePath, "contributions");
      uploadedImages.push(imageUrl);
    }

    // Create contribution with uploaded image URLs
    await addDoc(collection(db, "contributions"), {
      ...contribution,
      images: uploadedImages,
    });
    count++;
  }

  console.log(`\n   ✓ Added ${count} contributions`);
}

async function main() {
  console.log("\n🔥 Firebase Seed Script with Image Upload\n");
  console.log("==========================================\n");

  if (!firebaseConfig.projectId) {
    console.error("❌ Error: Firebase config not found!");
    console.error("   Make sure you have set up your .env.local file with:");
    console.error("   - NEXT_PUBLIC_FIREBASE_API_KEY");
    console.error("   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
    console.error("   - NEXT_PUBLIC_FIREBASE_PROJECT_ID");
    console.error("   - NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET");
    console.error("   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID");
    console.error("   - NEXT_PUBLIC_FIREBASE_APP_ID");
    process.exit(1);
  }

  console.log(`📦 Project ID: ${firebaseConfig.projectId}`);
  console.log(`📁 Storage Bucket: ${firebaseConfig.storageBucket}\n`);

  try {
    // Clear existing data
    await clearCollection("projects");
    await clearCollection("skills");
    await clearCollection("experiences");
    await clearCollection("contributions");

    console.log("\n");

    // Seed new data with image uploads
    await seedProjects();
    console.log("\n");
    await seedSkills();
    console.log("\n");
    await seedExperiences();
    console.log("\n");
    await seedContributions();

    console.log("\n==========================================");
    console.log("✅ Seed completed successfully!\n");
    console.log("Summary:");
    console.log(`   - ${projects.length} projects (with images uploaded)`);
    console.log(`   - ${skills.length} skills`);
    console.log(`   - ${experiences.length} experiences (with icons uploaded)`);
    console.log(
      `   - ${contributions.length} contributions (with images uploaded)`
    );
    console.log("\n📌 All images are now stored in Firebase Storage!");
    console.log("");
  } catch (error) {
    console.error("\n❌ Error seeding database:", error);
    process.exit(1);
  }

  process.exit(0);
}

main();
