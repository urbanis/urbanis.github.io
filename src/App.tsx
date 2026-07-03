import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { portfolioTheme } from './styles/theme';
import { LanguageProvider } from './contexts/LanguageContext';
import MainLayout from './components/templates/MainLayout';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import TimelinePage from './pages/TimelinePage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import { ParisStudyPage } from './paris';

function App() {
  return (
    <LanguageProvider>
      <ConfigProvider theme={portfolioTheme}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/journal" element={<BlogPage />} />
          <Route path="/journal/:slug" element={<BlogPostPage />} />
          <Route path="/my-journey" element={<TimelinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/paris-micromobility" element={<ParisStudyPage />} />
        </Routes>
      </ConfigProvider>
    </LanguageProvider>
  );
}

export default App;
