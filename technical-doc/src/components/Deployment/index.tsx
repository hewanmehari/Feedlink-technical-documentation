// src/app/deployment/page.tsx

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export default function DeploymentPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Deployment
      </h1>

      {/* Frontend Deployment */}
      <section className="mt-10">
        <h2 
          className="text-2xl font-semibold mb-4"
          style={{ color: 'var(--primary-color)' }}
        >
          Frontend Deployment
        </h2>
        <div
          className="bg-white rounded-xl p-6 shadow-sm border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
          }}
        >
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li><strong>Platform:</strong> Vercel</li>
            <li><strong>Branch:</strong> Auto-deployment from <code>main</code></li>
            <li><strong>Environment Variables:</strong> Managed securely via <code>.env</code> in Vercel dashboard</li>
            <li><strong>Build & Preview:</strong> Each push triggers preview builds for PRs and deploys on merge to <code>main</code></li>
          </ul>
        </div>
      </section>

      {/* Backend Deployment */}
      <section className="mt-8">
        <h2 
          className="text-2xl font-semibold mb-4"
          style={{ color: 'var(--primary-color)' }}
        >
          Backend Deployment
        </h2>
        <div
          className="bg-white rounded-xl p-6 shadow-sm border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
          }}
        >
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li><strong>Platform:</strong> Django REST API deployed on Heroku</li>
            <li><strong>Environment Variables:</strong> Configured in Heroku dashboard for security</li>
            <li><strong>Scaling:</strong> Automatic scaling via Heroku dynos for increased demand</li>
          </ul>
        </div>
      </section>

      {/* CI/CD Pipeline */}
      <section className="mt-8">
        <h2 
          className="text-2xl font-semibold mb-4"
          style={{ color: 'var(--primary-color)' }}
        >
          CI/CD Pipeline
        </h2>
        <div
          className="bg-white rounded-xl p-6 shadow-sm border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
          }}
        >
          <ul className="space-y-2 text-gray-700 list-disc pl-5">
            <li><strong>Tool:</strong> GitHub Actions</li>
            <li><strong>Pre-Deployment:</strong> All codebases run tests, build, and lint checks before deploy</li>
            <li><strong>Automation:</strong> Automatic deployment on merge to <code>main</code></li>
            <li><strong>Status:</strong> Build and test status visible in PRs and repository dashboard</li>
          </ul>
        </div>
      </section>

      {/* ⚠️ CRITICAL WARNING */}
      <div className="mt-10 p-5 rounded-xl bg-red-50 border border-red-200">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: '#dc2626' }}>
          <ExclamationCircleIcon className="h-5 w-5" />
          Critical: M-Pesa Callback URL
        </h3>
        <p className="text-gray-900">
          <strong>Never use placeholder URLs like <code className="bg-red-100 px-1 rounded">yourdomain.com</code>.</strong>
        </p>
        <p className="mt-2">
          Our tests confirm that <code>https://yourdomain.com/api/daraja/callback/</code> currently resolves to an <strong>escort/adult service page</strong>. 
          This breaks payments and risks data exposure.
        </p>
        <p className="mt-2 font-medium">
           <strong>Use your real deployed URL:</strong>
        </p>
        <ul className="list-disc pl-5 mt-2 text-sm">
          <li><strong>Heroku:</strong> <code>https://your-feedlink-backend.herokuapp.com/api/payments/callback/</code></li>
          <li><strong>Local dev:</strong> Use <code>ngrok http 8000</code> → <code>https://xxxx.ngrok.io/api/payments/callback/</code></li>
        </ul>
        <p className="mt-2 text-sm">
          Also update this URL in the <a href="https://developer.safaricom.co.ke/" target="_blank" rel="noopener noreferrer" className="underline">Safaricom Daraja Portal</a>.
        </p>
      </div>

      {/* Environment Variables */}
      <section className="mt-12">
        <h2 
          className="text-2xl font-semibold mb-5"
          style={{ color: 'var(--primary-color)' }}
        >
          Environment Variables
        </h2>
        <div
          className="rounded-xl p-6 font-mono text-sm leading-relaxed overflow-x-auto"
          style={{
            backgroundColor: 'color-mix(in oklch, var(--primary-color) 3%, white)',
            border: '1px solid color-mix(in oklch, var(--secondary-color) 20%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 5%, transparent)',
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--secondary-color)' }}
            >
              .env (Example – NEVER commit real keys!)
            </span>
            <div className="flex gap-1.5">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 60%, white)' }}
              ></span>
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: 'color-mix(in oklch, var(--primary-color) 60%, white)' }}
              ></span>
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 40%, white)' }}
              ></span>
            </div>
          </div>
          <pre className="text-gray-900 whitespace-pre-wrap" style={{ margin: 0 }}>
{`DATABASE_URL=postgresql://user:pass@localhost:5432/feedlink
SECRET_KEY=your_strong_secret_key_here

# Email Configuration
EMAIL_HOST_USER=feedlinkteam@gmail.com
EMAIL_HOST_PASSWORD=your_app_password

# Daraja API (M-Pesa) – SANDBOX
DARAJA_CONSUMER_KEY=your_sandbox_key
DARAJA_CONSUMER_SECRET=your_sandbox_secret
DARAJA_BUSINESS_SHORTCODE=174379
DARAJA_PASSKEY=your_sandbox_passkey
DARAJA_CALLBACK_URL=https://your-real-domain.com/api/payments/callback/
DARAJA_BASE_URL=https://sandbox.safaricom.co.ke/`}
          </pre>
        </div>
        <p className="mt-3 text-sm text-gray-600 italic">
           <strong>Never commit real secrets to Git.</strong> Add <code>.env</code> to <code>.gitignore</code>.
        </p>
      </section>
    </div>
  );
}