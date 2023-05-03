<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import CustomField from '@/components/CustomField.vue'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().length(6)
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
})
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <v-container>
      <CustomField label="Email" name="email" type="email" mode="eager" />
      <CustomField label="Пароль" name="password" type="password" mode="eager" />
      <div class="mt-4 text-center">
        <v-btn type="submit" color="" size="large"> Войти </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
