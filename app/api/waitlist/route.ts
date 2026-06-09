import { NextResponse } from "next/server";

const KLAVIYO_API = "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const privateKey = process.env.KLAVIYO_PRIVATE_API_KEY;
  const listId = process.env.KLAVIYO_LIST_ID;

  if (!privateKey || !listId) {
    return NextResponse.json(
      {
        error:
          "Waitlist is not configured yet. Add KLAVIYO_PRIVATE_API_KEY and KLAVIYO_LIST_ID in Vercel.",
      },
      { status: 503 },
    );
  }

  let body: { email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const klaviyoResponse = await fetch(KLAVIYO_API, {
    method: "POST",
    headers: {
      Authorization: `Klaviyo-API-Key ${privateKey}`,
      "Content-Type": "application/json",
      revision: "2024-10-15",
    },
    body: JSON.stringify({
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          custom_source: "Jarvis Waitlist",
          profiles: {
            data: [
              {
                type: "profile",
                attributes: {
                  email,
                  subscriptions: {
                    email: {
                      marketing: {
                        consent: "SUBSCRIBED",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
        relationships: {
          list: {
            data: {
              type: "list",
              id: listId,
            },
          },
        },
      },
    }),
  });

  if (!klaviyoResponse.ok) {
    const detail = await klaviyoResponse.text();
    console.error("Klaviyo error:", klaviyoResponse.status, detail);
    return NextResponse.json(
      { error: "Could not join the waitlist. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message:
      "You're on the list. We'll email you when Jarvis launches with early access.",
  });
}
