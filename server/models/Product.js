import mongoose from 'mongoose';
const ProductSchema = new mongoose.Schema(
	{
		name: String,
		price: Number,
		rating: Number, 
		supply: Number,
		category: String,
		description: String,
	},
	{
		timestamps: true,
	}
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;