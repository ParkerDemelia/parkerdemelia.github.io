const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
    // Enable CORS
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // Handle preflight requests
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const { line_items } = JSON.parse(event.body);

        if (!line_items || line_items.length === 0) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'No items provided' })
            };
        }

        // Validate line items
        for (const item of line_items) {
            if (!item.price || !item.quantity) {
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: 'Invalid line item format' })
                };
            }
        }

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            success_url: `${event.headers.origin}/success.html`,
            cancel_url: `${event.headers.origin}/merch.html`,
            ui_mode: 'embedded'
        });

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                clientSecret: session.client_secret
            })
        };
    } catch (error) {
        console.error('Stripe error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: error.message || 'Internal server error'
            })
        };
    }
}; 