<script setup>
import { computed, ref, onUpdated } from 'vue'
import { formatDistanceToNow } from 'date-fns'
import { ru } from 'date-fns/locale'
import getCollection from '@/composables/getCollection'

const { error, documents } = getCollection('messages')
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
      <div v-for="doc in formattedDocuments" :key="doc.id" class="my-2">
        <span class="d-block text-caption text-grey">{{ doc.createAt }}</span>
        <span class="text-caption font-weight-bold">{{ doc.name }}: </span>
        <span class="">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.chat-window {
  flex: 1 1 auto;
  overflow-y: auto;
}
</style>
