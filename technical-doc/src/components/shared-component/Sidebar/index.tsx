"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiHome, FiSettings, FiBook, FiServer, FiDatabase, FiCode, FiUpload, FiShield, FiBarChart2 } from "react-icons/fi";

const sections = [
  { id: "overview", label: "Overview", icon: FiHome },
  { id: "features", label: "Features", icon: FiSettings },
  { id: "tech-stack", label: "Technology Stack", icon: FiServer },
  { id: "system", label: "System Architecture", icon: FiServer },
  { id: "database", label: "Database Schema", icon: FiDatabase },
  { id: "api", label: "API Documentation", icon: FiCode },
  { id: "deployment", label: "Deployment", icon: FiUpload },
  { id: "security", label: "Security", icon: FiShield },
  { id: "testing", label: "Testing & Monitoring", icon: FiBarChart2 },
  { id: "code-structure", label: "Code-structure", icon: FiBarChart2 },

];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('overview');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = 'overview';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <aside
      className="w-72 fixed left-0 top-0 h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
      }}
    >
      <div className="absolute top-6 left-0 w-full flex justify-center px-4">
        <Image
          src="Image/logocolor.svg"
          alt="Feedlink Logo"
          width={200}
          height={40}
          className="object-contain"
        />
      </div>

      <nav className="flex flex-col gap-3 px-6 pt-32 pb-6 flex-grow">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`flex items-center gap-3 rounded-md px-4 py-2.5 transition-colors
                ${isActive
                  ? "bg-white text-[var(--secondary-color)] font-semibold"
                  : "text-white hover:bg-white hover:text-[var(--secondary-color)]"
                }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}