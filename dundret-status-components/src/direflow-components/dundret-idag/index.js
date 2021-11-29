import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'dundret-idag',
    useShadow: false,
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Noto Sans JP'],
        },
      },
    },
  ],
});
