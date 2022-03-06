import {createApp} from 'vue';
import App from './App';
import routes from './routes';

const app = createApp(App);

app.use(routes);

app.mount("#app");