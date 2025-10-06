import { ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function SecurityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Security
      </h1>

      <p className="text-gray-600 mt-2 mb-6">
        Feedlink implements industry-standard security practices — but configuration errors can undermine them.
        Below are our protections and critical developer responsibilities.
      </p>

      {/* CRITICAL INCIDENT WARNING */}
      <div className="mb-8 p-5 rounded-xl bg-red-50 border border-red-200">
        <div className="flex items-start gap-3">
          <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-red-800"> Real Incident: Callback URL Misconfiguration</h3>
            <p className="text-sm text-gray-900 mt-1">
              During testing, we discovered that using placeholder URLs like{' '}
              <code className="bg-red-100 px-1 rounded">https://yourdomain.com/api/daraja/callback/</code>{' '}
              causes M-Pesa to send real payment callbacks to an unrelated site.
            </p>
            <p className="text-sm text-gray-900 mt-1">
               This URL currently resolves to an <strong>escort/adult service page</strong> — meaning:
            </p>
            <ul className="list-disc pl-5 text-sm mt-1">
              <li>Payment confirmations are **not received** by your backend</li>
              <li>Orders remain stuck in "pending" state</li>
              <li>Transaction data may be exposed to third parties</li>
            </ul>
            <p className="text-sm text-gray-900 mt-2">
              <strong>Prevention:</strong> Always use a real, HTTPS-enabled, publicly accessible callback URL.
            </p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SecurityFeature
          title="TLS Encryption"
          description="All API communications (including M-Pesa callbacks) require HTTPS. Local development must use ngrok or similar for callback testing."
          criticalNote="M-Pesa rejects non-HTTPS callback URLs in production."
        />

        <SecurityFeature
          title="Token Authentication"
          description="JWT tokens (stored in memory, not localStorage in production) with 24-hour expiry. Role-based access ensures supermarkets can’t impersonate recyclers."
          criticalNote="Never log or expose JWT tokens in client-side code."
        />

        <SecurityFeature
          title="Input Validation"
          description="All API inputs validated via Django REST Framework serializers. SQL injection and XSS mitigated via ORM and escaping."
          criticalNote="Always validate geographic coordinates (lat/lng) to prevent abuse."
        />

        <SecurityFeature
          title="CORS Protection"
          description="Django CORS headers restrict frontend origins to only Vercel-deployed dashboard and mobile app domains."
          criticalNote="Never set CORS_ALLOW_ALL_ORIGINS=True in production."
        />
      </div>

      {/* Best Practices */}
      <div className="mt-10 p-5 bg-blue-50 rounded-xl border border-blue-200">
        <h3 className="font-bold mb-2" style={{ color: 'var(--primary-color)' }}>
           Developer Security Checklist
        </h3>
        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
          <li><strong>Never commit</strong> <code>.env</code> files with Daraja keys</li>
          <li>Use <code>ngrok</code> for local M-Pesa testing — never placeholder URLs</li>
          <li>Rotate Daraja credentials if accidentally exposed</li>
          <li>Monitor Heroku logs for unexpected callback traffic</li>
        </ul>
      </div>
    </div>
  );
}

function SecurityFeature({
  title,
  description,
  criticalNote,
}: {
  title: string;
  description: string;
  criticalNote?: string;
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
      <p className="text-gray-600 text-sm leading-relaxed mb-2">{description}</p>
      {criticalNote && (
        <p className="text-xs text-red-600 italic flex items-start gap-1 mt-2">
          <ExclamationTriangleIcon className="h-3 w-3 mt-0.5 flex-shrink-0" />
          {criticalNote}
        </p>
      )}
    </div>
  );
}