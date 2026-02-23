import { ConfigProvider } from 'antd';
import { portfolioTheme } from './styles/theme';
import MainLayout from './components/templates/MainLayout';

function App() {
  return (
    <ConfigProvider theme={portfolioTheme}>
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
