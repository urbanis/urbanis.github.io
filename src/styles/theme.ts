import type { ThemeConfig } from 'antd';

export const portfolioTheme: ThemeConfig = {
  token: {
    colorPrimary: '#38bdf8',
    colorPrimaryHover: '#7dd3fc',
    colorPrimaryActive: '#0ea5e9',
    fontFamily: "'Montserrat', sans-serif",
    borderRadius: 8,
    colorBgContainer: '#1e293b',
    colorText: '#f1f5f9',
    colorTextSecondary: '#94a3b8',
    colorBorder: 'rgba(255,255,255,0.1)',
  },
  components: {
    Layout: {
      headerBg: '#0a0f1e',
      footerBg: '#0a0f1e',
      headerPadding: '20px 50px',
      footerPadding: '0',
    },
    Button: {
      colorPrimary: '#38bdf8',
      colorPrimaryHover: '#7dd3fc',
      borderRadius: 8,
    },
    Card: {
      borderRadiusLG: 12,
      colorBgContainer: 'rgba(30,41,59,0.7)',
    },
    Modal: {
      borderRadiusLG: 16,
      colorBgContainer: '#1e293b',
    },
    Tag: {
      colorText: '#38bdf8',
    },
  },
};
