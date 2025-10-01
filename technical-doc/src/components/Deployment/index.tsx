
export default function DeploymentPage() {
  return (
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
          code={`git push heroku main
heroku run python manage.py migrate`}
          bgColor="color-mix(in oklch, var(--primary-color) 4%, white)"
          borderColor="color-mix(in oklch, var(--primary-color) 25%, transparent)"
          langColor="var(--primary-color)"
        />

        <DeploymentCard
          title="Frontend - Vercel"
          description="Next.js dashboard deployed on Vercel with automatic deployments."
          lang="bash"
          code={`vercel --prod`}
          bgColor="color-mix(in oklch, var(--secondary-color) 4%, white)"
          borderColor="color-mix(in oklch, var(--secondary-color) 25%, transparent)"
          langColor="var(--secondary-color)"
        />
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
              env
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
{`DATABASE_URL=postgresql://...
SECRET_KEY=your-secret-key

# Email Configuration
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=smtp.gmail.com
EMAIL_USE_TLS=True
EMAIL_PORT=587
EMAIL_HOST_USER=feedlinkteam@gmail.com

# Daraja API (M-Pesa)
DARAJA_CONSUMER_KEY=your-key
DARAJA_CONSUMER_SECRET=your-secret
DARAJA_BUSINESS_SHORTCODE=174379
DARAJA_PASSKEY=your-passkey
DARAJA_CALLBACK_URL=https://yourdomain.com/api/daraja/callback/
DARAJA_BASE_URL=https://sandbox.safaricom.co.ke/`}
          </pre>
        </div>
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