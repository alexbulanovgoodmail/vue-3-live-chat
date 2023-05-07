<script setup>
import { ref } from 'vue'
import getUser from '@/composables/getUser'
import useCollection from '@/composables/useCollection'
import { timestamp } from '../firebase/config'

const { user } = getUser()
const { addDoc, error } = useCollection('messages')

const isLoading = ref(false)
const message = ref('')

async function handleSubmit(params) {
  isLoading.value = true

  const chat = {
    userId: user.value.uid,
    name: user.value.displayName,
    message: message.value,
    createAt: timestamp()
  }

  await addDoc(chat)
  isLoading.value = false

  if (!error.value) {
    message.value = ''
  }
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
      :disabled="isLoading"
      @click:append-inner="handleSubmit"
      @keypress.enter.prevent="handleSubmit"
    ></v-textarea>
    <span class="text-caption text-red">{{ error }}</span>
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
