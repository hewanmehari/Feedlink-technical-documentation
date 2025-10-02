import {
  GlobeAltIcon,
  ServerStackIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function SystemArchitecturePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        System Architecture
      </h1>

      <p className="text-gray-600 mt-2 mb-8">
        Feedlink follows a modular, API-driven architecture to ensure scalability, security, and ease of maintenance.
      </p>

      <div
        className="bg-white rounded-xl p-5 mb-10 border overflow-hidden"
        style={{
          borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
          boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
        }}
      >
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: 'var(--primary-color)' }}
        >
          Architecture Diagram
        </h2>

        <div className="rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          <Image
            src="/Image/system.png"
            alt="Feedlink System Architecture Diagram"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div
        className="bg-white rounded-xl p-5 mb-10 border overflow-hidden"
        style={{
          borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
          boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
        }}
      >
        <h2
          className="text-xl font-semibold mb-4"
          style={{ color: 'var(--primary-color)' }}
        >
          Entity Relationship Diagram (ERD)
        </h2>

        <p className="text-gray-600 mb-4">
          The entity relationship diagram outlines the database relationships.
        </p>

        <div className="rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          <Image
            src="/Image/feedlink ERD.png"
            alt="Feedlink Entity Relationship Diagram"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LayerCard
          icon={<GlobeAltIcon className="h-6 w-6" />}
          title="Frontend Layer"
          description="Next.js web dashboard and Kotlin mobile app."
          iconBg="color-mix(in oklch, var(--secondary-color) 15%, white)"
          iconColor="var(--secondary-color)"
        />

        <LayerCard
          icon={<ServerStackIcon className="h-6 w-6" />}
          title="Backend Layer"
          description="Django REST Framework with PostgreSQL."
          iconBg="color-mix(in oklch, var(--primary-color) 15%, white)"
          iconColor="var(--primary-color)"
        />

        <LayerCard
          icon={<CloudIcon className="h-6 w-6" />}
          title="Integrations"
          description="M-Pesa payments & LocationIQ."
          iconBg="color-mix(in oklch, var(--secondary-color) 15%, white)"
          iconColor="var(--secondary-color)"
        />
      </div>
    </div>
  );
}

function LayerCard({
  icon,
  title,
  description,
  iconBg,
  iconColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border"
      style={{
        borderColor: 'color-mix(in oklch, var(--secondary-color) 20%, transparent)',
        boxShadow: '0 4px 8px -3px color-mix(in oklch, var(--primary-color) 5%, transparent)',
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: iconBg }}
      >
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <h3
        className="text-lg font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}