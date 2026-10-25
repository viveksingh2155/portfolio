# Vivek Singh - Portfolio Website

A modern, interactive portfolio website showcasing work in AI/ML, web development, and software engineering. Built with React, TypeScript, and cutting-edge web technologies.

## ✨ Features

### 🎨 Visual Design
- **Cursor-Reactive Dot Mesh Background** - WebGL-powered animated background with ambient floating, pulsing, and twinkling effects
- **Smooth Animations** - Framer Motion and GSAP animations throughout
- **Fully Responsive** - Mobile-first design optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling** - Lenis smooth scroll integration
- **Accessibility** - Reduced motion support for users with motion sensitivity
- **Modern UI** - Clean, minimalist design with glassmorphism effects

### 🚀 Interactive Components
- **GSAP ScrollTrigger Projects** - Pinned scroll showcase with 6 featured projects
- **Animated Header** - Smooth navbar transitions on scroll with backdrop blur
- **Social Media Sidebar** - Vertical floating social links with bubble design
- **Technology Marquee** - Infinite scrolling technology showcase
- **Contact Section** - Functional contact with email/phone integration
- **Mouse Scroll Indicator** - Animated mouse icon for scroll guidance

### 💼 Featured Projects
1. **O.A.S.I.S** - Multimodal AI video summarization system
2. **PromptOS** - Multi-agent prompt optimization platform
3. **ML-Based Rockmine Prediction** - End-to-end ML classification workflow
4. **Alexa Voice Assistant** - Voice-controlled automation system
5. **Student Hub** - Full-featured student management dashboard
6. **Cisco Networking Configuration** - Network configuration and simulation

All projects feature real images and detailed descriptions with technology stacks.

## 🛠️ Tech Stack

### Core
- **React 19.0.3** - UI library
- **TypeScript 6.0.3** - Type safety
- **Vite 8.3.4** - Build tool
- **Tailwind CSS 4.3.3** - Styling

### Animation & Graphics
- **Framer Motion 14.6.0** - React animations
- **GSAP 3.15.0** - Advanced animations with ScrollTrigger
- **Three.js 0.172.0** - WebGL 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber

### Utilities
- **Lenis 1.1.19** - Smooth scroll
- **Lucide React 0.468.0** - Icon library
- **PostCSS** - CSS processing

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/viveksingh2155/portfolio.git

# Navigate to project directory
cd vivek-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Development

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 📁 Project Structure

```
vivek-portfolio/
├── public/
│   └── images/
│       ├── vivek.png           # Profile photo
│       ├── oasis.png           # O.A.S.I.S project
│       ├── promptos.png        # PromptOS project
│       ├── mlprediction.png    # ML Prediction project
│       ├── alexa.png           # Alexa project
│       ├── studenthub.png      # Student Hub project
│       └── portfolio_clean.png # Cisco project
├── src/
│   ├── components/
│   │   ├── About.tsx           # About section
│   │   ├── AnimatedText.tsx    # Text animation component
│   │   ├── Contact.tsx         # Contact section
│   │   ├── Credentials.tsx     # Education & certifications
│   │   ├── CursorDotMesh.tsx   # WebGL background
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── MobileMenu.tsx      # Mobile navigation
│   │   ├── ProjectShowcase.tsx # Projects section (GSAP ScrollTrigger)
│   │   ├── Reveal.tsx          # Scroll reveal animations
│   │   ├── SectionLabel.tsx    # Section headers
│   │   ├── Services.tsx        # Services offered
│   │   ├── Skills.tsx          # Technical skills
│   │   ├── SocialSidebar.tsx   # Social media links (right side)
│   │   └── TechnologyMarquee.tsx # Tech stack marquee
│   ├── data/
│   │   ├── credentials.ts      # Education data
│   │   ├── projects.ts         # Project data
│   │   ├── siteConfig.ts       # Site configuration
│   │   └── skills.ts           # Skills data
│   ├── hooks/
│   │   └── useReducedMotion.ts # Motion preference hook
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── App.tsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── index.css               # Global styles
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/siteConfig.ts`:
```typescript
export const siteConfig: SiteConfig = {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: '+1234567890',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
  location: 'Your Location',
  bio: {
    tagline: 'Your tagline',
    description: 'Your bio...'
  }
};
```

### Add/Edit Projects
Edit `src/data/projects.ts`:
```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    number: '01',
    category: 'Category',
    title: 'Project Title',
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    visual: {
      type: 'image',
      image: '/images/your-project.png'
    },
    repository: 'https://github.com/yourusername/repo',
  },
];
```

### Modify Skills
Edit `src/data/skills.ts` to update your technical skills and proficiency levels.

### Update Education/Certifications
Edit `src/data/credentials.ts` to add or modify education and certifications.

### Customize Colors
Edit `src/index.css` for custom color scheme:
```css
@layer base {
  :root {
    --background: 10 10 11;      /* Background color */
    --foreground: 255 255 255;   /* Text color */
    --muted: 146 146 147;        /* Muted text */
    --accent: 34 197 94;         /* Accent color */
    --border: 39 39 42;          /* Border color */
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Connect repository to [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload 'dist' folder to your hosting service
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS v4 configuration
- `postcss.config.js` - PostCSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## ⚡ Performance

- **Bundle Size**: ~1.44MB (416KB gzipped)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Optimized Images**: All project images compressed
- **Code Splitting**: Automatic via Vite
- **Tree Shaking**: Dead code elimination enabled

## 🎯 Key Features Implemented

- ✅ Smooth navbar transitions with Framer Motion
- ✅ Mouse scroll indicator (replaced arrow)
- ✅ Phone number hidden (kept Call/SMS buttons)
- ✅ Green blinking light removed from "Open to Opportunities"
- ✅ Social media sidebar with vertical bubbles
- ✅ Email opens in browser (Gmail/Outlook web)
- ✅ All projects use real images (no placeholder visuals)
- ✅ "Learn More" buttons removed
- ✅ Fully responsive across mobile, tablet, and desktop
- ✅ Clean codebase (unused files removed)

## 📧 Contact Integration

- **Email**: Opens in Gmail/Outlook web compose
- **Phone**: Call and SMS buttons (number hidden for privacy)
- **Social Links**: GitHub, LinkedIn, Twitter, Instagram
- **Copy to Clipboard**: Email copy button with visual feedback

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you find any bugs or have suggestions, please open an issue.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vivek Singh**
- GitHub: [@viveksingh2155](https://github.com/viveksingh2155)
- LinkedIn: [Vivek Singh](https://www.linkedin.com/in/vivek-singh-345365291)
- Email: viveksingh31918@gmail.com
- Phone: +91 7054378095

**Education**
- B.Tech/B.E in Information Science
- Nitte Meenakshi Institute of Technology (NMIT)
- 2023 - 2027

## 🙏 Acknowledgments

- Design inspiration from [romancaseres.cloud](https://romancaseres.cloud)
- Icons by [Lucide](https://lucide.dev)
- Animations powered by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)
- 3D graphics with [Three.js](https://threejs.org)
- Smooth scrolling by [Lenis](https://lenis.darkroom.engineering/)

---

Built with ❤️ using React, TypeScript, and modern web technologies.
