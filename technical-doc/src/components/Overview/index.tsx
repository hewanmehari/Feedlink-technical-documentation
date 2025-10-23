import {
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  MapPinIcon,
  CodeBracketIcon,
  CpuChipIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const LUCID_URL = "https://lucid.app/lucidchart/cf004e99-fa97-400f-863f-23d447920fc1/edit?beaconFlowId=8F00A922E26B2862&invitationId=inv_36b4a6ce-ed96-4e9c-9f6a-7c2979282725&page=0_0#";

export default function OverviewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Optional: Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isModalOpen]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1
        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        style={{ color: 'var(--primary-color)' }}
      >
        Feedlink Technical Documentation
      </h1>

      <p className="text-xl text-gray-900 mb-12 max-w-3xl leading-relaxed">
        A digital platform that reduces food waste in Kenya by connecting supermarkets, buyers, and recyclers through an integrated web dashboard and mobile application.
      </p>

      <section className="mb-16">
        <h2
          className="text-2xl font-semibold mb-5"
          style={{ color: 'var(--primary-color)' }}
        >
          System Overview
        </h2>
        <p className="text-gray-900 leading-relaxed mb-4">
          Feedlink enables a circular food economy:
        </p>
        <ul className="list-disc pl-6 text-gray-900 space-y-2 mb-6">
          <li>
            <strong>Supermarkets</strong> list surplus edible food at discounted prices or non-edible waste for recycling.
          </li>
          <li>
            <strong>Buyers</strong> (e.g., households, food banks) purchase affordable meals via the mobile app.
          </li>
          <li>
            <strong>Recyclers</strong> claim inedible surplus for compost, biogas, or animal feed.
          </li>
        </ul>
        <p className="text-gray-900 leading-relaxed">
          All participants receive real-time impact metrics: meals saved, CO₂ reduced, and waste diverted from landfills.
        </p>
      </section>

      {/* System Architecture Section */}
      <section className="mb-16">
        <h2
          className="text-2xl font-semibold mb-5"
          style={{ color: 'var(--primary-color)' }}
        >
          System Architecture
        </h2>
        <p className="text-gray-600 mb-6">
          Feedlink follows a modular, API-driven architecture to ensure scalability, security, and ease of maintenance. All components communicate via REST APIs.
        </p>

        <div
          className="bg-white rounded-xl p-5 border overflow-hidden"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
          }}
        >
          <h3
            className="text-xl font-semibold mb-4"
            style={{ color: 'var(--primary-color)' }}
          >
            Architecture Diagram
          </h3>

          {/* Clickable image to open modal */}
          <div
            className="rounded-lg border border-gray-200 overflow-hidden bg-gray-50 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/Image/system.png"
              alt="Feedlink System Architecture Diagram"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="mt-3 text-sm text-gray-600 italic">
            <strong>Data Flow:</strong> Mobile/Web → Next.js API Routes → Django Backend → PostgreSQL + M-Pesa/LocationIQ → Callbacks → Notifications
          </p>
        </div>
      </section>

      {/* Core Components */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Web Dashboard */}
        <div
          className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 30%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 8%, transparent)',
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: 'color-mix(in oklch, var(--primary-color) 10%, white)' }}
          >
            <BuildingStorefrontIcon
              className="h-7 w-7"
              style={{ color: 'var(--primary-color)' }}
            />
          </div>
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--primary-color)' }}
          >
            Web Dashboard
          </h3>
          <div className="text-gray-900 leading-relaxed">
            Built with <strong>Next.js + Tailwind CSS</strong>. Used by supermarkets to:
            <ul className="list-disc pl-5 mt-2 text-sm">
              <li>Create & manage food listings</li>
              <li>Track inventory and sales</li>
              <li>View real-time impact analytics</li>
              <li>Schedule pickups</li>
            </ul>
          </div>
        </div>

        {/* Mobile App */}
        <div
          className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 30%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--secondary-color) 8%, transparent)',
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 10%, white)' }}
          >
            <DevicePhoneMobileIcon
              className="h-7 w-7"
              style={{ color: 'var(--secondary-color)' }}
            />
          </div>
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--primary-color)' }}
          >
            Mobile App
          </h3>
          <div className="text-gray-900 leading-relaxed">
            Built with <strong>Kotlin (Android)</strong>. Used by buyers and recyclers to:
            <ul className="list-disc pl-5 mt-2 text-sm">
              <li>Browse listings by proximity</li>
              <li>Place orders & pay via M-Pesa</li>
              <li>Receive pickup notifications</li>
              <li>Track order status</li>
            </ul>
          </div>
        </div>

        {/* Integrated Services */}
        <div
          className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 30%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 8%, transparent)',
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 10%, white)' }}
          >
            <div className="relative">
              <MapPinIcon className="h-7 w-7" style={{ color: 'var(--secondary-color)' }} />
              <CreditCardIcon
                className="h-4 w-4 absolute -bottom-1 -right-1"
                style={{ color: 'var(--primary-color)' }}
              />
            </div>
          </div>
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--primary-color)' }}
          >
            Integrated Services
          </h3>
          <p className="text-gray-900 leading-relaxed">
            <strong>M-Pesa Daraja API</strong> handles secure payments.<br />
            <strong>LocationIQ</strong> enables geolocation-based discovery.<br />
            All callbacks are handled at <code className="bg-gray-100 px-1 rounded">/api/payments/callback/</code>.
          </p>
        </div>
      </section>

      {/* Developer Onboarding Section */}
      <section className="">
        <h2
          className="text-2xl font-semibold mb-5 "
          style={{ color: 'var(--primary-color)' }}
        >
          For New Contributors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4">
            <CodeBracketIcon className="h-6 w-6 mt-1" style={{ color: 'var(--primary-color)' }} />
            <div>
              <h4 className="font-bold mb-1">Frontend</h4>
              <p className="text-sm text-gray-900">
                Web: <code>src/app/</code> (Next.js App Router)<br />
                Mobile: <code>feedlink-mobile/</code> (Kotlin)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <CpuChipIcon className="h-6 w-6 mt-1" style={{ color: 'var(--primary-color)' }} />
            <div>
              <h4 className="font-bold mb-1">Backend</h4>
              <p className="text-sm text-gray-900">
                REST APIs in <code>src/app/api/</code><br />
                Auth: JWT + role-based access<br />
                DB: PostgreSQL + Prisma ORM
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ArrowPathIcon className="h-6 w-6 mt-1" style={{ color: 'var(--primary-color)' }} />
            <div>
              <h4 className="font-bold mb-1">Workflow</h4>
              <p className="text-sm text-gray-900">
                1. Clone repos<br />
                2. Set up <code>.env</code><br />
                3. Run migrations<br />
                4. Start dev servers
              </p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-gray-900">
          Full setup instructions, API contracts, and testing guides are available in the project README and <code>/docs</code>.
        </p>
      </section>

      {/* Modal Popup */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-1 z-10"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close diagram"
            >
              <span className="text-gray-700 font-bold text-xl">×</span>
            </button>

            {/* Diagram image */}
            <div className="p-4">
              <Image
                src="/Image/system.png"
                alt="Feedlink System Architecture Diagram"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Edit in Lucidchart link */}
            <div className="px-4 pb-4 text-center">
              <a
                href={LUCID_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
              View this diagram in Lucidchart
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}