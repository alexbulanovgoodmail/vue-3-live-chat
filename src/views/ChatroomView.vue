<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar.vue'

const router = useRouter()
const { user } = getUser()

watch(user, () => {
  if (!user.value) {
    router.push({ name: 'WelcomeView' })
  }
})
</script>

<template>
  <Navbar />
  <div class="w-100 py-16">
    <v-container>
      <h1>Chatroom</h1>
    </v-container>
  </div>
</template>
