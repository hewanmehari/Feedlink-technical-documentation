// app/database-schema/page.tsx


export default function DatabaseSchemaPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
      <h1 
        className="text-3xl font-bold mb-2"
        style={{ color: 'var(--primary-color)' }}
      >
        Database Schema
      </h1>

      <p className="text-gray-600 mt-2 mb-10">
        PostgreSQL relational database with Django ORM models.
      </p>

      <SchemaSection
        title="User Model"
        lang="python"
        schema={`user_id (UUID, Primary Key)
first_name (String)
last_name (String)
password (Hashed String)
latitude (Float)
longitude (Float)
role (Enum: admin, buyer, recycler, supermarket)`}
      />

      <SchemaSection
        title="Products Model"
        lang="python"
        schema={`product_id (UUID, Primary Key)
supermarket_id (Foreign Key → User)
product_name (String)
category (String)
unit (String)
selling_price (Decimal)
image_url (String)
stock_quantity (Integer)`}
      />


      <SchemaSection
        title="Payment Model"
        lang="python"
        schema={` payment_id (UUID, Primary Key)
order_id
customer_id (String)
amount (String)
payment_method (String)
payment_status (Decimal)
transaction_id (String)
created_at (Integer)`}
      />

        <SchemaSection
        title="Orders Model"
        lang="python"
        schema={` customer_id  (Forein Key)
 order_status
 total_amount
`}
      />
    </div>
  );
}

function SchemaSection({
  title,
  lang,
  schema,
}: {
  title: string;
  lang: string;
  schema: string;
}) {
  return (
    <div
      className="bg-white rounded-xl p-6 mb-10 border"
      style={{
        borderColor: 'color-mix(in oklch, var(--secondary-color) 25%, transparent)',
        boxShadow: '0 4px 12px -4px color-mix(in oklch, var(--primary-color) 6%, transparent)',
      }}
    >
      <h2 
        className="text-xl font-semibold mb-4"
        style={{ color: 'var(--primary-color)' }}
      >
        {title}
      </h2>
      <div
        className="rounded-lg font-mono text-sm leading-relaxed overflow-x-auto"
        style={{
          backgroundColor: 'color-mix(in oklch, var(--primary-color) 3%, white)',
          border: '1px solid color-mix(in oklch, var(--secondary-color) 20%, transparent)',
        }}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <span
            className="text-xs font-medium"
            style={{ color: 'var(--secondary-color)' }}
          >
            {lang}
          </span>
          <div className="flex gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 60%, white)' }}
            ></span>
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: 'color-mix(in oklch, var(--primary-color) 60%, white)' }}
            ></span>
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: 'color-mix(in oklch, var(--secondary-color) 40%, white)' }}
            ></span>
          </div>
        </div>
        <pre
          className="text-gray-900 whitespace-pre-wrap px-4 pb-4"
          style={{ margin: 0, fontSize: '0.875rem' }}
        >
          {schema}
        </pre>
      </div>
    </div>
  );
}