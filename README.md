# Nisleida Morales - Geoportfolio

A modern, responsive portfolio website showcasing GIS and Urban Planning projects. Built with React, TypeScript, and Ant Design.

## Live Demo

Visit the portfolio at: [urbanis.github.io](https://urbanis.github.io)

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Ant Design 6
- **Documentation**: Storybook 10
- **Testing**: Vitest + React Testing Library
- **CI/CD**: GitHub Actions with GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/urbanis/urbanis.github.io.git
cd urbanis.github.io

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the portfolio.

### Other Commands

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Start Storybook
npm run storybook

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Avatar/      # Profile picture component
│   │   ├── IconButton/  # Icon-only buttons for cards
│   │   ├── SocialIcon/  # Social media icons with tooltips
│   │   └── TechTag/     # Technology tags (#PostGIS, #React)
│   │
│   ├── molecules/       # Combinations of atoms
│   │   ├── CertificationModal/  # Shows certification image
│   │   ├── ContactForm/         # Feedback textarea
│   │   ├── FeedbackModal/       # Email feedback form
│   │   ├── ProjectCard/         # Project showcase card
│   │   └── SocialLinks/         # Row of social icons
│   │
│   ├── organisms/       # Complex UI sections
│   │   ├── AboutSection/    # Bio section
│   │   ├── Footer/          # Contact button and email
│   │   ├── Header/          # Profile info and social links
│   │   └── PortfolioGrid/   # 6 project cards grid
│   │
│   └── templates/       # Page layouts
│       └── MainLayout/  # Main page structure
│
├── data/                # Static data
│   ├── personalInfo.ts  # Profile information
│   ├── projects.ts      # Portfolio projects
│   └── socialLinks.ts   # Social media links
│
├── hooks/               # Custom React hooks
│   ├── useEmailForm.ts  # Email form state management
│   └── useModal.ts      # Modal open/close state
│
├── styles/              # Styling
│   ├── global.css       # Global styles
│   └── theme.ts         # Ant Design theme configuration
│
├── types/               # TypeScript interfaces
│   └── index.ts         # Project, SocialLink, PersonalInfo types
│
├── utils/               # Utility functions
│   └── email.ts         # Email URL preparation
│
├── App.tsx              # Root component
└── main.tsx             # Entry point
```

## Component Documentation

All components are documented in Storybook. Run `npm run storybook` to explore:

- **Atoms**: Basic UI elements with various states and sizes
- **Molecules**: Combined components with interactive features
- **Organisms**: Full page sections with real data
- **Templates**: Complete page layouts

## Testing

The project includes comprehensive unit tests for all components:

```bash
# Run all unit tests
npm run test -- --project=unit --run

# Run tests in watch mode
npm run test -- --project=unit

# Run with coverage
npm run test:coverage
```

## Customization

### Updating Personal Information

Edit `src/data/personalInfo.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  education: ['Degree 1', 'Degree 2'],
  email: 'your.email@example.com',
  avatar: '/assets/images/your-photo.jpg',
  bio: 'Your bio text...',
};
```

### Adding Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Project description.',
  image: '/assets/images/project-image.png',
  imageAlt: 'Alt text',
  tags: ['#Tag1', '#Tag2'],
  links: [
    { type: 'github', url: 'https://github.com/...' },
    { type: 'linkedin', url: 'https://linkedin.com/...' },
    { type: 'arcgis', url: 'https://arcgis.com/...' },
  ],
}
```

### Customizing Theme

Edit `src/styles/theme.ts` to change colors:

```typescript
export const portfolioTheme: ThemeConfig = {
  token: {
    colorPrimary: '#0a4275',      // Primary color
    colorPrimaryHover: '#0C355E', // Hover state
    fontFamily: "'Montserrat', sans-serif",
  },
  // ...
};
```

## Email Configuration (Optional)

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly without opening an email client. Without configuration, it falls back to mailto links.

### Setting up EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{message}}` - The user's message
   - `{{from_name}}` - Sender name (optional)
4. Copy your credentials and create a `.env` file:

```bash
cp .env.example .env
```

5. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

6. For production (GitHub Pages), add these as repository secrets and update the workflow.

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

### Manual Deployment

```bash
npm run build
npm run deploy
```

## Featured Projects

| Project | Description | Technologies |
|---------|-------------|--------------|
| Urban Growth Nordelta | Landsat timelapse analysis | Google Earth Engine |
| Paris Scooter Analysis | Spatiotemporal micromobility study | PostGIS, SQL |
| COVID-19 Monitor | Worldwide cases dashboard | ArcGIS Dashboards |
| NYC Airbnb Analysis | Short-term rental EDA | Power BI |
| Berlin Transport | Public transport service areas | QGIS, ArcGIS |
| Buenos Aires Cycling | Gender-disaggregated bike analysis | ArcGIS Dashboards |

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Nisleida Morales**
GIS Analyst | ArcGIS Pro Associate 2101

- Email: nisleida.morales@gmail.com
- LinkedIn: [linkedin.com/in/nisleida](https://www.linkedin.com/in/nisleida)
- GitHub: [github.com/urbanis](https://github.com/urbanis)
