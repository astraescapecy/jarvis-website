# Jarvis website (Vercel + Klaviyo waitlist)

Next.js landing page with email waitlist wired to [Klaviyo](https://www.klaviyo.com/).

## Klaviyo setup

1. Create a free account: [https://www.klaviyo.com/sign-up](https://www.klaviyo.com/sign-up)
2. Create a list: **Audience → Lists → Create list** → name it `Jarvis Waitlist`
3. Copy the **List ID** from the list URL (`.../list/XXXXXX/...`)
4. Create a **Private API key**: [https://www.klaviyo.com/settings/account/api-keys](https://www.klaviyo.com/settings/account/api-keys)
   - Scopes: `profiles:write`, `lists:write`, `subscriptions:write`
5. Set list to **Single opt-in** (Audience → Lists → your list → Settings) so signups are immediate

## Vercel setup

1. Import this folder in [Vercel](https://vercel.com/new) (root directory: `website`)
2. Add environment variables:
   - `KLAVIYO_PRIVATE_API_KEY`
   - `KLAVIYO_LIST_ID`
3. Deploy

## Local dev

```bash
cd website
cp .env.example .env.local   # fill in Klaviyo keys
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy from CLI

```bash
cd website
npx vercel --prod
```

Or from repo root: `./scripts/deploy_website.sh`
