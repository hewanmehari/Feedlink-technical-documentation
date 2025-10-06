// src/app/code-structure/page.tsx
import { FolderIcon } from '@heroicons/react/24/outline';

export default function CodeStructurePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Code Structure
      </h1>

      <p className="text-gray-600 mt-2 mb-10">
        A visual map of Feedlink’s codebase to help new developers navigate and contribute.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Backend */}
        <div
          className="bg-white rounded-xl p-6 shadow-sm border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
          }}
        >
          <h2 
            className="text-xl font-semibold mb-4 flex items-center gap-2"
            style={{ color: 'var(--primary-color)' }}
          >
            <FolderIcon className="h-5 w-5" style={{ color: 'var(--primary-color)' }} />
            Backend (Django)
          </h2>
          <pre className="bg-[#0F2C2C] text-[#D3D7DF] font-mono text-xs leading-relaxed overflow-x-auto p-4 rounded-lg whitespace-pre">
{`feedlink-back-end/
├── .github/
├── api/
│   ├── __init__.py
│   ├── views.py
│   └── serializers.py
├── feedlink/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── manage.py
├── requirements.txt
├── migrations/
├── models.py
├── tests/
│   ├── __init__.py
│   └── test_models.py
├── static/
└── media/`}
          </pre>
          <p className="mt-3 text-xs text-gray-600 italic">
            💡 Key folders: <code>api/</code> for endpoints, <code>models.py</code> for DB schema.
          </p>
        </div>

        {/* Frontend */}
        <div
          className="bg-white rounded-xl p-6 shadow-sm border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
          }}
        >
          <h2 
            className="text-xl font-semibold mb-4 flex items-center gap-2"
            style={{ color: 'var(--primary-color)' }}
          >
            <FolderIcon className="h-5 w-5" style={{ color: 'var(--primary-color)' }} />
            Frontend (Next.js)
          </h2>
          <pre className="bg-[#0F2C2C] text-[#D3D7DF] font-mono text-xs leading-relaxed overflow-x-auto p-4 rounded-lg whitespace-pre">
{`feedlink-frontend/
├── .next/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   ├── listings/
│   │   │   └── payments/
│   │   └── components/
│   ├── lib/
│   │   └── prisma.ts
│   └── styles/
├── package.json
├── next.config.mjs
├── tsconfig.json
└── .env.local`}
          </pre>
          <p className="mt-3 text-xs text-gray-600 italic">
            💡 Key folders: <code>src/app/api/</code> for backend calls, <code>components/</code> for reusable UI.
          </p>
        </div>

        {/* Mobile */}
        <div
          className="bg-white rounded-xl p-6 shadow-sm border"
          style={{
            borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
          }}
        >
          <h2 
            className="text-xl font-semibold mb-4 flex items-center gap-2"
            style={{ color: 'var(--primary-color)' }}
          >
            <FolderIcon className="h-5 w-5" style={{ color: 'var(--primary-color)' }} />
            Mobile (Kotlin/Android)
          </h2>
          <pre className="bg-[#0F2C2C] text-[#D3D7DF] font-mono text-xs leading-relaxed overflow-x-auto p-4 rounded-lg whitespace-pre">
{`feedlink-mobile/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com.feedlink/
│   │   │   │       ├── MainActivity.kt
│   │   │   │       ├── api/
│   │   │   │       ├── model/
│   │   │   │       └── ui/
│   │   │   └── res/
│   │   │       ├── layout/
│   │   │       └── values/
│   │   └── AndroidManifest.xml
│   └── build.gradle
├── gradle/
├── build.gradle
└── settings.gradle`}
          </pre>
          <p className="mt-3 text-xs text-gray-600 italic">
            💡 Key folders: <code>api/</code> for Retrofit services, <code>ui/</code> for Jetpack Compose screens.
          </p>
        </div>
      </div>

      {/* Critical Note */}
      <div className="mt-10 p-5 rounded-xl bg-yellow-50 border border-yellow-200">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: '#f59e0b' }}>
          ⚠️ Important: Avoid Misconfigured Callbacks
        </h3>
        <p className="text-sm text-gray-900">
          As shown in our testing, using placeholder URLs like{' '}
          <code className="bg-yellow-100 px-1 rounded">yourdomain.com</code> in <code>DARAJA_CALLBACK_URL</code> leads to callbacks being sent to unrelated sites.
        </p>
        <p className="mt-2 text-sm text-gray-900">
          ✅ Always use a real HTTPS URL or <code>ngrok</code> during development.
        </p>
      </div>

      <footer 
        className="mt-12 pt-6 text-center text-sm"
        style={{ 
          borderTop: '1px solid color-mix(in oklch, var(--secondary-color) 20%, transparent)',
          color: 'color-mix(in oklch, var(--secondary-color) 70%, gray)'
        }}
      >
        © 2025 Feedlink. Reducing food waste, one connection at a time.
      </footer>
    </div>
  );
}