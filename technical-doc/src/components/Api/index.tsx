import { Metadata } from 'next';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'API Documentation - Feedlink Technical Documentation',
  description: 'RESTful APIs with comprehensive Swagger documentation.',
};

export default function APIDocumentationPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        API Documentation
      </h1>

      <p className="text-gray-600 mt-2 mb-10">
        RESTful APIs with comprehensive Swagger documentation.
      </p>

      <div
        className="rounded-xl p-6 mb-10 border"
        style={{
          backgroundColor: 'color-mix(in oklch, var(--secondary-color) 8%, white)',
          borderColor: 'color-mix(in oklch, var(--secondary-color) 30%, transparent)',
          boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 5%, transparent)',
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div 
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--primary-color)' }}
          >
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <h2 
            className="text-xl font-semibold"
            style={{ color: 'var(--primary-color)' }}
          >
            Interactive API Docs
          </h2>
        </div>
        <a
          href="https://feedlink-210643547921.herokuapp.com/api/schema/redoc/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-medium group"
          style={{ color: 'var(--secondary-color)' }}
        >
          View Swagger Documentation
          <ArrowTopRightOnSquareIcon 
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5" 
            style={{ color: 'var(--secondary-color)' }} 
          />
        </a>
      </div>

      <h2 
        className="text-2xl font-semibold mb-6"
        style={{ color: 'var(--primary-color)' }}
      >
        Key Endpoints
      </h2>

      <EndpointCard
        methods={[
          { verb: 'POST', color: 'var(--primary-color)', bg: 'color-mix(in oklch, var(--primary-color) 15%, white)' }
        ]}
        path="/api/signup/"
        description="User registration"
      />

      <EndpointCard
        methods={[
          { verb: 'POST', color: 'var(--primary-color)', bg: 'color-mix(in oklch, var(--primary-color) 15%, white)' }
        ]}
        path="/api/login/"
        description="Token authentication and access"
      />

      <EndpointCard
        methods={[
          { verb: 'GET', color: 'var(--secondary-color)', bg: 'color-mix(in oklch, var(--secondary-color) 15%, white)' },
          { verb: 'POST', color: 'var(--primary-color)', bg: 'color-mix(in oklch, var(--primary-color) 15%, white)' },
          { verb: 'PATCH', color: 'color-mix(in oklch, var(--secondary-color) 70%, var(--primary-color) 30%)', bg: 'color-mix(in oklch, var(--secondary-color) 10%, white)' }
        ]}
        path="/api/listings/"
        description="CRUD operations for product inventory"
      />

      <EndpointCard
        methods={[
          { verb: 'GET', color: 'var(--secondary-color)', bg: 'color-mix(in oklch, var(--secondary-color) 15%, white)' },
          { verb: 'POST', color: 'var(--primary-color)', bg: 'color-mix(in oklch, var(--primary-color) 15%, white)' },
          { verb: 'PATCH', color: 'color-mix(in oklch, var(--secondary-color) 70%, var(--primary-color) 30%)', bg: 'color-mix(in oklch, var(--secondary-color) 10%, white)' }
        ]}
        path="/api/orders/"
        description="Order management and tracking"
      />

      <EndpointCard
        methods={[
          { verb: 'GET', color: 'var(--secondary-color)', bg: 'color-mix(in oklch, var(--secondary-color) 15%, white)' },
          { verb: 'POST', color: 'var(--primary-color)', bg: 'color-mix(in oklch, var(--primary-color) 15%, white)' }
        ]}
        path="/api/payments/"
        description="Payment processing and history"
      />
    </div>
  );
}

function EndpointCard({
  methods,
  path,
  description,
}: {
  methods: { verb: string; color: string; bg: string }[];
  path: string;
  description: string;
}) {
  return (
    <div
      className="bg-white rounded-xl p-5 mb-4 shadow-sm hover:shadow-md transition-all duration-300 border"
      style={{
        borderColor: 'color-mix(in oklch, var(--secondary-color) 20%, transparent)',
        boxShadow: '0 4px 8px -3px color-mix(in oklch, var(--primary-color) 5%, transparent)',
      }}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {methods.map((method, i) => (
          <span
            key={i}
            className="text-xs font-medium px-2 py-1 rounded-full"
            style={{
              color: method.color,
              backgroundColor: method.bg,
            }}
          >
            {method.verb}
          </span>
        ))}
        <code 
          className="text-sm px-2 py-1 rounded font-mono"
          style={{
            backgroundColor: 'color-mix(in oklch, var(--primary-color) 4%, white)',
            color: 'var(--primary-color)',
          }}
        >
          {path}
        </code>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}