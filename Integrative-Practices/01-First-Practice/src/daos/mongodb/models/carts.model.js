import mongoose from 'mongoose';

const cartsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products', default: [] }]
})

cartsSchema.pre('find', function () {
    this.populate('products')
})

export const CartsModel = mongoose.model('carts', cartsSchema)