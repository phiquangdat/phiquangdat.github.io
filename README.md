# Dat Phi - Personal Website (React + Backend)

URL: https://phiquangdat-git-main-dat-phis-projects.vercel.app/

A modern, responsive personal website built with React and Express.js backend, showcasing projects, research, and experiences in engineering and technology. Previously used Supabase, now converted to a local backend solution.

## Features

- **React 18**: Built with the latest React features and hooks
- **Express.js Backend**: Local API server replacing Supabase
- **SQLite Database**: Local database for posts storage
- **RESTful API**: Complete CRUD operations for posts
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized React components and minimal bundle size
- **Accessible**: WCAG compliant with proper focus states and ARIA labels
- **Cross-browser Compatible**: Works on all modern browsers

## Project Structure

```
phiquangdat.github.io/
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── services/       # API service functions
│   │   ├── routes/         # Routing configuration
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                # Express.js backend API
│   ├── server.js           # Main server file
│   ├── scripts/
│   │   └── init-db.js      # Database initialization
│   ├── package.json        # Backend dependencies
│   └── README.md          # Backend documentation
├── scripts/                # Utility scripts
├── package.json            # Root package.json with scripts
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/phiquangdat/phiquangdat.github.io.git
cd phiquangdat.github.io
```

2. Install all dependencies (frontend and backend):

```bash
npm run install-deps
```

3. Initialize the database with sample data:

```bash
npm run init-db
```

4. Start both frontend and backend servers:

```bash
npm run dev:full
```

- Frontend will be available at `http://localhost:8010`
- Backend API will be available at `http://localhost:3001`

### Available Scripts

- `npm run dev` - Runs only the frontend in development mode
- `npm run dev:backend` - Runs only the backend server
- `npm run dev:full` - Runs both frontend and backend simultaneously
- `npm run build` - Builds the frontend for production
- `npm run preview` - Preview the production build
- `npm run init-db` - Initialize database with sample data
- `npm run install-deps` - Install dependencies for both frontend and backend

## Components

### Navigation

- Fixed top navigation with social icons
- Responsive mobile menu
- Scroll-based background changes

### HomeIntro

- Simple introduction section
- Personal branding and welcome message

### PostCard

- Reusable component for displaying posts
- Consistent styling and hover effects
- Displays title, description, date, and read time

### FeaturedPosts

- Displays 3 featured posts at the top
- Uses the same PostCard component

### PostsList

- Grid layout for all posts
- Responsive design for different screen sizes

### Pagination

- Navigation for additional pages
- Currently shows "Older" link

### Footer

- Simple footer with links
- Copyright information

## Data Management

All post data is stored in `src/data/posts.js`:

- `featuredPosts` - Array of 3 featured posts
- `allPosts` - Array of all regular posts

Each post object contains:

- `id` - Unique identifier
- `title` - Post title
- `description` - Post description
- `date` - Publication date
- `readTime` - Estimated reading time
- `icon` - Font Awesome icon class
- `link` - Post URL (currently "#")

## Customization

### Personal Information

Update the following files:

- `src/components/Navigation.js` - Name and social links
- `src/components/HomeIntro.js` - Introduction text
- `src/components/Footer.js` - Footer content
- `src/data/posts.js` - All post content

### Styling

- `src/styles.css` - Main styles (imported from original)
- `src/components/Navigation.css` - Navigation-specific styles
- `src/App.css` - App-level styles

### Adding New Posts

1. Add post data to `src/data/posts.js`
2. Update the arrays as needed
3. The components will automatically render new posts

## Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. Push to GitHub repository
3. Enable GitHub Pages in repository settings
4. Set source to `/docs` or `gh-pages` branch

### Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Vercel

1. Import your GitHub repository
2. Vercel will automatically detect React settings
3. Deploy with zero configuration

## Performance

The React app is optimized for performance:

- Code splitting with React.lazy()
- Optimized bundle size
- Web Vitals monitoring
- Efficient component rendering
- Minimal re-renders

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast color scheme
- Focus indicators for all interactive elements

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Credits

- **React**: JavaScript library for building user interfaces
- **Bootstrap**: CSS framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography
- **Inter & Playfair Display**: Font families

---

Built with ❤️ and React for showcasing your professional journey.
