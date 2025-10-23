import { ArrowTopRightOnSquareIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function TestingMonitoringPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12 mt-[-95px]">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Testing & Monitoring
      </h1>

      <div className="mb-8 p-5 rounded-xl bg-red-50 border border-red-200">
        <div className="flex items-start gap-3">
          <ExclamationTriangleIcon className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-red-800">Critical Test Case: M-Pesa Callback URL</h3>
            <p className="text-sm text-gray-900 mt-1">
              During testing, we confirmed that using placeholder URLs like{' '}
              <code className="bg-red-100 px-1 rounded">yourdomain.com</code> causes M-Pesa to send real payment results to an unrelated site (escort service).
            </p>
            <p className="text-sm text-gray-900 mt-2">
              <strong>Always test your callback endpoint:</strong>
            </p>
            <ul className="list-disc pl-5 text-sm mt-1">
              <li>Use <code>ngrok</code> to expose local server</li>
              <li>Send a simulated M-Pesa callback payload</li>
              <li>Verify order status updates to “paid”</li>
            </ul>
          </div>
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
          Unit Tests
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Django TestCase for models, views, and business logic (e.g., stock deduction, role permissions).
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
{`python manage.py test
# Runs tests in feedlink_back_end/tests/`}
          </pre>
        </div>
        <p className="mt-3 text-xs text-gray-600 italic">
           Include tests for: <code>is_edible=False</code> routing, JWT role validation, and payment status updates.
        </p>
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
          Comprehensive Postman collection covering auth, listings, orders, and M-Pesa simulation.
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
        <p className="mt-3 text-xs text-gray-600 italic">
           Includes: Sample M-Pesa callback payload for testing <code>/api/payments/callback/</code>
        </p>
      </div>

      <div
        className="bg-white rounded-xl p-6 border"
        style={{
          borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
          boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
        }}
      >
        <h2 
          className="text-xl font-semibold mb-2"
          style={{ color: 'var(--primary-color)' }}
        >
          Monitoring (Production)
        </h2>
        <p className="text-gray-600 text-sm">
          In production, monitor:
        </p>
        <ul className="list-disc pl-5 text-sm text-gray-600 mt-2 space-y-1">
          <li>Orders stuck in “pending” 10 minutes</li>
          <li>HTTP 5xx errors on <code>/api/payments/callback/</code></li>
          <li>Failed M-Pesa STK push attempts</li>
          <li>Unusual spikes in “cancelled” orders</li>
        </ul>
        <p className="mt-3 text-xs text-gray-600 italic">
           Use Heroku logs + custom alerts to catch callback failures early.
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