<script setup>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
import { timestamp } from '../firebase/config'

const { user } = getUser()
const message = ref('')

async function handleSubmit(params) {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createAt: timestamp()
  }

  console.log('[chat]', chat)
  message.value = ''
}
</script>

<template>
  <v-form class="new-chat-form">
    <v-textarea
      v-model="message"
      label="Сообщение"
      rows="1"
      auto-grow
      variant="outlined"
      placeholder="Введите сообщение и нажмите ENTER для отправки"
      append-inner-icon="mdi-subdirectory-arrow-left"
      @click:append-inner="handleSubmit"
      @keypress.enter.prevent="handleSubmit"
    ></v-textarea>
  </v-form>
</template>

<style lang="scss">
.new-chat-form {
  textarea::placeholder {
    font-size: 12px;
    line-height: 1;
  }
}
</style>
