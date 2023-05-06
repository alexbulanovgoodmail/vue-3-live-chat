<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import CustomField from '@/components/CustomField.vue'

import useSignup from '@/composables/useSignup'

const emit = defineEmits(['signup'])

const { error, signup } = useSignup()

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
})

const { handleSubmit, setFieldError } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit(async (values) => {
  try {
    await signup(values.email, values.password, values.name)
    emit('signup')
  } catch (err) {
    setFieldError('name', 'Проверьте правильность')
    setFieldError('email', 'Проверьте правильность')
    setFieldError('password', 'Проверьте правильность')
  }
})
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <v-container>
      <CustomField label="Имя" name="name" type="text" mode="eager" />
      <CustomField label="Email" name="email" type="email" mode="eager" />
      <CustomField label="Пароль" name="password" type="password" mode="eager" />
      <span class="text-caption text-red">{{ error }}</span>
      <div class="mt-4 text-center">
        <v-btn type="submit" color="" size="large"> Регистрация </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
