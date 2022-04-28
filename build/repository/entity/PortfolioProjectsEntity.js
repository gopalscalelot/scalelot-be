"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const portfolioProjectsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        minlength: 2,
        required: true
    },
    category: {
        type: String,
        minlength: 2,
        required: true
    },
    pageLink: {
        type: String,
        minlength: 2,
        required: true
    },
    rating: {
        type: String,
        minlength: 2,
        required: true
    },
    description: {
        type: String,
        minlength: 2,
        required: true
    },
    webFramework: {
        type: String,
        minlength: 2,
        required: true
    },
    programmingLanguages: {
        type: String,
        minlength: 2,
        required: true
    },
    miscellaneous: {
        type: String,
        minlength: 2,
        required: true
    },
    libraries: {
        type: String,
        minlength: 2,
        required: true
    },
    uiFrameworks: {
        type: String,
        minlength: 2,
        required: true
    },
    designingLanguage: {
        type: String,
        minlength: 2,
        required: true
    },
    designingTools: {
        type: String,
        minlength: 2,
        required: true
    },
});
exports.default = (0, mongoose_1.model)("meta_keywords", portfolioProjectsSchema);
//# sourceMappingURL=PortfolioProjectsEntity.js.map