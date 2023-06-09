<script setup>
import { computed, ref, onUpdated, watchEffect } from 'vue'
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import getCollection from '@/composables/getCollection'
import getUser from '@/composables/getUser'

const { error, documents } = getCollection('messages')
const { user } = getUser()

const chatWindowRef = ref(null)
const formattedDocuments = computed(() => {
  if (documents.value) {
    return documents.value.map((doc) => {
      const time = formatDistanceToNow(doc.createAt.toDate(), { locale: ru })
      return {
        ...doc,
        createAt: time
      }
    })
  }
})

// auto-scroll to bottom
onUpdated(() => {
  chatWindowRef.value.scrollTop = chatWindowRef.value.scrollHeight
})
</script>

<template>
  <div class="chat-window" ref="chatWindowRef">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="documents" class="chat-messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="my-1">
        <div class="chat-message" :class="{ self: user.uid === doc.userId }">
          <span class="d-block text-caption text-grey">{{ doc.createAt }}</span>
          <span class="d-block text-caption font-weight-bold">{{ doc.name }}: </span>
          <span class="">{{ doc.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chat-window {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 16px;
}

.chat-messages {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.chat-message {
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 75%;
  min-width: 25%;
  padding: 8px;
  background-color: #eceff1;
  border-bottom-left-radius: 0;
}

.chat-message.self {
  margin-left: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 0;
  align-items: flex-end;
  background-color: #e8f5e9;
}
</style>
