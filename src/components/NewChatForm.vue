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
      :append-inner-icon="isLoading ? 'mdi-loading' : 'mdi-subdirectory-arrow-left'"
      :disabled="isLoading"
      :loading="isLoading"
      @click:append-inner="handleSubmit"
      @keypress.enter.prevent="handleSubmit"
    ></v-textarea>
    <span class="text-caption text-red">{{ error }}</span>
  </v-form>
</template>

<style lang="scss">
.new-chat-form {
  padding: 0 16px;

  textarea::placeholder {
    font-size: 12px;

    @media screen and (min-width: 440px) {
      padding-top: 4px;
    }

    @media screen and (min-width: 640px) {
      padding-top: 0;
      font-size: initial;
    }
  }

  .v-field__append-inner {
    margin: auto 0;
    padding: 0;
  }

  .mdi-loading {
    animation-name: spinner;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
