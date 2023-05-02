<script setup>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/LoginForm.vue'
</script>

<template>
  <main>
    <v-container>
      <v-sheet class="d-flex justify-center flex-wrap mx-auto py-6" rounded>
        <h2 class="mb-6 text-h4">Добро пожаловать!</h2>

        <!-- <SignupForm /> -->
        <LoginForm />
      </v-sheet>
    </v-container>
  </main>
</template>
