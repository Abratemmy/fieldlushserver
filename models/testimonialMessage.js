import mongoose from 'mongoose';

// import Inc from "mongoose-sequence";

// const AutoIncrement = Inc(mongoose);


const testimonialSchema = mongoose.Schema({
    name: String,
    image: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    },

})
// testimonialSchema.plugin(AutoIncrement, { inc_field: 'id' });
// postSchema.plugin(AutoIncrement)
const TestimonyMessage = mongoose.model('TestimonyMessage', testimonialSchema);
export default TestimonyMessage;