const GeminiClient = require('./GeminiClient');

class LocatorHealer {

    static async heal(
        page,
        locatorName,
        originalLocator
    ) {

        const html = await page.locator('main').innerHTML();

        const gemini = new GeminiClient();


// const prompt = `
// A Playwright locator failed.

// Current HTML:

// ${html}

// Find the Continue button.

// Return ONLY a CSS selector.
// `;

        const prompt = `
        You are a Playwright automation expert.

        A locator failed.

        Locator Name:
        ${locatorName}

        Original Locator:
        ${originalLocator}

        Current Page HTML:
        ${html}

        Return ONLY a CSS selector that uniquely identifies the element.

        Rules:
        - Return only the selector.
        - No explanation.
        - No markdown.
        - No code blocks.
        - Prefer id selectors if available.
        - Otherwise use stable CSS selectors.
        `;
        
        const response =
            await gemini.ask(prompt);

        return response.trim();
    }
}

module.exports = LocatorHealer;