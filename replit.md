# Calculator Medie Facultate - Romanian University Grade Calculator

## Overview
Calculator Medie Facultate is a comprehensive Romanian university grade calculator website built with modern web technologies. The application provides accurate grade calculations with ECTS credits, academic classification tools, and educational content for Romanian university students. The project is optimized to rank for "calculator medie facultate" on Google.ro with comprehensive SEO strategy.

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
1. **Main Grade Calculator**: University grade calculator with ECTS credits support and weighted average calculation
2. **Academic Classification**: Automatic classification (Summa Cum Laude, Magna Cum Laude, etc.) based on grades
3. **ECTS Grade Conversion**: European Credit Transfer System grade equivalencies (A-F scale)

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
- June 19, 2025. Created missing pages: calculator-anticipata, calculator-pilon3, planificator, despre, confidentialitate, termeni. Fixed all 404 footer link errors.
- June 19, 2025. Fixed homepage calculator runtime errors: Resolved nested anchor tag issues in navigation, replaced complex calculator component with simplified version, eliminated Vite runtime error plugin conflicts, ensured all form inputs work correctly without errors.
- June 20, 2025. Completed navigation system: Created 11 comprehensive pages for all dropdown navigation sections (pension types, planning guides, legislation). Fixed all 404 errors in header navigation menus. Improved button styling for better text visibility and contrast.
- June 20, 2025. MAJOR TRANSFORMATION: Complete pivot from pension calculator to university grade calculator targeting "calculator medie facultate" keyword. Implemented comprehensive SEO strategy with ECTS credits calculator, weighted grade calculations, academic classifications, and extensive FAQ content optimized for Google.ro ranking.
- June 23, 2025. NETLIFY DEPLOYMENT FIX: Resolved Netlify showing old data by fixing build configuration. Created fast deployment script that bypasses slow Vite build process, generates optimized static HTML with complete calculator functionality, and includes proper Netlify configuration files for immediate deployment.

## User Preferences
Preferred communication style: Simple, everyday language.