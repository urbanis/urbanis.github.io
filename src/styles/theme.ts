import type { ThemeConfig } from 'antd';

export const portfolioTheme: ThemeConfig = {
  token: {
    colorPrimary: '#0a4275',
    colorPrimaryHover: '#0C355E',
    colorPrimaryActive: '#0056b3',
    fontFamily: "'Montserrat', sans-serif",
    borderRadius: 5,
    colorBgContainer: '#fff',
    colorText: '#000',
    colorTextSecondary: '#6c757d',
  },
  components: {
    Layout: {
      headerBg: '#0a4275',
      footerBg: '#0a4275',
      headerPadding: '20px 50px',
      footerPadding: '0',
    },
    Button: {
      colorPrimary: '#0C355E',
      colorPrimaryHover: '#0056b3',
      borderRadius: 5,
    },
    Card: {
      borderRadiusLG: 5,
    },
    Modal: {
      borderRadiusLG: 10,
    },
    Tag: {
      colorText: '#6c757d',
    },
  },
};
