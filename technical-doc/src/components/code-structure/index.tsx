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
{`FEEDLINK-BACKEND/
├── .github/
│   └── pull_request_template.md
├── api/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── daraja.py
│   ├── models.py
│   ├── serializers.py
│   ├── tests.py
│   └── views.py
├── env/
├── feedlink/
│   ├── __pycache__/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── invent/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
├── listing_images/
├── location/
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   └── tests.py
└── manage.py`}
          </pre>
          <p className="mt-3 text-xs text-gray-600 italic">
             Key folders: <code>api/</code> for endpoints, <code>models.py</code> for DB schema.
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
{`FEEDLINK-FRONTEND/
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── pull_request_template.md
├── feedlink/
│   ├── .next/
│   ├── .swc/
│   ├── node_modules/
│   ├── public/
│   └── src/
│       └── app/
│           ├── api/
│           ├── choice/
│           ├── component/
│           │   ├── Calendar/
│           │   └── Pagination/
│           ├── dashboard/
│           │   ├── components/
│           │   ├── page.test.tsx
│           │   └── page.tsx
│           ├── forgotPassword/
│           ├── hooks/
│           ├── inventory/
│           │   ├── components/
│           │   │   └── index.tsx
│           │   ├── index.test.tsx
│           │   └── index.tsx
│           ├── Csv/
│           │   ├── index.test.tsx
│           │   └── index.tsx
│           ├── CustomSelect/
│           ├── InventoryDetailForm/
│           ├── InventoryFilters/
│           ├── InventoryModals/
│           ├── InventoryPagination/
│           ├── InventorySummary/
│           ├── InventoryTable/
│           ├── page.test.tsx
│           ├── page.tsx
│           ├── logout/
│           ├── orders/
│           │   ├── page.test.tsx
│           │   └── page.tsx
│           └── navigation/
└── package.json`}
          </pre>
          <p className="mt-3 text-xs text-gray-600 italic">
             Key folders: <code>src/app/api/</code> for backend calls, <code>components/</code> for reusable UI.
          </p>
        </div>

        {/* Mobile */}
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
{`app/
├── manifests/
│   └── AndroidManifest.xml
├── kotlin+java/
│   └── com.feedlink.feedlink/
│       ├── di/
│       │   └── AppModule.kt
│       ├── api/
│       │   └── ApiInterface.kt
│       ├── location/
│       ├── model/
│       │   ├── ApiRequest.kt
│       │   ├── ApiResponse.kt
│       │   ├── Listing.kt
│       │   ├── ListingItem.kt
│       │   └── UIState.kt
│       ├── repository/
│       │   ├── AuthRepository.kt
│       │   ├── CartRepository.kt
│       │   └── ListingsRepository.kt
│       ├── ui.theme/
│       │   └── Theme.kt
│       ├── utils/
│       │   └── Extensions.kt
│       ├── viewmodel/
│       │   ├── CartViewModel.kt
│       │   ├── ForgotPasswordViewModel.kt
│       │   ├── ListingsViewModel.kt
│       │   ├── ListingViewModel.kt
│       │   ├── NotificationViewModel.kt
│       │   ├── OrderViewModel.kt
│       │   ├── PaymentViewModel.kt
│       │   ├── ProductDetailViewModel.kt
│       │   ├── ProfileViewModel.kt
│       │   ├── SignInViewModel.kt
│       │   ├── SignUpViewModel.kt
│       │   ├── TimerViewModel.kt
│       │   └── WasteClaimViewModel.kt
│       └── screens/
│           ├── authChoice.kt
│           ├── CartScreen.kt
│           ├── forgotPasssword.kt
│           ├── ListingScreen.kt
│           ├── LocationPermissionScreen.kt
│           ├── login.kt
│           ├── navigation.kt
│           ├── ProductDetailScreen.kt
│           ├── reset.kt
│           ├── role.kt
│           ├── signup.kt
│           ├── splashScreen.kt
│           ├── teasera.kt
│           ├── teaserb.kt
│           ├── teaserc.kt
│           ├── TimerScreen.kt
│           ├── verification.kt
│           ├── ViewProfileScreen.kt
│           ├── WasteCollection.kt
│           ├── WasteHistory.kt
│           ├── WasteHomepage.kt
│           └── WasteNotifications.kt
└── Logcat`}
          </pre>
          <p className="mt-3 text-xs text-gray-600 italic">
             Key folders: <code>api/</code> for Retrofit services, <code>screens/</code> for Jetpack Compose screens, <code>viewmodel/</code> for state management.
          </p>
        </div>
      </div>

      {/* Critical Note */}
      <div className="mt-10 p-5 rounded-xl bg-yellow-50 border border-yellow-200">
        <h3 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: '#f59e0b' }}>
           Important: Avoid Misconfigured Callbacks
        </h3>
        <p className="text-sm text-gray-900">
          As shown in our testing, using placeholder URLs like{' '}
          <code className="bg-yellow-100 px-1 rounded">yourdomain.com</code> in <code>DARAJA_CALLBACK_URL</code> leads to callbacks being sent to unrelated sites.
        </p>
        <p className="mt-2 text-sm text-gray-900">
           Always use a real HTTPS URL or <code>ngrok</code> during development.
        </p>
      </div>

     
    </div>
  );
}