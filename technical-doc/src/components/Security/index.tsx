import { ShieldCheckIcon } from '@heroicons/react/24/outline';



export default function SecurityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Security
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <SecurityFeature
          title="TLS Encryption"
          description="All API communications are encrypted using HTTPS/TLS protocols."
        />
        <SecurityFeature
          title="Token Authentication"
          description="JWT-based authentication with role-based access control."
        />
        <SecurityFeature
          title="Input Validation"
          description="Comprehensive input validation to prevent injection attacks."
        />
        <SecurityFeature
          title="CORS Protection"
          description="Django CORS headers configured for secure cross-origin requests."
        />
      </div>
    </div>
  );
}

function SecurityFeature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border"
      style={{
        borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
        boxShadow: '0 4px 8px -3px color-mix(in oklch, var(--primary-color) 5%, transparent)',
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'color-mix(in oklch, var(--primary-color) 12%, white)' }}
        >
          <ShieldCheckIcon 
            className="h-5 w-5" 
            style={{ color: 'var(--primary-color)' }} 
          />
        </div>
        <h2 
          className="text-lg font-semibold"
          style={{ color: 'var(--primary-color)' }}
        >
          {title}
        </h2>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}