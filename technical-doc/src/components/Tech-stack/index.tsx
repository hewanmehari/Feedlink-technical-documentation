export default function GettingStartedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Getting Started
      </h1>

      <p className="text-gray-900 mb-8">
        Follow these steps to set up Feedlink locally. Ensure you have{' '}
        <strong>Node.js ≥18</strong>, <strong>Python 3.10+</strong>, and{' '}
        <strong>PostgreSQL</strong> installed.
      </p>

      <section className="mt-8">
        <h2 
          className="text-2xl font-semibold mb-4"
          style={{ color: 'var(--primary-color)' }}
        >
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {[
            'Next.js',
            'Tailwind CSS',
            'Kotlin',
            'Django',
            'PostgreSQL',
            'Heroku',
            'Vercel',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-medium rounded-full"
              style={{
                backgroundColor: 'color-mix(in oklch, var(--secondary-color) 15%, white)',
                color: 'var(--primary-color)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <CodeSection
        title="1. Backend Setup (Django)"
        lang="bash"
        code={`# Clone the repository
git clone https://github.com/akirachix/feedlink-back-end    
cd feedlink-back-end

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\\Scripts\\activate  # Windows

# Install dependencies (use 'pip' if you don't have 'uv')
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# → Edit .env: add DATABASE_URL, JWT_SECRET, M-Pesa keys

# Run database migrations
python manage.py migrate

# Start server (runs on http://localhost:8000)
python manage.py runserver`}
        note="Need PostgreSQL? Install via Homebrew (Mac), apt (Linux), or Docker:
docker run --name feedlink-db -e POSTGRES_DB=feedlink -e POSTGRES_USER=user -e POSTGRES_PASSWORD=pass -p 5432:5432 -d postgres"
      />

      <CodeSection
        title="2. Frontend Dashboard Setup (Next.js)"
        lang="bash"
        code={`# Clone the repository
git clone https://github.com/akirachix/feedlink-frontend    
cd feedlink-frontend

# Install dependencies
npm install

# Create local config
cp .env.example .env.local
# → Set NEXT_PUBLIC_API_BASE_URL=http://localhost:8000

# Start dev server (http://localhost:3000)
npm run dev`}
        note="The frontend expects the backend to be running on port 8000. Adjust if needed."
      />

      <CodeSection
        title="3. Mobile App Setup (Android/Kotlin)"
        lang="bash"
        code={`# Clone the repository
git clone https://github.com/akirachix/feedlink-mobile
cd feedlink-mobile

# Open in Android Studio:
# 1. Launch Android Studio
# 2. Select "Open an existing Android Studio project"
# 3. Navigate to feedlink-mobile folder

# Configure API URL:
# Edit app/src/main/res/values/secrets.xml:
# <string name="api_base_url">http://10.0.2.2:8000</string>

# Run on emulator or physical device`}
        note=" For physical devices: replace 10.0.2.2 with your machine’s local IP (e.g., 192.168.x.x). Ensure both devices are on the same network."
      />

      <section className="mt-10 p-5 rounded-xl bg-blue-50 border border-blue-200">
        <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--primary-color)' }}>
          Critical: M-Pesa Callback URL
        </h3>
        <p className="text-gray-900">
          Never use <code className="bg-gray-200 px-1 rounded">yourdomain.com</code> in <code>DARAJA_CALLBACK_URL</code>.
          This leads to callbacks being sent to unrelated sites (e.g., adult services).
        </p>
        <p className="mt-2">
          During local development, use <strong>ngrok</strong>:
          <br />
          <code className="bg-gray-200 px-1 rounded">ngrok http 8000</code> → then set callback to{' '}
          <code>https://xxxx.ngrok.io/api/payments/callback/</code>
        </p>
      </section>

      <div className="mt-8 text-center">
        <p className="text-gray-700">
          Stuck? See full docs in the repository <code>README.md</code> or visit{' '}
          <a 
            href="/docs" 
            className="underline"
            style={{ color: 'var(--primary-color)' }}
          >
            /docs
          </a>.
        </p>
      </div>
    </div>
  );
}

function CodeSection({
  title,
  lang,
  code,
  note,
}: {
  title: string;
  lang: string;
  code: string;
  note?: string;
}) {
  return (
    <section className="mt-10">
      <h2 
        className="text-2xl font-semibold mb-4"
        style={{ color: 'var(--primary-color)' }}
      >
        {title}
      </h2>
      <div
        className="rounded-xl p-6 font-mono text-sm leading-relaxed overflow-x-auto"
        style={{
          backgroundColor: 'color-mix(in oklch, var(--primary-color) 3%, white)',
          border: '1px solid color-mix(in oklch, var(--secondary-color) 20%, transparent)',
          boxShadow: '0 2px 6px -2px color-mix(in oklch, var(--primary-color) 5%, transparent)',
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <span
            className="text-xs font-medium"
            style={{ color: 'var(--secondary-color)' }}
          >
            {lang}
          </span>
          <div className="flex gap-1.5">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 60%, white)' }}
            ></span>
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: 'color-mix(in oklch, var(--primary-color) 60%, white)' }}
            ></span>
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 40%, white)' }}
            ></span>
          </div>
        </div>
        <pre
          className="text-gray-900 whitespace-pre-wrap"
          style={{ margin: 0 }}
        >
          {code}
        </pre>
      </div>
      {note && (
        <p className="mt-3 text-sm text-gray-700 italic bg-gray-50 p-3 rounded-lg">
          {note}
        </p>
      )}
    </section>
  );
}