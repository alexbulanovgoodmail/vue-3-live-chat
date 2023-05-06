<script setup>
import { computed, toRef } from 'vue'
import { useField } from 'vee-validate'
import { modes } from '../interactionModes'

const props = defineProps({
  name: {
    type: String
  },
  mode: {
    type: String,
    default: 'aggressive'
  }
})

const { meta, value, errorMessage, handleChange, handleBlur } = useField(
  toRef(props, 'name'),
  null,
  {
    validateOnValueUpdate: false
  }
)

// generates the listeners
const handlers = computed(() => {
  const on = {
    blur: handleBlur,
    // default input event to sync the value
    // the `false` here prevents validation
    input: [(e) => handleChange(e, false)]
  }

  // Get list of validation events based on the current mode
  const triggers = modes[props.mode]({
    errorMessage,
    meta
  })

  // add them to the "on" handlers object
  triggers.forEach((t) => {
    if (Array.isArray(on[t])) {
      on[t].push(handleChange)
    } else {
      on[t] = handleChange
    }
  })

  return on
})
</script>

<template>
  <v-text-field type="text" v-on="handlers" :value="value" variant="underlined"></v-text-field>
</template>
