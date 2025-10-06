import {
  GlobeAltIcon,
  ServerStackIcon,
  CloudIcon,
  ExclamationTriangleIcon,
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
        Feedlink follows a modular, API-driven architecture to ensure scalability, security, and ease of maintenance. All components communicate via REST APIs.
      </p>

      {/* Architecture Diagram */}
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
        <p className="mt-3 text-sm text-gray-600 italic">
          <strong>Data Flow:</strong> Mobile/Web → Next.js API Routes → Django Backend → PostgreSQL + M-Pesa/LocationIQ → Callbacks → Notifications
        </p>
      </div>

      {/* ERD Section */}
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
          The entity relationship diagram outlines the database relationships. Core models:
          <ul className="list-disc pl-5 mt-2 text-sm">
            <li><code>User</code> — Supermarkets, Buyers, Recyclers, Admin</li>
            <li><code>Product</code> — Surplus food items with stock, price, category</li>
            <li><code>Order</code> — Links user, product, quantity, status</li>
            <li><code>Payment</code> — Tracks M-Pesa transaction ID and callback data</li>
          </ul>
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
        <p className="mt-3 text-sm text-gray-600 italic">
           <strong>Important:</strong> Always use <code>prisma db push</code> or <code>migrate dev</code> after schema changes.
        </p>
      </div>

      {/* Layer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LayerCard
          icon={<GlobeAltIcon className="h-6 w-6" />}
          title="Frontend Layer"
          description={
            <>
              <div className="mb-2">Next.js web dashboard for supermarkets.</div>
              <div className="mb-2">Kotlin Android app for buyers & recyclers.</div>
              <div className="text-xs text-gray-500">
                 Mobile uses Retrofit + OkHttp; Web uses Axios + React Context for auth.
              </div>
            </>
          }
          iconBg="color-mix(in oklch, var(--secondary-color) 15%, white)"
          iconColor="var(--secondary-color)"
        />

        <LayerCard
          icon={<ServerStackIcon className="h-6 w-6" />}
          title="Backend Layer"
          description={
            <>
              <div className="mb-2">Django REST Framework (DRF) with JWT authentication.</div>
              <div className="mb-2">All endpoints under <code>/api/</code>.</div>
              <div className="text-xs text-gray-500">
                 Role-based access: Only supermarkets can create listings. Payments handled via Daraja STK Push.
              </div>
            </>
          }
          iconBg="color-mix(in oklch, var(--primary-color) 15%, white)"
          iconColor="var(--primary-color)"
        />

        <LayerCard
          icon={<CloudIcon className="h-6 w-6" />}
          title="Integrations"
          description={
            <>
              <div className="mb-2"><strong>M-Pesa Daraja API</strong> — handles payments and callbacks.</div>
              <div className="mb-2"><strong>LocationIQ</strong> — converts lat/lng to readable addresses.</div>
              <div className="text-xs text-red-600 flex items-center gap-1">
                <ExclamationTriangleIcon className="h-4 w-4" /> 
                <span>Never use placeholder URLs like <code>yourdomain.com</code> in <code>DARAJA_CALLBACK_URL</code>. Use ngrok or real HTTPS URL.</span>
              </div>
            </>
          }
          iconBg="color-mix(in oklch, var(--secondary-color) 15%, white)"
          iconColor="var(--secondary-color)"
        />
      </div>

      {/* Critical Note Box */}
      <div className="mt-10 p-5 rounded-xl bg-red-50 border border-red-200">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: '#dc2626' }}>
          <ExclamationTriangleIcon className="h-6 w-6" />
          Critical Security Warning
        </h3>
        <p className="text-gray-900">
          If your M-Pesa callback URL points to a non-existent or fake domain (like <code>yourdomain.com</code>), Safaricom will send payment results to an unrelated site — potentially exposing sensitive data or breaking your system.
        </p>
        <p className="mt-2">
          <strong>Fix it:</strong> Use <code>ngrok http 8000</code> during dev, or deploy backend to Heroku/Vercel with real HTTPS.
        </p>
        {/* <p className="mt-2 text-sm text-gray-600">
          See <a href="/getting-started" className="underline" style={{ color: 'var(--primary-color)' }}>Getting Started</a> for full setup guide.
        </p> */}
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
  description: React.ReactNode;
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