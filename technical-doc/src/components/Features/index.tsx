
import {
  MapPinIcon,
  ArrowPathIcon,
  ShoppingBagIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

export default function FeaturesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-10"
        style={{ color: 'var(--primary-color)' }}
      >
        Platform Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard
          icon={<MapPinIcon className="h-6 w-6" />}
          title="Location-based Discovery"
          description="Buyers and recyclers see listings within 5km by default. Uses Location reverse geocoding to convert coordinates into readable addresses for pickup instructions."
          iconColor="var(--secondary-color)"
          bgColor="color-mix(in oklch, var(--secondary-color) 12%, white)"
          technical="Frontend: Geolocation API + LocationIQ. Backend: Proximity filtering in /api/listings/ with lat/lng query params."
        />

        <FeatureCard
          icon={<ArrowPathIcon className="h-6 w-6" />}
          title="Waste Management"
          description="Recyclers claim inedible surplus (e.g., spoiled produce) for compost or biogas. Each pickup is tracked with status: 'scheduled', 'collected', or 'completed'. Supermarkets receive recycling certificates."
          iconColor="var(--primary-color)"
          bgColor="color-mix(in oklch, var(--primary-color) 12%, white)"
          technical="Uses the same Order model as edible items, but with is_edible=false. Pickup scheduling handled via /api/orders/ PATCH requests."
        />

        <FeatureCard
          icon={<ShoppingBagIcon className="h-6 w-6" />}
          title="Inventory Management"
          description="Supermarkets upload surplus items with name, category, price, stock, and image. Stock auto-decreases on order fulfillment."
          iconColor="var(--secondary-color)"
          bgColor="color-mix(in oklch, var(--secondary-color) 12%, white)"
          technical="CRUD via /api/listings/. Product model includes stock_quantity, is_edible, and foreign key to User (supermarket)."
        />

        <FeatureCard
          icon={<BellIcon className="h-6 w-6" />}
          title="Real-time Notifications"
          description="All users receive in-app and (future) SMS alerts for: order confirmations, payment success, pickup windows, and low inventory. Notifications are persisted in the UI."
          iconColor="var(--primary-color)"
          bgColor="color-mix(in oklch, var(--primary-color) 12%, white)"
          technical="Currently simulated via React state. In production: WebSocket or Firebase Cloud Messaging (FCM) integration planned."
        />
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  technical,
  iconColor,
  bgColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  technical: string;
  iconColor: string;
  bgColor: string;
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border"
      style={{
        borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
        boxShadow: '0 4px 10px -3px color-mix(in oklch, var(--primary-color) 6%, transparent)',
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: bgColor }}
      >
        <span style={{ color: iconColor }}>{icon}</span>
      </div>
      <h2
        className="text-xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        {title}
      </h2>
      <p className="text-gray-900 leading-relaxed mb-3">{description}</p>
      <p className="text-sm text-gray-600 italic bg-gray-50 p-2 rounded">
        <strong>For developers:</strong> {technical}
      </p>
    </div>
  );
}