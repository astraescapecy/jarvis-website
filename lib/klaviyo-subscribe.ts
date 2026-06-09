export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Klaviyo client API — for browser use with Public API Key (Site ID). */
export async function subscribeViaKlaviyoClient(
  email: string,
  publicApiKey: string,
  listId: string,
): Promise<void> {
  const response = await fetch(
    `https://a.klaviyo.com/client/subscriptions/?company_id=${encodeURIComponent(publicApiKey)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/vnd.api+json",
        revision: "2024-07-15",
      },
      body: JSON.stringify({
        data: {
          type: "subscription",
          attributes: {
            custom_source: "Jarvis Waitlist",
            profile: {
              data: {
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
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    console.error("Klaviyo client error:", response.status, detail);
    throw new Error("Could not join the waitlist. Please try again.");
  }
}
