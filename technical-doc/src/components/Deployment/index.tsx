
export default function DeploymentPage() {  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Deployment
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <DeploymentCard
          title="Backend - Heroku"
          description="Django backend hosted on Heroku with PostgreSQL add-on."
          lang="bash"
          code={`git remote add heroku https://git.heroku.com/your-app-name.git
git push heroku main
heroku run python manage.py migrate
heroku config:set DJANGO_SETTINGS_MODULE=feedlink.settings.prod`}
          bgColor="color-mix(in oklch, var(--primary-color) 4%, white)"
          borderColor="color-mix(in oklch, var(--primary-color) 25%, transparent)"
          langColor="var(--primary-color)"
        />

        <DeploymentCard
          title="Frontend - Vercel"
          description="Next.js dashboard deployed on Vercel with automatic deployments."
          lang="bash"
          code={`# Connect repo in Vercel dashboard
# Set environment variables:
# NEXT_PUBLIC_API_BASE_URL=https://your-backend.herokuapp.com

vercel --prod`}
          bgColor="color-mix(in oklch, var(--secondary-color) 4%, white)"
          borderColor="color-mix(in oklch, var(--secondary-color) 25%, transparent)"
          langColor="var(--secondary-color)"
        />
      </div>

      {/* ⚠️ CRITICAL WARNING */}
      <div className="mt-10 p-5 rounded-xl bg-red-50 border border-red-200">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: '#dc2626' }}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
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
          Also update this URL in the <a href="https://developer.safaricom.co.ke/" target="_blank" className="underline">Safaricom Daraja Portal</a>.
        </p>
      </div>

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

function DeploymentCard({
  title,
  description,
  lang,
  code,
  bgColor,
  borderColor,
  langColor,
}: {
  title: string;
  description: string;
  lang: string;
  code: string;
  bgColor: string;
  borderColor: string;
  langColor: string;
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border"
      style={{
        borderColor,
        boxShadow: '0 4px 8px -3px color-mix(in oklch, var(--primary-color) 5%, transparent)',
      }}
    >
      <h2 
        className="text-xl font-semibold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        {title}
      </h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div
        className="rounded-lg font-mono text-sm overflow-x-auto"
        style={{ backgroundColor: bgColor, border: `1px solid ${borderColor}` }}
      >
        <div className="flex justify-between items-center px-3 py-2">
          <span className="text-xs font-medium" style={{ color: langColor }}>
            {lang}
          </span>
        </div>
        <pre className="text-gray-900 whitespace-pre-wrap px-3 pb-2" style={{ margin: 0 }}>
          {code}
        </pre>
      </div>
    </div>
  );
}