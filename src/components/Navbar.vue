<script setup>
import { ref } from 'vue'

import useLogout from '@/composables/useLogout'

const { error, logout } = useLogout()

async function handleLogout(params) {
  await logout()

  if (!error.value) {
    console.log('user logout')
  }
}
</script>

<template>
  <v-app-bar>
    <v-toolbar-title>Navbar</v-toolbar-title>
    <v-btn prepend-icon="mdi-logout" @click="handleLogout">Logout</v-btn>
  </v-app-bar>
</template>
