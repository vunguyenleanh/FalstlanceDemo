import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('FastlanceDemo', () => App);
AppRegistry.runApplication('FastlanceDemo', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});
