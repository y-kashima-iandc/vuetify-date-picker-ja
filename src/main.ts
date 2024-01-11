import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import DateFnsAdapter from '@date-io/date-fns'
import { ja } from 'date-fns/locale'

const vuetify = createVuetify({
  date: {
    adapter: new DateFnsAdapter({
        formats: {
          year: 'yyyy年',
          monthAndYear: 'yyyy年M月',
          normalDateWithWeekday: 'M月d日(E)',
        },
        locale: ja,
    }),
  },
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')