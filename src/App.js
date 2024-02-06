import React, {useState, useEffect}from 'react';
import './App.css';
import TodoList from './components/TodoList';
import './Pioggia.otf';
import './Crimson.ttf';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { BookOpen, Sun, Star, TrendingUp, Timer, Settings, HelpCircle, CloudRain} from 'lucide-react';
import Header from './components/Header';

const SpotifyWidget = () => {
  const [spotifyData, setSpotifyData] = useState(null);

  useEffect(() => {
    // Fetch Spotify data
  }, []);

  return <div className="widget spotify-widget">Spotify Content</div>;
};

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data
  }, []);

  return <div className="widget weather-widget">Weather Content</div>;
};

const NewsWidget = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    // Fetch news data
  }, []);

  return <div className="widget news-widget">News Content</div>;
};

const NotionWidget = () => {
  const [notionData, setNotionData] = useState(null);

  useEffect(() => {
    // Fetch Notion data
  }, []);

  return <div className="widget notion-widget">Notion Content</div>;
};

function App() {
  return (
    <div className="dashboard-container">
    <div className="dashboard-grid">
      <Header/>
      <SpotifyWidget />
      <WeatherWidget />
      <NotionWidget />
      <NewsWidget />
    </div>
    </div>
  );
}

export default App;