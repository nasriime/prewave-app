import type { Preview } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';


const preview: Preview = {
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true, // Show expanded controls by default
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      sort: 'requiredFirst', // Sort controls with required ones first
    },
    docs: {
      source: {
        type: 'code', // Show actual source code in docs
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Docs', 
          ['Introduction', 'Installation', 'Usage'],
          'Components',
          ['Button', '*'],
          'Examples'
        ],
      },
    },
  },
};

export default preview;