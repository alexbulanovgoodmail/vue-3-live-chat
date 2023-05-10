<script setup>
import getUser from '@/composables/getUser'
import useLogout from '@/composables/useLogout'

const { error, logout } = useLogout()
const { user } = getUser()

async function handleLogout(params) {
  await logout()
  if (!error.value) {
  }
}
</script>

<template>
  <v-app-bar v-if="user">
    <v-toolbar-title>
      <p class="text-body-1">
        Привет, <span class="font-weight-bold">{{ user.displayName }}</span>
      </p>
      <p class="text-body-2">
        В настоящее время зарегистрирован как <span class="font-weight-bold">{{ user.email }}</span>
      </p>
    </v-toolbar-title>
    <v-btn prepend-icon="mdi-logout" @click="handleLogout">Выйти</v-btn>
  </v-app-bar>
</template>
