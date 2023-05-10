<script setup>
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import CustomField from '@/components/CustomField.vue'

import useLogin from '@/composables/useLogin'

const emit = defineEmits(['login'])

const { error, login } = useLogin()

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const show = ref(true)

const { handleSubmit, setErrors } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await login(values.email, values.password)
    emit('login')
  } catch (err) {
    setErrors({
      email: 'Ошибка Firebase',
      password: 'Ошибка Firebase'
    })
  }
})
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <v-container>
      <CustomField label="Email" name="email" type="email" mode="eager" autocomplete="username" />
      <CustomField
        :append-icon="!show ? 'mdi-eye' : 'mdi-eye-off'"
        label="Пароль"
        name="password"
        :type="!show ? 'text' : 'password'"
        mode="eager"
        autocomplete="current-password"
        @click:append="show = !show"
      />
      <span class="text-caption text-red">{{ error }}</span>
      <div class="mt-4 text-center">
        <v-btn type="submit" color="" size="large"> Войти </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
