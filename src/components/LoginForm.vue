<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import CustomField from '@/components/CustomField.vue'

import useLogin from '@/composables/useLogin'

const { error, login } = useLogin()

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const { handleSubmit, setFieldError } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await login(values.email, values.password)
  } catch (err) {
    setFieldError('email', 'Проверьте правильность')
    setFieldError('password', 'Проверьте правильность')
  }
})
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <v-container>
      <CustomField label="Email" name="email" type="email" mode="eager" />
      <CustomField label="Пароль" name="password" type="password" mode="eager" />
      <span class="text-caption text-red">{{ error }}</span>
      <div class="mt-4 text-center">
        <v-btn type="submit" color="" size="large"> Войти </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
