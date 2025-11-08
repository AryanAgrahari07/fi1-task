import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const seedData = [
  {
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    brand: "Apple",
    description: "iPhone 17 Pro — flagship performance, photography and premium build.",
    variants: [
      {
        color: "Orange",
        storage: "256 GB",
        price: 127400,
        mrp: 134900,
        image: "https://images.unsplash.com/photo-1657615590410-bed9f3af1ae8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
        emiPlans: [
          { tenure: 3, monthlyAmount: 44967, interestRate: 0, cashback: "₹7,500" },
          { tenure: 6, monthlyAmount: 22483, interestRate: 0, cashback: "₹7,500" },
          { tenure: 12, monthlyAmount: 11242, interestRate: 0, cashback: "₹7,500" },
          { tenure: 24, monthlyAmount: 5621, interestRate: 0, cashback: "₹7,500" },
          { tenure: 36, monthlyAmount: 4297, interestRate: 10.5, cashback: "₹7,500" },
          { tenure: 48, monthlyAmount: 3385, interestRate: 10.5, cashback: "₹7,500" },
          { tenure: 60, monthlyAmount: 2842, interestRate: 10.5, cashback: "₹7,500" }
        ]
      },
      {
        color: "Graphite",
        storage: "512 GB",
        price: 139900,
        mrp: 149900,
        image: "https://images.unsplash.com/photo-1706972612625-d5be9a7aadd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        emiPlans: [
          { tenure: 3, monthlyAmount: 46633, interestRate: 0, cashback: "₹8,000" },
          { tenure: 6, monthlyAmount: 23317, interestRate: 0, cashback: "₹8,000" },
          { tenure: 12, monthlyAmount: 11659, interestRate: 0, cashback: "₹8,000" },
          { tenure: 24, monthlyAmount: 5830, interestRate: 5.0, cashback: "₹8,000" },
          { tenure: 36, monthlyAmount: 4450, interestRate: 10.5, cashback: "₹8,000" }
        ]
      },
      {
        color: "Silver",
        storage: "128 GB",
        price: 119900,
        mrp: 124900,
        image: "https://images.unsplash.com/photo-1569183091671-696402586b9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974",
        emiPlans: [
          { tenure: 6, monthlyAmount: 19983, interestRate: 0, cashback: "₹5,000" },
          { tenure: 12, monthlyAmount: 9992, interestRate: 0, cashback: "₹5,000" },
          { tenure: 24, monthlyAmount: 4996, interestRate: 9.0, cashback: "₹5,000" }
        ]
      }
    ]
  },

  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-s24-ultra",
    brand: "Samsung",
    description: "Samsung Galaxy S24 Ultra — pro-level camera and display.",
    variants: [
      {
        color: "Graphite",
        storage: "256 GB",
        price: 119999,
        mrp: 129999,
        image: "https://images.unsplash.com/photo-1623593476267-c7e98d1fb572?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
        emiPlans: [
          { tenure: 3, monthlyAmount: 40000, interestRate: 0, cashback: "₹3,000" },
          { tenure: 6, monthlyAmount: 20000, interestRate: 0, cashback: "₹3,000" },
          { tenure: 12, monthlyAmount: 10000, interestRate: 9.5, cashback: "None" },
          { tenure: 24, monthlyAmount: 5200, interestRate: 9.5, cashback: "None" }
        ]
      },
      {
        color: "Silver",
        storage: "512 GB",
        price: 139999,
        mrp: 149999,
        image: "https://plus.unsplash.com/premium_photo-1680459838836-a8433c8f664e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        emiPlans: [
          { tenure: 6, monthlyAmount: 23333, interestRate: 0, cashback: "₹4,000" },
          { tenure: 12, monthlyAmount: 11666, interestRate: 0, cashback: "₹4,000" },
          { tenure: 36, monthlyAmount: 4200, interestRate: 10.5, cashback: "None" }
        ]
      }
    ]
  },

  {
    name: "OnePlus 12",
    slug: "oneplus-12",
    brand: "OnePlus",
    description: "OnePlus 12 — flagship speed, smooth experience and fast charging.",
    variants: [
      {
        color: "Lunar Black",
        storage: "256 GB",
        price: 79999,
        mrp: 84999,
        image: "https://images.unsplash.com/photo-1693822845595-862bacc31cf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFwcGxlJTIwaXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        emiPlans: [
          { tenure: 3, monthlyAmount: 26666, interestRate: 0, cashback: "₹2,000" },
          { tenure: 6, monthlyAmount: 13333, interestRate: 0, cashback: "₹2,000" },
          { tenure: 12, monthlyAmount: 6666, interestRate: 0, cashback: "₹2,000" },
          { tenure: 24, monthlyAmount: 3500, interestRate: 10.5, cashback: "None" }
        ]
      },
      {
        color: "Ocean Blue",
        storage: "512 GB",
        price: 89999,
        mrp: 94999,
        image: "https://plus.unsplash.com/premium_photo-1680459838836-a8433c8f664e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
        emiPlans: [
          { tenure: 6, monthlyAmount: 15000, interestRate: 0, cashback: "₹2,500" },
          { tenure: 12, monthlyAmount: 7500, interestRate: 0, cashback: "₹2,500" },
          { tenure: 36, monthlyAmount: 2600, interestRate: 10.5, cashback: "None" }
        ]
      }
    ]
  }
];

(async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    await Product.deleteMany({});
    await Product.insertMany(seedData);
    console.log(" Database seeded with products");
    process.exit(0);
  } catch (err) {
    console.error("Seed error:", err);
    process.exit(1);
  }
})();
