import { BuildingStorefrontIcon, DevicePhoneMobileIcon, CreditCardIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function OverviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        style={{ color: 'var(--primary-color)' }}
      >
        Feedlink Technical Documentation
      </h1>

      <p className="text-xl text-gray-900 mb-12 max-w-3xl leading-relaxed">
        A digital platform that reduces food waste in Kenya by connecting supermarkets, buyers, and recyclers through an integrated web dashboard and mobile application.
      </p>

      <section className="mb-16">
        <h2 
          className="text-2xl font-semibold mb-5"
          style={{ color: 'var(--primary-color)' }}
        >
          Overview
        </h2>
        <p className="text-gray-900 leading-relaxed">
          Feedlink is a comprehensive platform that connects waste producers (supermarkets) with buyers and recyclers for non-edible waste. Producers can list surplus food, buyers can purchase at discounted prices, and recyclers can claim waste for recycling — creating a circular economy that reduces landfill burden and promotes sustainability.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border"
          style={{ 
            borderColor: 'color-mix(in oklch, var(--secondary-color) 30%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 8%, transparent)'
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: 'color-mix(in oklch, var(--primary-color) 10%, white)' }}
          >
            <BuildingStorefrontIcon 
              className="h-7 w-7" 
              style={{ color: 'var(--primary-color)' }} 
            />
          </div>
          <h3 
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--primary-color)' }}
          >
            Web Dashboard
          </h3>
          <p className="text-gray-900 leading-relaxed">
            Allows waste producers (e.g., supermarkets) to list surplus food items, manage inventory, track pickups, and view analytics in real time.
          </p>
        </div>

        <div 
          className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border"
          style={{ 
            borderColor: 'color-mix(in oklch, var(--secondary-color) 30%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--secondary-color) 8%, transparent)'
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 10%, white)' }}
          >
            <DevicePhoneMobileIcon 
              className="h-7 w-7" 
              style={{ color: 'var(--secondary-color)' }} 
            />
          </div>
          <h3 
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--primary-color)' }}
          >
            Mobile App
          </h3>
          <p className="text-gray-900 leading-relaxed">
            Enables buyers and recyclers to browse live listings, place orders, coordinate pickups, and receive notifications on the go.
          </p>
        </div>

        <div 
          className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border"
          style={{ 
            borderColor: 'color-mix(in oklch, var(--secondary-color) 30%, transparent)',
            boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 8%, transparent)'
          }}
        >
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 10%, white)' }}
          >
            <div className="relative">
              <MapPinIcon className="h-7 w-7" style={{ color: 'var(--secondary-color)' }} />
              <CreditCardIcon 
                className="h-4 w-4 absolute -bottom-1 -right-1" 
                style={{ color: 'var(--primary-color)' }} 
              />
            </div>
          </div>
          <h3 
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--primary-color)' }}
          >
            Integrated Services
          </h3>
          <p className="text-gray-900 leading-relaxed">
            Integrated M-Pesa and Location Services: Facilitate secure payments and optimize transaction efficiency.
          </p>
        </div>
      </section>
    </div>
  );
}