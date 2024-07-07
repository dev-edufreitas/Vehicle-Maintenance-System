import { createApp } from 'vue'
import App from './App.vue'

if (module.hot) {
    module.hot.accept()
  }
createApp(App).mount('#app')
