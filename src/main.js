import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { defineRule, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import { required, email, min } from '@vee-validate/rules'
import ru from '@vee-validate/i18n/dist/locale/ru.json'
// Define the rule globally
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

localize({ ru })

configure({
  generateMessage: localize('ru', {
    names: {
      name: 'Имя',
      email: 'Адрес электронной почты',
      password: 'Пароль',
      confirmed_password: 'Подтвержденный пароль',
      submit: 'Отправить',
      form_validation_error: 'У формы есть ошибки'
    }
  })
})

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
