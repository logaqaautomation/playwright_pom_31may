// utils/GeminiClient.js
require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

class GeminiClient {

    constructor() {
        this.genAI = new GoogleGenerativeAI(
            process.env.GEMINI_API_KEY
        );

        this.model = this.genAI.getGenerativeModel({
            model: 'gemini-2.5-flash'
        });
    }

    async ask(prompt) {

        const result = await this.model.generateContent(prompt);

        return result.response.text();
    }
}

module.exports = GeminiClient;