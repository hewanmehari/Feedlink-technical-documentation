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
        PostgreSQL relational database using Django ORM. All IDs are UUIDs. Timestamps use <code>DateTime</code>.
      </p>

      <SchemaSection
        title="User Model"
        lang="python"
        schema={`id = UUIDField(primary_key=True, default=uuid.uuid4)
email = EmailField(unique=True)
first_name = CharField(max_length=100)
last_name = CharField(max_length=100)
password = CharField()  # hashed via bcrypt
latitude = FloatField(null=True, blank=True)
longitude = FloatField(null=True, blank=True)
role = CharField(choices=[
    ('admin', 'Admin'),
    ('supermarket', 'Supermarket'),
    ('buyer', 'Buyer'),
    ('recycler', 'Recycler')
])
created_at = DateTimeField(auto_now_add=True)
updated_at = DateTimeField(auto_now=True)`}
        note="Primary key: id (UUID). Supermarkets, buyers, and recyclers are all stored here with role-based access."
      />

      <SchemaSection
        title="Product Model"
        lang="python"
        schema={`id = UUIDField(primary_key=True, default=uuid.uuid4)
name = CharField(max_length=200)
category = CharField(max_length=50)      # e.g., 'vegetables', 'dairy'
unit = CharField(max_length=20)          # e.g., 'kg', 'piece'
price = DecimalField(max_digits=10, decimal_places=2)
stock_quantity = PositiveIntegerField()
is_edible = BooleanField(default=True)   # False → recyclers only
image_url = URLField(blank=True)
created_at = DateTimeField(auto_now_add=True)

# Relations
supermarket = ForeignKey('User', on_delete=CASCADE, limit_choices_to={'role': 'supermarket'})`}
        note=" Edible products appear in buyer app; non-edible (is_edible=False) appear only for recyclers."
      />

      <SchemaSection
        title="Order Model"
        lang="python"
        schema={`id = UUIDField(primary_key=True, default=uuid.uuid4)
quantity = PositiveIntegerField()
total_amount = DecimalField(max_digits=10, decimal_places=2)
status = CharField(choices=[
    ('pending', 'Pending'),
    ('paid', 'Paid'),
    ('fulfilled', 'Fulfilled'),
    ('cancelled', 'Cancelled')
], default='pending')
created_at = DateTimeField(auto_now_add=True)
updated_at = DateTimeField(auto_now=True)

# Relations
customer = ForeignKey('User', on_delete=PROTECT, limit_choices_to={'role__in': ['buyer', 'recycler']})
product = ForeignKey('Product', on_delete=PROTECT)`}
        note=" Orders link a customer (buyer/recycler) to a product. Stock is reduced only when status = 'paid'."
      />

      <SchemaSection
        title="Payment Model"
        lang="python"
        schema={`id = UUIDField(primary_key=True, default=uuid.uuid4)
amount = DecimalField(max_digits=10, decimal_places=2)
status = CharField(choices=[
    ('initiated', 'Initiated'),
    ('success', 'Success'),
    ('failed', 'Failed')
], default='initiated')
mpesa_transaction_id = CharField(max_length=50, unique=True, null=True, blank=True)
callback_data = JSONField(null=True, blank=True)  # raw M-Pesa response
created_at = DateTimeField(auto_now_add=True)

# Relations
order = OneToOneField('Order', on_delete=CASCADE)`}
        note=" Payment is 1:1 with Order. M-Pesa callbacks update status and store transaction_id. Never store raw card data."
      />
    </div>
  );
}

function SchemaSection({
  title,
  lang,
  schema,
  note,
}: {
  title: string;
  lang: string;
  schema: string;
  note?: string;
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
      {note && (
        <p className="mt-3 text-sm text-gray-700 italic bg-gray-50 p-3 rounded-lg">
          {note}
        </p>
      )}
    </div>
    
  );
}