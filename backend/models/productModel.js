import mongoose from 'mongoose'



const productSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    images: {
        type: String,
        required: true 
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true,
        default: 0,
      },
      sizes: {
        type: String,
        required: true,
      },
}, {
    timestamps: true
})

const  Product = mongoose.model('Product', productSchema)

export default Product