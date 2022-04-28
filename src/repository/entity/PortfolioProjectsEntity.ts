import {Schema, model} from 'mongoose';

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
        minlength: 2,
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
});


export default model<PortfolioProjectsEntity>("meta_keywords", portfolioProjectsSchema);