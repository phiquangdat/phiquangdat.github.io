# Dat Phi - Personal Website (React)

A modern, responsive personal website built with React, showcasing projects, research, and experiences in engineering and technology.

## Features

- **React 18**: Built with the latest React features and hooks
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized React components and minimal bundle size
- **Accessible**: WCAG compliant with proper focus states and ARIA labels
- **Cross-browser Compatible**: Works on all modern browsers

## Project Structure

```
phiquangdat.github.io/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # Site icon
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.js   # Navigation bar
│   │   ├── HomeIntro.js    # Home introduction
│   │   ├── PostCard.js     # Reusable post card
│   │   ├── FeaturedPosts.js # Featured posts section
│   │   ├── PostsList.js    # All posts grid
│   │   ├── Pagination.js   # Pagination controls
│   │   ├── Footer.js       # Footer component
│   │   └── Navigation.css  # Navigation styles
│   ├── data/
│   │   └── posts.js        # Post data and content
│   ├── App.js              # Main App component
│   ├── App.css             # App-specific styles
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   ├── styles.css          # Main CSS file
│   └── reportWebVitals.js  # Performance monitoring
├── package.json            # Dependencies and scripts
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

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (not recommended)

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
