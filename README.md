# Intekbit Solutions Website

A modern, responsive website for Intekbit Solutions Pvt. Ltd. built with **React** and **Vite**. It showcases company services, blogs, founders, and more, with a focus on technology, trust, and innovation.

## Features

- **Home Page**: Animated hero, process steps, services, technology stack, founders, and call-to-action.
- **About Us**: Mission, vision, agile methodology, and core values.
- **Services**: Detailed pages for AI/ML, App Development, Web Development, UI/UX, Graphic Design, IT Consulting, Data Services, Cloud Services, and Support & Maintenance.
- **Blog**: Latest articles, featured posts, and blog details.
- **Contact Us**: Form for inquiries.
- **Privacy Policy & Terms**: Legal information.
- **Footer**: Quick links, contact info, and social media.

## Tech Stack

- **Frontend**: React, Vite, React Router, AOS (animations), Tailwind CSS (utility classes)
- **Icons**: react-icons
- **Loading Indicators**: react-loading-indicators
- **Typewriter Effect**: react-simple-typewriter
- **3D Scenes**: @splinetool/react-spline

## Project Structure

```
src/
  components/      # Reusable UI components (home, about, blog, services, etc.)
  data/            # Static data for services, founders, process steps, etc.
  pages/           # Route pages (Home, AboutUs, Blog, ContactUs, etc.)
  App.jsx          # Main app component with routing
  main.jsx         # Entry point
  index.css        # Global styles
public/
  assets/          # Images, logos, icons
  .htaccess        # For deployment configs
```

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Run the development server**
   ```sh
   npm run dev
   ```

3. **Build for production**
   ```sh
   npm run build
   ```

4. **Preview production build**
   ```sh
   npm run preview
   ```

## Customization

- Update company info, images, and service details in [`src/data`](src/data).
- Add or edit blog posts via the backend API (see Blog components).
- Adjust styles in [`src/index.css`](src/index.css) and component files.

## Deployment

- Static hosting (Vercel, Netlify, GitHub Pages, etc.) is supported.
- Ensure `public/assets` and `.htaccess` are included for proper routing and asset loading.

## License

This project is proprietary to Intekbit Solutions Pvt. Ltd.

---

For questions or support, contact [mail].
