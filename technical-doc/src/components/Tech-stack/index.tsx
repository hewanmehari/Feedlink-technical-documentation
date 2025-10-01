export default function GettingStartedPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Getting Started
      </h1>

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
        title="Backend Setup"
        lang="bash"
        code={`# Clone the repository
git clone https://github.com/akirachix/feedlink-back-end  
cd feedlink-back-end

# Create and activate virtual environment
# Linux/Mac
python -m venv env
source env/bin/activate

# Windows
python -m venv env
env\\\\Scripts\\\\activate

# Install dependencies
uv pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver`}
      />

      <CodeSection
        title="Frontend Dashboard Setup"
        lang="bash"
        code={`# Clone the repository
git clone https://github.com/akirachix/feedlink-frontend  
cd feedlink-frontend

# Install dependencies
npm install

# Start development server
npm run dev`}
      />

      <CodeSection
        title="Mobile App Setup"
        lang="bash"
        code={`# Clone the repository
git clone https://github.com/akirachix/feedlink-mobile  

# Open in Android Studio
# Open Project feedlink`}
      />
    </div>
  );
}

function CodeSection({
  title,
  lang,
  code,
}: {
  title: string;
  lang: string;
  code: string;
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
    </section>
  );
}