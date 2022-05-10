import {Schema, model} from 'mongoose';
import {ObjectId} from "mongodb";

interface TestimonialEntity extends Document {
    rating: string,
    clientName: string,
    clientDesignation: string,
    review: string,
    files: string[],
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
    },
    files: [{
        type: String,
        required: true
    }],
});

export default model<TestimonialEntity>("testimonial", testimonialSchema);