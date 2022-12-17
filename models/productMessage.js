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
    video: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

})
productSchema.plugin(AutoIncrement, { inc_field: 'id' });
// postSchema.plugin(AutoIncrement)
const ProductMessage = mongoose.model('FieldlushProduct', productSchema);
export default ProductMessage;