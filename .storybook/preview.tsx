import type { Preview } from '@storybook/react-vite';
import React from 'react';
import { ConfigProvider } from 'antd';
import { portfolioTheme } from '../src/styles/theme';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
  decorators: [
    (Story) => (
      <ConfigProvider theme={portfolioTheme}>
        <Story />
      </ConfigProvider>
    ),
  ],
};

export default preview;
