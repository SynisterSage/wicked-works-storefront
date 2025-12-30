import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Expecting {cartItems: [...]}
    if (!body || !body.cartItems) {
      return NextResponse.json({ error: 'Missing cartItems' }, { status: 400 });
    }

    const SHOP_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN;
    const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_STOREFRONT_TOKEN;

    if (!SHOP_DOMAIN || !STOREFRONT_TOKEN) {
      // Not configured yet — return a placeholder URL for local testing
      return NextResponse.json({ webUrl: 'https://example.com/checkout-placeholder' });
    }

    // TODO: implement real Storefront Cart/Checkout creation using
    // the Storefront API or Cart API. For MVP we return a placeholder.

    return NextResponse.json({ webUrl: 'https://example.com/checkout-placeholder' });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
