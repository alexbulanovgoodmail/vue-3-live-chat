<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

<template>
  <v-app-bar color="secondary">
    <v-toolbar-title>My files</v-toolbar-title>
    <v-btn prepend-icon="mdi-logout" variant="outlined">Logout</v-btn>
  </v-app-bar>
  <!-- <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <v-list :items="items"></v-list>
    </v-navigation-drawer> -->
</template>
