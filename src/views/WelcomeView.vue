<script setup>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <main class="d-flex flex-column justify-center">
    <v-container>
      <v-row justify="center" no-gutters>
        <v-sheet class="w-100 d-flex justify-center flex-wrap mx-auto py-6" max-width="480" rounded>
          <h1 class="my-4 text-h5 text-uppercase">Добро пожаловать</h1>
          <!-- <SignupForm /> -->
          <LoginForm />
        </v-sheet>
      </v-row>
    </v-container>
  </main>
</template>
