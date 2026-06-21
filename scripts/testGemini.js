require('dotenv').config();

const GeminiClient = require('../utils/GeminiClient');

(async () => {

    const gemini = new GeminiClient();

    const response = await gemini.ask(
        'What is Playwright? Give answer in 2 lines.'
    );

    console.log(response);

})();