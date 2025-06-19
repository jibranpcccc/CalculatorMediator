# Calculator Medie Facultate - Romanian Pension Calculator

## Overview
Calculator Medie Facultate is a comprehensive Romanian pension calculator website built with modern web technologies. The application provides accurate pension calculations, educational content, and strategic planning tools for Romanian citizens. The project follows a three-silo SEO architecture strategy to maximize search engine visibility and user engagement.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with shadcn/ui component library for professional UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with local state management
- **Forms**: React Hook Form with Zod validation for robust form handling

### Backend Architecture
- **Server**: Express.js with TypeScript
- **API**: RESTful endpoints for data management
- **Storage**: In-memory storage implementation (ready for PostgreSQL upgrade)
- **Session Management**: Connect-pg-simple for session handling

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Complete database schema defined for users, calculations, articles, and contacts
- **Current Implementation**: Memory-based storage for development

## Key Components

### Calculator System
1. **Main Pension Calculator**: Standard Romanian pension calculations with current legislation
2. **Early Retirement Calculator**: Includes penalty calculations for anticipatory retirement
3. **Pillar III Calculator**: Private pension contribution projections with tax benefits

### Content Management
1. **SEO Silo Architecture**: Three strategic content silos for optimal search ranking
   - Silo 1: Planificarea Pensiei (Pension Planning)
   - Silo 2: Tipuri de Pensii (Types of Pensions)
   - Silo 3: Legislație și Resurse (Legislation & Resources)

2. **Article System**: Blog functionality with SEO-optimized article structure

### User Interface
1. **Responsive Design**: Mobile-first approach optimized for all devices
2. **Professional Design**: Trust-building blue/gray color scheme for financial services
3. **Component Library**: Reusable UI components with consistent styling

## Data Flow

### Calculation Process
1. User inputs pension data through form components
2. Client-side validation using Zod schemas
3. Calculation logic processes Romanian pension formulas
4. Results displayed with detailed breakdown and explanations
5. Analytics tracking for user behavior insights

### Content Delivery
1. Static content served through React components
2. Dynamic content structure ready for CMS integration
3. SEO optimization through meta tags and structured data
4. Internal linking strategy following silo architecture

## External Dependencies

### Analytics & Tracking
- **Google Analytics 4**: Complete integration with custom event tracking
- **User Behavior Tracking**: Calculator usage, form submissions, page views

### UI Libraries
- **Radix UI**: Accessible, unstyled UI primitives
- **Lucide React**: Icon library for consistent iconography
- **React Query**: Data fetching and caching (configured but not actively used)

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Static type checking throughout the application

## Deployment Strategy

### Netlify Configuration
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: 18
- **SPA Routing**: Configured for client-side routing fallback

### Environment Variables
- `VITE_GA_MEASUREMENT_ID`: Google Analytics tracking ID
- `NODE_ENV`: Environment configuration

### Performance Optimization
- **Static Asset Caching**: Configured headers for optimal caching
- **Bundle Optimization**: Tree shaking and code splitting ready
- **SEO Optimization**: Meta tags, sitemap, and robots.txt configured

### Security Headers
- X-Frame-Options: DENY
- X-XSS-Protection: Enabled
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

## Changelog
- June 19, 2025. Initial setup
- June 19, 2025. Layout optimization: Reduced header navigation size, made calculator more compact, fixed footer overlapping issues, improved overall professional appearance

## User Preferences
Preferred communication style: Simple, everyday language.