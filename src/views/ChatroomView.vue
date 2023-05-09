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
  <Navbar />
  <div class="w-100 pt-16 pb-0">
    <v-container class="h-100 py-0">
      <div class="d-flex flex-column justify-end h-100">
        <ChatWindow />
        <NewChatForm />
      </div>
    </v-container>
  </div>
</template>
