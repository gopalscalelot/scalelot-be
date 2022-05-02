import {Schema, model} from 'mongoose';

interface TestimonialEntity extends Document {
    rating: string,
    clientName: string,
    clientDesignation: string,
    review: string,
}

const testimonialSchema = new Schema<TestimonialEntity>({
    rating:{
        type: String,
        minlength: 1,
        required: true
    },
    clientName: {
        type: String,
        minlength: 2,
        required: true
    },
    clientDesignation: {
        type: String,
        minlength: 2,
        required: true
    },
    review: {
        type: String,
        minlength: 2,
        required: true
    }
});

export default model<TestimonialEntity>("testimonial", testimonialSchema);