<script setup>
import { ref } from 'vue'
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'

const showLogin = ref(true)
</script>

<template>
  <main class="d-flex flex-column justify-center">
    <v-container>
      <v-row justify="center" no-gutters>
        <v-sheet class="w-100 d-flex justify-center flex-wrap mx-auto py-6" max-width="480" rounded>
          <template v-if="showLogin">
            <h1 class="my-4 text-h5 text-uppercase">Вход</h1>
            <LoginForm />
            <div>
              Еще нет аккаунта?
              <span class="font-weight-bold text-decoration-underline" @click="showLogin = false"
                >Регистрация</span
              >
            </div>
          </template>
          <template v-else>
            <h1 class="my-4 text-h5 text-uppercase">Регистрация</h1>
            <SignupForm />
            <div>
              Уже зарегистрировался?
              <span class="font-weight-bold text-decoration-underline" @click="showLogin = true"
                >Войти</span
              >
            </div>
          </template>
        </v-sheet>
      </v-row>
    </v-container>
  </main>
</template>
