# ProductDetailsModal Enhancement

## Overview
The ProductDetailsModal has been completely enhanced with a two-page modal system, quantity selection, Web3Forms integration, and automated enquiry functionality.

## Features

### 1. Two-Page Modal System
- **Page 1**: Product details with image carousel, specifications, and quantity selection
- **Page 2**: Contact form for lead generation

### 2. Quantity Selection
- Select between "Pieces" or "Box" units
- Increment/decrement quantity with buttons
- Manual input with validation (minimum 1)

### 3. Web3Forms Integration
- **Access Key**: `173a6e9e-6404-4660-8381-88f16393fab5`
- Collects: Name, Email, Company, Website, Message
- Sends product details and quantity information
- Success/error handling with user feedback

### 4. Automated Enquiry System
- WhatsApp integration with pre-formatted message
- Message format:
  ```
  Hi buyer,
  We have received your enquiry for [Product Name] on IndiaMART. Please find the product photos.
  
  Ruhi Electricals, New Delhi
  GST verified supplier ✅
  ```

### 5. Enhanced UI/UX
- Responsive design for mobile and desktop
- Image carousel with thumbnail navigation
- Clean form validation
- Loading states and success messages
- Proper modal state management

## Usage

```jsx
import ProductDetailsModal from "./components/ProductDetailsModal";

function ProductCard({ product }) {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setModalOpen(true)}>
        View Details
      </button>
      
      <ProductDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
      />
    </>
  );
}
```

## Configuration

### Phone Number
Update the phone number in the `handleEnquiry` function:
```javascript
const phoneNumber = "+919876543210"; // Replace with actual number
```

### Web3Forms
The form is configured with access key `173a6e9e-6404-4660-8381-88f16393fab5`. The form submissions will be sent to the email associated with this Web3Forms account.

### Styling
The component uses Tailwind CSS with the brand color scheme:
- Primary: `bg-red-600` / `text-red-600`
- Hover: `bg-red-700`
- Success: `text-green-600`

## Dependencies
- @headlessui/react (Dialog component)
- lucide-react (Icons)
- Next.js Image component
- Tailwind CSS
- Radix UI components (Button, Input, Label, Textarea, RadioGroup)

## Form Submission Data
The Web3Forms submission includes:
- User details (name, email, company, website, message)
- Product information (title, price)
- Selected quantity and unit
- Pre-formatted subject line

## Mobile Responsiveness
- Stacked layout on mobile devices
- Touch-friendly buttons and inputs
- Proper spacing and sizing for small screens 