# Beverly Fuentes - Portfolio Website

A modern, aesthetic, and fully functional portfolio website built with HTML, CSS, and JavaScript. Features a responsive design, smooth animations, and a contact form that sends messages directly to your Gmail.

## Features

- **Modern Design** - Clean, elegant interface with gradient accents and smooth animations
- **Fully Responsive** - Looks great on desktop, tablet, and mobile devices
- **Hero Section** - Eye-catching introduction with profile picture
- **About Section** - Showcase your story and achievements
- **Skills Section** - Display your technical and design skills
- **Projects Section** - Featured projects portfolio
- **Contact Form** - Functional contact form to receive messages in your Gmail
- **Smooth Animations** - Engaging scroll animations and hover effects
- **Mobile Navigation** - Hamburger menu for mobile devices

## Quick Start

1. Add your profile picture as `beverly.jpg` in the root folder
2. Configure the contact form to receive emails
3. Open `index.html` in your browser or deploy to a hosting service

## Adding Your Profile Picture

Place your photo in this folder and name it `beverly.jpg`. The website will automatically use it. If the image isn't found, it will show a placeholder.

**Tips for the best look:**
- Use a portrait photo (vertical orientation)
- Recommended size: 800x1000px or similar aspect ratio
- High quality, professional photo

## Setting Up the Contact Form (To Receive Messages in Gmail)

The contact form uses [Formspree](https://formspree.io/) which allows you to receive form submissions directly in your Gmail. It's free and easy to set up.

### Steps:

1. Go to [formspree.io](https://formspree.io/) and create a free account
2. Create a new form and get your form ID (it looks like `xyzabcde`)
3. Open `index.html` and find this line around line 197:
   ```html
   <form id="contact-form" class="contact-form" action="https://formspree.io/f/yourformid" method="POST">
   ```
4. Replace `yourformid` with your actual Formspree form ID
5. Update the email displayed in the contact info (line ~230) from `yourgmail@gmail.com` to your actual Gmail
6. Save and test the form

**Alternative:** You can also use [EmailJS](https://www.emailjs.com/) or connect to a backend service. The form is set up to work with Formspree out of the box.

## Customization

### Update Social Links
Find the social links in `index.html` (Hero section around line ~90 and Footer around line ~305) and replace `#` with your actual profile URLs:
- LinkedIn
- GitHub
- Instagram
- Email

### Update Projects
Edit the Projects section (starting around line ~170) to showcase your actual work. Replace the placeholder content with your project details and add project links.

### Update Skills
Modify the Skills section (around line ~150) to reflect your actual skill set.

### Change Colors
Edit the CSS variables in `style.css` (lines 15-25) to customize the color scheme:
```css
:root {
    --bg-primary: #0a0a0f;
    --accent-primary: #a855f7;
    --accent-secondary: #ec4899;
    /* ... */
}
```

## Deployment

This is a static website, so you can deploy it for free on:
- [Netlify](https://netlify.com/) - Drag and drop the folder
- [Vercel](https://vercel.com/) - Connect to GitHub
- [GitHub Pages](https://pages.github.com/) - Push to GitHub repository
- [Cloudflare Pages](https://pages.cloudflare.com/)

## File Structure

```
beverly portfolio/
├── index.html      # Main HTML file
├── style.css       # Styles and animations
├── app.js          # JavaScript for interactivity
├── beverly.jpg     # Your profile picture (add this)
└── README.md       # This file
```

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

## Tips

- For the contact form to work when opened directly from the file system, you'll need to deploy it or use a local server
- To run locally with a server: `python -m http.server 8000` or use VS Code Live Server
- The form will show success/error messages after submission

---

**Made with ❤️ for Beverly Fuentes**

If you need any adjustments or have questions, feel free to reach out!
