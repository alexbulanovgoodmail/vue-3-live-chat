<script setup>
import { ref } from 'vue'
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

const { handleSubmit, setErrors } = useForm({
  validationSchema: schema
})

const show = ref(true)

const onSubmit = handleSubmit(async (values) => {
  try {
    await signup(values.email, values.password, values.name)
    emit('signup')
  } catch (err) {
    setErrors({
      name: 'Ошибка Firebase',
      email: 'Ошибка Firebase',
      password: 'Ошибка Firebase'
    })
  }
})
</script>

<template>
  <v-form @submit.prevent="onSubmit" class="w-100">
    <v-container>
      <CustomField label="Имя" name="name" type="text" mode="eager" />
      <CustomField label="Email" name="email" type="email" mode="eager" />
      <CustomField
        :append-icon="!show ? 'mdi-eye' : 'mdi-eye-off'"
        label="Пароль"
        name="password"
        :type="!show ? 'text' : 'password'"
        mode="eager"
        @click:append="show = !show"
      />
      <span class="text-caption text-red">{{ error }}</span>
      <div class="mt-4 text-center">
        <v-btn type="submit" color="" size="large"> Регистрация </v-btn>
      </div>
    </v-container>
  </v-form>
</template>
