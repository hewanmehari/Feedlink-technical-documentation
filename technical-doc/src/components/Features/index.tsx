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
        Features
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FeatureCard
          icon={<MapPinIcon className="h-6 w-6" />}
          title="Location-based Discovery"
          description="Browse and purchase products based on your location for maximum convenience."
          iconColor="var(--secondary-color)"
          bgColor="color-mix(in oklch, var(--secondary-color) 12%, white)"
        />

        <FeatureCard
          icon={<ArrowPathIcon className="h-6 w-6" />}
          title="Waste Management"
          description="Claim and manage pickup schedules for non-edible waste recycling."
          iconColor="var(--primary-color)"
          bgColor="color-mix(in oklch, var(--primary-color) 12%, white)"
        />

        <FeatureCard
          icon={<ShoppingBagIcon className="h-6 w-6" />}
          title="Inventory Management"
          description="Upload products, manage inventory, and track sales through intuitive dashboards."
          iconColor="var(--secondary-color)"
          bgColor="color-mix(in oklch, var(--secondary-color) 12%, white)"
        />

        <FeatureCard
          icon={<BellIcon className="h-6 w-6" />}
          title="Real-time Notifications"
          description="Get instant updates on transactions, pickups, and order status changes."
          iconColor="var(--primary-color)"
          bgColor="color-mix(in oklch, var(--primary-color) 12%, white)"
        />
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  iconColor,
  bgColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
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
      <p className="text-gray-900 leading-relaxed">{description}</p>
    </div>
  );
}