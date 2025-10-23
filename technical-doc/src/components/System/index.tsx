
import Image from 'next/image';

export default function SystemArchitecturePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 mt-[-95px]">
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        ERD
      </h1>

      <p className="text-gray-600 mt-2 mb-8">
        Feedlink follows a modular, API-driven architecture to ensure scalability, security, and ease of maintenance. All components communicate via REST APIs.
      </p>


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

    

      {/* Critical Note Box */}
    
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