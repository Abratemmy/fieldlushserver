import mongoose from 'mongoose';

import Inc from "mongoose-sequence";

const AutoIncrement = Inc(mongoose);


const productSchema = mongoose.Schema({
    name: String,
    perunit: String,
    availableunit: String,
    image: String,
    duration: String,
    rol: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

})
productSchema.plugin(AutoIncrement, { inc_field: 'id' });
// postSchema.plugin(AutoIncrement)
const ProductMessage = mongoose.model('ProductMessage', productSchema);
export default ProductMessage;