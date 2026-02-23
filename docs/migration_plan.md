# React + Ant Design + Storybook Migration Plan

## Overview

This document outlines the migration plan used to convert a static HTML portfolio website to a modern React application with TypeScript, Ant Design components, and Storybook documentation.

## Original State

- Single `index.html` (252 lines) with Bootstrap 4/5
- CSS file (189 lines) with custom styling
- Minimal JS (8 lines) for mailto functionality
- 6 project cards, 2 modals, header/footer

## Target State

- React 19 + TypeScript application
- Vite as build tool
- Ant Design 6 component library
- Storybook 10 for documentation
- Vitest + React Testing Library for testing
- GitHub Actions CI/CD pipeline

---

## Phase 1: Project Setup

### 1.1 Initialize Vite + React + TypeScript

```bash
npm init -y
npm install react react-dom
npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
```

### 1.2 Install Dependencies

```bash
# Core UI
npm install antd @ant-design/icons

# Storybook
npx storybook@latest init

# Testing
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Code Quality
npm install -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

# Email (optional)
npm install @emailjs/browser

# Deployment
npm install -D gh-pages
```

### 1.3 Project Structure

```
src/
├── components/
│   ├── atoms/           # Avatar, SocialIcon, TechTag, IconButton
│   ├── molecules/       # ProjectCard, SocialLinks, ContactForm, Modals
│   ├── organisms/       # Header, AboutSection, PortfolioGrid, Footer
│   └── templates/       # MainLayout
├── data/
│   ├── projects.ts      # Project data (typed)
│   ├── personalInfo.ts  # Profile data (typed)
│   └── socialLinks.ts   # Social links (typed)
├── hooks/
│   ├── useModal.ts      # Modal state management
│   └── useEmailForm.ts  # Email form functionality
├── styles/
│   ├── theme.ts         # Ant Design theme config
│   └── global.css       # Global styles
├── types/
│   └── index.ts         # TypeScript interfaces
├── utils/
│   └── email.ts         # Email utility functions
├── App.tsx
└── main.tsx
```

---

## Phase 2: TypeScript Configuration

### 2.1 Type Definitions

```typescript
// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  type: 'github' | 'linkedin' | 'arcgis';
  url: string;
}

export interface SocialLink {
  platform: 'linkedin' | 'github' | 'resume' | 'certification';
  url: string;
  icon: string;
  tooltip: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  education: string[];
  email: string;
  avatar: string;
  bio: string;
}
```

