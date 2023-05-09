<script setup>
import getCollection from '@/composables/getCollection'

const { error, documents } = getCollection('messages')
</script>

<template>
  <div class="chat-window">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="documents" class="messages">
      <div v-for="doc in documents" :key="doc.id" class="my-2">
        <span class="d-block text-subtitle-2">{{ doc.createAt.toDate() }}</span>
        <span class="text-caption font-weight-bold">{{ doc.name }}: </span>
        <span class="">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>
