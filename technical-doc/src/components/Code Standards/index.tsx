// src/app/code-standards/page.tsx

export default function CodeStandardsPage() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <h1 
          className="text-3xl font-bold mb-2"
          style={{ color: 'var(--primary-color)' }}
        >
          Code Standards
        </h1>
  
        <p className="text-gray-600 mt-2 mb-10">
          Guidelines to ensure consistency, readability, and maintainability across Feedlink’s codebase.
        </p>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Frontend Card */}
          <div
            className="bg-white rounded-xl p-6 shadow-sm border"
            style={{
              borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
              boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
            }}
          >
            <h2 
              className="text-xl font-semibold mb-4" 
              style={{ color: 'var(--primary-color)' }}
            >
              Frontend (Next.js, TypeScript, Tailwind)
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Components:</strong> Always use functional components for consistency and performance.</li>
              <li><strong>Naming:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><code className="bg-gray-100 px-1 rounded">camelCase</code> for variables and functions</li>
                  <li><code className="bg-gray-100 px-1 rounded">PascalCase</code> for component names</li>
                  <li><code className="bg-gray-100 px-1 rounded">SCREAMING_SNAKE_CASE</code> for constants</li>
                </ul>
              </li>
              <li><strong>Files:</strong> One component per file. Group files by feature/module for maintainability.</li>
              <li><strong>Testing:</strong> Use Jest and React Testing Library for unit tests; add tests for each new component or logic.</li>
              <li><strong>Styling:</strong> Tailwind CSS for all styling. Avoid inline styles unless absolutely necessary.</li>
            </ul>
          </div>
  
          {/* Backend Card */}
          <div
            className="bg-white rounded-xl p-6 shadow-sm border"
            style={{
              borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
              boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
            }}
          >
            <h2 
              className="text-xl font-semibold mb-4" 
              style={{ color: 'var(--primary-color)' }}
            >
              Backend (Django, DRF)
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Naming:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li><code className="bg-gray-100 px-1 rounded">snake_case</code> for variables and functions</li>
                  <li><code className="bg-gray-100 px-1 rounded">PascalCase</code> for classes and models</li>
                </ul>
              </li>
              <li><strong>Serializers/Views:</strong> Place each in its own file unless they are closely related.</li>
              <li><strong>Testing:</strong> Use Django&#39;s built-in test runner (<code className="bg-gray-100 px-1 rounded">python manage.py test</code>) and maintain high coverage.</li>            </ul>
          </div>
  
          {/* General Standards Card */}
          <div
            className="bg-white rounded-xl p-6 shadow-sm border"
            style={{
              borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
              boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
            }}
          >
            <h2 
              className="text-xl font-semibold mb-4" 
              style={{ color: 'var(--primary-color)' }}
            >
              General Standards
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li><strong>Linting:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Prettier + ESLint for frontend code</li>
                  <li><code className="bg-gray-100 px-1 rounded">flake8</code> and <code className="bg-gray-100 px-1 rounded">black</code> for backend code</li>
                </ul>
              </li>
              <li><strong>Pull Requests:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Write clear summaries for every PR</li>
                  <li>Link related issues (use <code className="bg-gray-100 px-1 rounded">Fixes #issue_num</code>)</li>
                  <li>Always request at least one review before merging</li>
                </ul>
              </li>
              <li><strong>Documentation:</strong>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Document components, functions, and modules with JSDoc (frontend) or docstrings (backend)</li>
                  <li>Update README and feature docs for significant changes</li>
                </ul>
              </li>
            </ul>
          </div>
  
          {/* Best Practices Card */}
          <div
            className="bg-white rounded-xl p-6 shadow-sm border"
            style={{
              borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
              boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
            }}
          >
            <h2 
              className="text-xl font-semibold mb-4" 
              style={{ color: 'var(--primary-color)' }}
            >
              Best Practices
            </h2>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
              <li>Keep functions and components small and focused.</li>
              <li>Prefer composition over inheritance.</li>
              <li>Avoid commented-out code in committed files.</li>
              <li>Refactor and remove unused code regularly.</li>
              <li>Always run lint and tests before pushing or merging.</li>
            </ul>
          </div>
        </div>
  
       
      </div>
    );
  }