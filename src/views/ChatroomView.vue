<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar.vue'
import ChatWindow from '../components/ChatWindow.vue'
import NewChatForm from '../components/NewChatForm.vue'

const router = useRouter()
const { user } = getUser()

watch(user, () => {
  if (!user.value) {
    router.push({ name: 'WelcomeView' })
  }
})
</script>

<template>
  <!-- <Navbar /> -->
  <v-container class="panel pt-16">
    <ChatWindow />
    <NewChatForm />
  </v-container>
</template>

<style lang="scss">
.panel {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
</style>
