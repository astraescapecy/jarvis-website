import { NextResponse } from "next/server";

/**
 * One-time internal export for provisioning sibling apps (e.g. Riva Fitness).
 * Protected by SETUP_EXPORT_TOKEN env var. Remove after use.
 */
export async function GET(request: Request) {
  const token = process.env.SETUP_EXPORT_TOKEN;
  const auth = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (!token?.trim() || auth !== token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    publicApiKey: process.env.KLAVIYO_PUBLIC_API_KEY ?? "",
    listId: process.env.KLAVIYO_LIST_ID ?? "",
    privateApiKey: process.env.KLAVIYO_PRIVATE_API_KEY ?? "",
  });
}
