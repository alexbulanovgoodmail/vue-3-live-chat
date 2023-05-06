import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// auth
import { projectAuth } from './firebase/config'
// yup
import { setLocale } from 'yup'

setLocale({
  // Общие сообщения не требуют значения ({key: "сообщение без параметров"})
  mixed: {
    default: 'Поле неверно заполнено',
    required: 'Обязательное поле'
  },
  string: {
    email: 'Некорректный email',
    length: ({ length }) => `Длина поля должна быть ${length} символов`
  },
  number: {
    min: ({ min }) => `Значение должно быть больше или равно ${min}`,
    max: ({ max }) => `Значение должно быть меньше или равно ${max}`
  }
})

//
const vuetify = createVuetify({
  components,
  directives
})

let app = null

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(vuetify)
    app.mount('#app')
  }
})