### 2.2 Path Aliases

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@hooks/*": ["src/hooks/*"],
      "@data/*": ["src/data/*"]
    }
  }
}
```

---

## Phase 3: Ant Design Theme

Map original CSS colors to Ant Design tokens:

| Original CSS | Ant Design Token | Value |
|--------------|------------------|-------|
| Header/Footer BG | `colorPrimary` | `#0a4275` |
| Button BG | `colorPrimaryHover` | `#0C355E` |
| Button Hover | `colorPrimaryActive` | `#0056b3` |
| Font | `fontFamily` | `'Montserrat', sans-serif` |

```typescript
// src/styles/theme.ts
export const portfolioTheme: ThemeConfig = {
  token: {
    colorPrimary: '#0a4275',
    fontFamily: "'Montserrat', sans-serif",
    borderRadius: 5,
  },
  components: {
    Layout: { headerBg: '#0a4275', footerBg: '#0a4275' },
    Button: { colorPrimary: '#0C355E' },
    Modal: { borderRadiusLG: 10 },
  },
};
```

---

## Phase 4: Component Architecture (Atomic Design)

### 4.1 Atoms

| Component | Ant Design Base | Purpose |
|-----------|-----------------|---------|
| `Avatar` | `Avatar` | Profile picture (150px, circular) |
| `SocialIcon` | Custom + `Tooltip` | Social media icons with hover scale |
| `TechTag` | `Tag` | Tech tags (#PostGIS, #React) |
| `IconButton` | Custom + `Tooltip` | Icon-only buttons for cards |

### 4.2 Molecules

| Component | Ant Design Base | Purpose |
|-----------|-----------------|---------|
| `ProjectCard` | `Card` | Project showcase with image, tags, links |
| `SocialLinks` | `Space` | Row of social icons |
| `ContactForm` | `Input.TextArea` | Feedback form textarea |
| `CertificationModal` | `Modal` | Shows certification image |
| `FeedbackModal` | `Modal` | Email feedback form with states |

### 4.3 Organisms

| Component | Ant Design Base | Purpose |
|-----------|-----------------|---------|
| `Header` | `Layout.Header`, `Row`, `Col` | Profile info, social links |
| `AboutSection` | `Typography` | Bio section |
| `PortfolioGrid` | `Row`, `Col` | 6 project cards (responsive grid) |
| `Footer` | `Layout.Footer` | Contact button, email |

### 4.4 Templates

| Component | Purpose |
|-----------|---------|
| `MainLayout` | Wraps Header + Content + Footer with ConfigProvider |

---

## Phase 5: Storybook Setup

### 5.1 Configuration

- Framework: `@storybook/react-vite`
- Addons: `essentials`, `a11y`, `interactions`, `vitest`

### 5.2 Preview with Theme

```typescript
// .storybook/preview.tsx
decorators: [
  (Story) => (
    <ConfigProvider theme={portfolioTheme}>
      <Story />
    </ConfigProvider>
  ),
]
```

### 5.3 Component Structure

Each component folder includes:

```
ComponentName/
├── ComponentName.tsx
├── ComponentName.stories.tsx
├── ComponentName.test.tsx
├── ComponentName.module.css (if needed)
└── index.ts
```

---

## Phase 6: Testing Strategy

### 6.1 Test Stack

- **Unit Tests**: Vitest + React Testing Library
- **Accessibility**: @storybook/addon-a11y
- **Component Tests**: Storybook interaction tests

### 6.2 Test Setup

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom';

// Mock window.matchMedia for Ant Design
Object.defineProperty(window, 'matchMedia', {
  value: (query: string) => ({
    matches: false,
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  }),
});
```

---

## Phase 7: Code Quality

### 7.1 ESLint

- TypeScript strict rules
- React Hooks rules
- Storybook rules

### 7.2 Prettier

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2
}
```

---

## Phase 8: Deployment

### 8.1 GitHub Actions

```yaml
# .github/workflows/deploy.yml
- Triggers on push to main
- Runs lint, tests, build
- Deploys to GitHub Pages
```

### 8.2 Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "vitest",
    "storybook": "storybook dev -p 6006",
    "deploy": "gh-pages -d dist"
  }
}
```

---

## Implementation Sequence

### Step 1: Project Foundation
1. Initialize Vite project
2. Install all dependencies
3. Configure TypeScript paths
4. Set up Ant Design theme
5. Copy assets to `public/assets/`

### Step 2: Build Atoms
1. Create `Avatar` component + story + test
2. Create `SocialIcon` component + story + test
3. Create `TechTag` component + story + test
4. Create `IconButton` component + story + test

### Step 3: Build Molecules
1. Create `ProjectCard` component + story + test
2. Create `SocialLinks` component + story + test
3. Create `CertificationModal` component + story + test
4. Create `FeedbackModal` component + story + test
5. Create `ContactForm` component + story + test

### Step 4: Build Organisms
1. Create `Header` component + story + test
2. Create `AboutSection` component + story + test
3. Create `PortfolioGrid` component + story + test
4. Create `Footer` component + story + test

### Step 5: Extract Data
1. Create `projects.ts` with all 6 projects
2. Create `personalInfo.ts` with profile data
3. Create `socialLinks.ts` with link data

### Step 6: Integration
1. Create `MainLayout` template
2. Wire up `App.tsx`
3. Add global styles
4. Test responsive design

### Step 7: Quality & Deploy
1. Configure ESLint + Prettier
2. Run full test suite
3. Set up GitHub Actions
4. Deploy to GitHub Pages

---

## Bootstrap to Ant Design Mapping

| Bootstrap | Ant Design |
|-----------|------------|
| `container` | Custom max-width or Layout |
| `row` | `Row` |
| `col-md-4` | `Col span={8}` |
| `col-sm-2` | `Col xs={24} sm={4}` |
| `card` | `Card` |
| `modal` | `Modal` |
| `btn btn-primary` | `Button type="primary"` |
| `form-control` | `Input` / `Input.TextArea` |
| `text-muted` | `Typography.Text type="secondary"` |

---

## Verification Checklist

### Functionality
- [x] Header displays with avatar, name, social links
- [x] Certification modal opens and shows image
- [x] About section displays bio
- [x] Portfolio grid shows 6 cards in responsive layout
- [x] Project cards have hover effects
- [x] All external links open in new tabs
- [x] Footer contact button opens feedback modal
- [x] Feedback modal sends email (mailto or EmailJS)

### Responsive Design
- [x] Mobile (< 576px): Single column layout
- [x] Tablet (576-992px): 2 column cards
- [x] Desktop (> 992px): 3 column cards

### Quality
- [x] All 63 unit tests passing
- [x] TypeScript strict mode enabled
- [x] ESLint configured
- [x] Storybook documentation complete
- [x] CI/CD pipeline configured

---

## Files Migrated

### Assets
- `assets/images/*.{jpg,gif,png}` → `public/assets/images/`
- `assets/icons/*.svg` → `public/assets/icons/`
- `assets/documents/*.pdf` → `public/assets/documents/`

### Content Extracted
- 6 projects from HTML → `src/data/projects.ts`
- Profile info from HTML → `src/data/personalInfo.ts`
- Social links from HTML → `src/data/socialLinks.ts`

### Original Site Archived
- `docs/original-site/index.html`
- `docs/original-site/index.css`
- `docs/original-site/sendMeFeedbackModal.js`
