import {Schema, model} from 'mongoose';
import {ObjectId} from "mongodb";

interface PortfolioProjectsEntity extends Document {
    title: string,
    category: string,
    pageLink: string,
    rating: string,
    description: string,
    webFramework: string,
    programmingLanguages: string,
    miscellaneous: string,
    libraries: string,
    uiFrameworks: string,
    designingLanguage: string,
    designingTools: string,
    tags: string[],
    files: string[],
}

const portfolioProjectsSchema = new Schema<PortfolioProjectsEntity>({
    title:{
        type: String,
        minlength: 2,
        required: true
    },
    category:{
        type: String,
        minlength: 2,
        required: true
    },
    pageLink:{
        type: String,
        minlength: 2,
        required: true
    },
    rating:{
        type: String,
        minlength: 1,
        required: true
    },
    description:{
        type: String,
        minlength: 2,
        required: true
    },
    webFramework:{
        type: String,
        minlength: 2,
        required: true
    },
    programmingLanguages:{
        type: String,
        minlength: 2,
        required: true
    },
    miscellaneous:{
        type: String,
        minlength: 2,
        required: true
    },
    libraries:{
        type: String,
        minlength: 2,
        required: true
    },
    uiFrameworks:{
        type: String,
        minlength: 2,
        required: true
    },
    designingLanguage:{
        type: String,
        minlength: 2,
        required: true
    },
    designingTools:{
        type: String,
        minlength: 2,
        required: true
    },
    tags: [{
        type: String,
    }],
    files: [{
        type: String,
        required: true
    }],
});


export default model<PortfolioProjectsEntity>("portfolio-project", portfolioProjectsSchema);