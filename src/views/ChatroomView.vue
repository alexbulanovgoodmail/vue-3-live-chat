<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import getUser from '@/composables/getUser'
import Navbar from '../components/Navbar.vue'
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
  <div class="w-100 py-16">
    <v-container>
      <NewChatForm />
    </v-container>
  </div>
</template>
