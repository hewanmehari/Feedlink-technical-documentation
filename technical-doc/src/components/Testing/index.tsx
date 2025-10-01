import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export default function TestingMonitoringPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Testing & Monitoring
      </h1>

      <div
        className="bg-white rounded-xl p-6 mb-10 border"
        style={{
          borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
          boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
        }}
      >
        <h2 
          className="text-xl font-semibold mb-2"
          style={{ color: 'var(--primary-color)' }}
        >
          Unit Tests
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Django TestCase for models and views.
        </p>
        <div
          className="rounded-lg font-mono text-sm overflow-x-auto"
          style={{
            backgroundColor: 'color-mix(in oklch, var(--primary-color) 4%, white)',
            border: '1px solid color-mix(in oklch, var(--secondary-color) 20%, transparent)',
          }}
        >
          <div className="flex justify-between items-center px-3 py-2">
            <span
              className="text-xs font-medium"
              style={{ color: 'var(--secondary-color)' }}
            >
              bash
            </span>
          </div>
          <pre className="text-gray-900 whitespace-pre-wrap px-3 pb-2" style={{ margin: 0 }}>
{`python manage.py test`}
          </pre>
        </div>
      </div>

      <div
        className="bg-white rounded-xl p-6 mb-10 border"
        style={{
          borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
          boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
        }}
      >
        <h2 
          className="text-xl font-semibold mb-2"
          style={{ color: 'var(--primary-color)' }}
        >
          Integration Testing
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Comprehensive Postman collection for API testing.
        </p>
        <a
          href="https://documenter.getpostman.com/view/45722982/2sB3HtEGLL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium group"
          style={{ color: 'var(--secondary-color)' }}
        >
          View Postman Tests
          <ArrowTopRightOnSquareIcon 
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5" 
            style={{ color: 'var(--secondary-color)' }} 
          />
        </a>
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