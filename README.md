# BookCourse.co.uk — Next.js + Vercel

Brand-new modern redesign of [bookcourse.co.uk](https://bookcourse.co.uk), built with Next.js 14 (App Router) and Tailwind CSS, ready to deploy on Vercel.

## What's included

- Modern responsive design (mobile-first)
- Home page with hero, featured courses, why-us, contact
- **10 course pages** (auto-generated from `lib/courses.js`)
- **3 location pages** (auto-generated from `lib/locations.js`)
- Category pages: SIA, Construction, Refresher, Popular
- About, Contact, FAQs, Blog, Terms, Privacy, Refund Policy
- Working enquiry form (placeholder — swap to Formspree on deploy)
- SEO metadata, OpenGraph, sensible URL structure
- Vercel `cleanUrls`, plus 301 redirects from old WordPress URLs

## Project structure

```
bookcourse-vercel/
├── app/                 # Next.js App Router pages
│   ├── page.js          # Home
│   ├── layout.js        # Shared layout (Header / Footer)
│   ├── globals.css
│   ├── about/           # /about
│   ├── contact/         # /contact
│   ├── courses/
│   │   ├── page.js      # /courses
│   │   └── [slug]/      # /courses/sia-door-supervisor etc.
│   ├── locations/[slug] # /locations/greenwich etc.
│   ├── sia-courses/
│   ├── sia-refresher-training/
│   ├── construction-courses/
│   ├── popular-courses/
│   ├── blog/
│   ├── faqs/
│   └── components/      # Header, Footer, CourseCard, ContactForm
├── lib/
│   ├── courses.js       # Course catalogue (single source of truth)
│   ├── locations.js     # Training locations
│   └── site.js          # Site-wide constants (phone, email, etc.)
├── public/              # Static assets
├── next.config.js
├── tailwind.config.js
├── vercel.json          # Clean URLs + WP-to-new redirects
└── package.json
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel — step by step

1. **Push this folder to GitHub**

```bash
cd bookcourse-vercel
git init
git add .
git commit -m "Initial Next.js BookCourse build"
git branch -M main
git remote add origin https://github.com/<your-username>/bookcourse-website.git
git push -u origin main
```

2. **Import to Vercel**
   - Go to vercel.com → Add New → Project
   - Select your `bookcourse-website` repo
   - Framework: **Next.js** (auto-detected)
   - Leave build/output settings at defaults
   - Click **Deploy**

3. **Preview**
   - Vercel gives you a URL like `bookcourse-website.vercel.app`
   - Click around, test on mobile, check every page

4. **Connect your real domain `bookcourse.co.uk`**
   - In Vercel → Settings → Domains → Add `bookcourse.co.uk` and `www.bookcourse.co.uk`
   - Vercel shows you the DNS records to set. At SiteGround (DNS Zone Editor):
     - **A record** `@` → `76.76.21.21`
     - **CNAME** `www` → `cname.vercel-dns.com`
   - SSL certificate is auto-issued. Allow 5–60 minutes for propagation.

## Hook up the contact form (recommended)

The contact form currently shows a success message but doesn't email anyone. To make it work without a backend:

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a form and copy its endpoint URL (e.g. `https://formspree.io/f/abcd1234`)
3. Open `app/components/ContactForm.js` and replace the placeholder submission with:

```jsx
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
});
```

4. Commit & push — Vercel redeploys automatically.

## Editing content

- **All courses** live in `lib/courses.js` — edit the array to change titles, prices, descriptions, images, durations.
- **Locations** live in `lib/locations.js`.
- **Phone, email, address, brand text** live in `lib/site.js`.

After editing, run `npm run dev` to preview, then `git push` to deploy.

## Changing the design

- Brand colours: `tailwind.config.js` → `theme.extend.colors.brand` and `accent`
- Typography: `globals.css` imports Inter from Google Fonts; swap the URL & `fontFamily` in tailwind config to change.
- Layout components: `app/components/Header.js`, `Footer.js`, `CourseCard.js`.

## What still needs your input

1. **Real photographs** — currently using stock Unsplash images for hero/courses. Replace `image:` URLs in `lib/courses.js` with photos from your current site (`https://bookcourse.co.uk/wp-content/uploads/...`) or upload to `public/` and use `/images/your-photo.webp`.
2. **Formspree endpoint** — to make the contact form actually send mail.
3. **Real blog posts** — `app/blog/page.js` has 4 placeholder cards; expand into real articles.
4. **Pricing review** — prices were taken from the current site, please double-check.

## License

Proprietary — © BookCourse.co.uk
