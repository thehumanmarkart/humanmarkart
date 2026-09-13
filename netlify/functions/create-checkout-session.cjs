const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { nickname, sizeKey, success_url, cancel_url } = JSON.parse(event.body);

    // Mapowanie kwot (w centach: 111 = $1.11, 222 = $2.22, 333 = $3.33)
    const priceMap = {
      'small': 111,
      'medium': 222,
      'large': 333
    };

    const amount = priceMap[sizeKey] || 111;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Presence in Archive (${sizeKey.toUpperCase()})`,
            description: `Nickname: ${nickname}`,
          },
          unit_amount: amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: success_url,
      cancel_url: cancel_url,
      // Zapisujemy dane w metadanych Stripe, żeby odebrać je po płatności
      metadata: {
        nickname: nickname,
        sizeKey: sizeKey
      }
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
