# YouTube Clone App

A React-based YouTube clone that uses the official YouTube Data API v3 to fetch and display videos, with features like search, video playback, and trending videos.

## Features

- Search for videos using YouTube Data API
- View trending/recommended videos
- Watch videos with embedded player
- Dark/light mode toggle
- Responsive design that mimics the YouTube UI
- Video details with title, channel, views, and description
- Category filters (Music, Gaming, News, etc.)
- Shorts section with vertical video format

## Prerequisites

Before you can run this application, you need:

1. Node.js (v16 or newer)
2. npm or yarn
3. A Google API key with YouTube Data API v3 access

## Getting a YouTube API Key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Library"
4. Search for "YouTube Data API v3" and enable it
5. Go to "APIs & Services" > "Credentials"
6. Click "Create Credentials" > "API Key"
7. Copy your new API key

**Note on API Quotas**: The YouTube Data API has quota limits. Each search query costs 100 units, and the free tier provides 10,000 units per day. This means you can make about 100 search requests per day before hitting limits.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd MusicAPI/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Create a `.env` file in the client directory with your API key:
   ```
   VITE_YOUTUBE_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

5. Access the application at `http://localhost:5173`

## Project Structure

```
client/
├── src/
│   ├── App.jsx         # Main application component
│   ├── App.css         # Application styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (API key)
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
```

## API Endpoints Used

This application uses the following YouTube API endpoints:

1. **Search**: `https://www.googleapis.com/youtube/v3/search`
   - Used to search for videos based on user queries

2. **Videos**: `https://www.googleapis.com/youtube/v3/videos`
   - Used to fetch trending/popular videos

## Technologies Used

- React 19
- Vite 6
- Tailwind CSS 4
- YouTube Data API v3

## Usage

- **Search**: Use the search bar at the top to find videos
- **Watch Videos**: Click on any video thumbnail to watch it
- **Toggle Dark/Light Mode**: Use the sun/moon icon in the top-right corner
- **Browse Categories**: Scroll through category buttons at the top of the home page
- **View Trending**: Trending videos are displayed on the home page

## License

This project is for educational purposes only. All YouTube branding and content remains the property of Google LLC.

## Disclaimer

This application is not affiliated with, endorsed by, or sponsored by YouTube or Google LLC.