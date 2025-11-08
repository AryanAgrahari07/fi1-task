## i. Setup and Run Instructions

### Prerequisites
- Node.js (v20 or higher)
- MongoDB (local or cloud instance)

### Steps to Run

Clone the repository and move into the backend folder:
```bash
cd backend
npm install

Create a .env file in the backend directory:

PORT=4000
MONGO_URI=mongodb://localhost:27017/1fi_assignment
FRONTEND_URL=http://localhost:5173

Start the backend server:
npm start


The backend will run on:
http://localhost:4000


ii. API Endpoints and Example Responses
GET /api/products

Fetches all available products (basic info including first variant).

Example Response

[
  {
    "_id": "690fa28b36d384e4ee9f2ae2",
    "name": "iPhone 17 Pro",
    "slug": "iphone-17-pro",
    "variants": [
      {
        "color": "Silver",
        "storage": "128 GB",
        "price": 119900,
        "mrp": 124900,
        "image": "https://images.unsplash.com/photo-1569183091671..."
      }
    ]
  },
  {
    "_id": "690fa28b36d384e4ee9f2aff",
    "name": "OnePlus 12",
    "slug": "oneplus-12",
    "variants": [
      {
        "color": "Lunar Black",
        "storage": "256 GB",
        "price": 79999,
        "mrp": 84999,
        "image": "https://images.unsplash.com/photo-1693822845595..."
      }
    ]
  }
]

GET /api/products/:slug

Fetches full product details including all variants and EMI plans.

Example Response

{
  "_id": "690fa28b36d384e4ee9f2ae2",
  "name": "iPhone 17 Pro",
  "slug": "iphone-17-pro",
  "brand": "Apple",
  "description": "Next-gen smartphone with advanced camera and A18 chip.",
  "variants": [
    {
      "color": "Silver",
      "storage": "128 GB",
      "price": 119900,
      "mrp": 124900,
      "image": "https://images.unsplash.com/photo-1569183091671...",
      "emiPlans": [
        {
          "tenure": 6,
          "monthlyAmount": 19983,
          "interestRate": 0,
          "cashback": "₹5,000"
        },
        {
          "tenure": 12,
          "monthlyAmount": 9992,
          "interestRate": 0,
          "cashback": "₹5,000"
        }
      ]
    }
  ]
}


iii. Tech Stack Used

React.js - Frontend
Node.js – Runtime environment
Express.js – Server framework
MongoDB – Database and object modeling


iv. Schema Used

const emiPlanSchema = new mongoose.Schema({
  tenure: Number,
  monthlyAmount: Number,
  interestRate: Number,
  cashback: String
});

const variantSchema = new mongoose.Schema({
  color: String,
  storage: String,
  price: Number,
  mrp: Number,
  image: String,
  emiPlans: [emiPlanSchema]
});

const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  brand: String,
  description: String,
  variants: [variantSchema]
});

export default mongoose.model("Product", productSchema);

