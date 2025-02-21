import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-6 md:px-24 font-Montserrat">
      <div className="container mx-auto flex flex-wrap items-center justify-center sm:justify-between w-full gap-4">
        {/* Left Section - Logo & Copyright */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Link className="flex items-center space-x-2" href="#">
            <Image src="/Globe.png" alt="Favicon" width={40} height={40} />
            <span className="text-lg font-bold text-gray-200">
              <span className="text-webGreen">A</span>vyukt&apos;s Portfolio
              <span className="fadeAnimate text-webGreen">_</span>
            </span>
          </Link>
          <p className="text-sm whitespace-nowrap">
            © 2025 Avyukt Soni. All rights reserved.
          </p>
        </div>

        {/* Right Section - Copyright & Social Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center gap-4">
          {/* <p className="text-sm whitespace-nowrap">
            © 2024 Avyukt Soni. All rights reserved.
          </p> */}
          <div className="flex items-center gap-3">
            <Link
              className="hover:text-gray-200 transition"
              href="https://www.twitter.com/SoniAvyukt"
              target="_blank"
            >
              <TwitterIcon />
            </Link>
            <Link
              className="hover:text-gray-200 transition"
              href="https://www.linkedin.com/in/avyuktsoni0731"
              target="_blank"
            >
              <LinkedinIcon />
            </Link>
            <Link
              className="hover:text-gray-200 transition"
              href="https://github.com/avyuktsoni0731"
              target="_blank"
            >
              <GithubIcon />
            </Link>
            <Link
              className="hover:text-gray-200 transition"
              href="https://www.instagram.com/avyukt_soni/"
              target="_blank"
            >
              <InstagramIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.61-3.37-1.17-3.37-1.17-.45-1.15-1.11-1.46-1.11-1.46-.91-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.27.1-2.65 0 0 .83-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.8c.85.004 1.7.115 2.5.337 1.92-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.63.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.004 10.004 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
