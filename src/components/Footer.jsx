import React from "react";
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className="bg-black-200 py-8">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-6 mb-4">
            {/* Social Media Icons */}
            <a
              href="https://github.com/Sanjeev-7714"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex justify-center items-center border border-secondary hover:border-white hover:bg-tertiary transition-all duration-300"
            >
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
                className="text-white"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sanjeev-dev7714/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex justify-center items-center border border-secondary hover:border-white hover:bg-tertiary transition-all duration-300"
            >
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
                className="text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ll_.sanjeev_.ll?igsh=bjcweHBwYW43ZWtn&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex justify-center items-center border border-secondary hover:border-white hover:bg-tertiary transition-all duration-300"
            >
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
                className="text-white"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
          <p className="text-secondary text-center text-sm">
            © {new Date().getFullYear()} Sanjeev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;