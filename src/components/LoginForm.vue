<script setup>
import { useField, useForm } from 'vee-validate'

const { handleSubmit } = useForm({
  validationSchema: {
    email: 'required|email',
    password: 'required|min:6'
  }
})

const email = useField('email')
const password = useField('password')

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2))
})
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <div class="container">
      <v-row no-gutters justify="center">
        <v-col cols="10" md="6">
          <v-text-field
            v-model="email.value.value"
            label="Email"
            type="email"
            :error-messages="email.errorMessage.value"
          ></v-text-field>

          <v-text-field
            v-model="password.value.value"
            label="Пароль"
            type="password"
            :error-messages="password.errorMessage.value"
          ></v-text-field>

          <div class="mt-4 text-center">
            <v-btn type="submit" color="" size="large"> Войти </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>
