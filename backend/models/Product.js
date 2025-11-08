import mongoose from "mongoose";

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
