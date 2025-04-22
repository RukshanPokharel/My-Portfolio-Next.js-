# Rukshan's Developer Portfolio

# Portfolio Project Overview

- Built using Next.js (React) + Tailwind CSS + Framer Motion + shadcn/ui
- Fully responsive, professional design
- Purpose: Personal digital CV and showcase to use for applying for IT jobs with a clean, attractive portfolio site

# Pages & Features

1. Hero Section:

- Name, title, animated typing effect
- Profile image
- CTA buttons (View Projects, Download CV)

2. About Me Section:

- Intro paragraph
- Tech stack icons
- Timeline of experience
- Fun facts & personal values

3. Projects Section:

- Project cards with image, title, tech stack, links
- Modal for detailed view on click

4. Contact Me Section:

- Form with EmailJS integration for real email delivery without backend.
- Fields: name, email, message
- Confirmation message on submit

5. Footer:

- Social media icons (GitHub, LinkedIn)
- Copyright and year

6. Navbar:

- Sticky top menu with section links
- Mobile dropdown for smaller screens

7. Dark Mode:

- Toggle button (stored in localStorage)
- Tailwind's class-based dark mode support
  Deployment
- Hosted on Vercel
- GitHub repo linked to Vercel for CI/CD
- Custom domain support with DNS configuration
  Extras
- Resume download (cv.pdf in /public)
- SEO metadata via layout.tsx
- Optional: Plausible.io or Google Analytics

All content is reusable and extendable.

## How to use (EmailJS) integration for real email delivery without backend.

# Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up and log in
3. Go to Email Services and connect your email (e.g. Gmail)
4. Go to Email Templates and create a template (use default one for now)
5. Go to Integration → Copy your:
   o Service ID
   o Template ID
   o Public Key

# Step 2: Install EmailJS SDK

- npm install emailjs-com.

# Step 3: Use it in a component

       import { useRef, useState } from 'react'

import emailjs from 'emailjs-com'

       export default function Contact() {

const formRef = useRef<HTMLFormElement>(null)
const [status, setStatus] = useState('')

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()
setStatus('Sending...')

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus('Message sent successfully!')
          formRef.current?.reset()
        },
        (error) => {
          console.error(error)
          setStatus('Failed to send. Try again later.')
        }
      )

}

Return(

<form ref={formRef} onSubmit={sendEmail} className="space-y-6">
// form
</form>
{status && <p className="mt-4 text-sm text-green-500">{status}</p>}
)

# Step 4: Add Environment Variables

Create .env.local in your root folder:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

---

## Getting Started

```bash
git clone https://github.com/RukshanPokharel/My-Portfolio-Next.js-.git
cd rukshan-portfolio
npm install
npm run dev
```

# Rename .env.example to .env.local and add your EmailJS keys:

NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
