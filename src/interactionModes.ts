import { FieldContext } from 'vee-validate'

type InteractionEventGetter = (ctx: FieldContext) => string[]

// Validates on submit only
const passive = () => []

const lazy: InteractionEventGetter = ({ meta, errorMessage }) => {
  return ['change']
}

const aggressive: InteractionEventGetter = () => ['input']

const eager: InteractionEventGetter = ({ meta, errorMessage }) => {
  if (errorMessage.value) {
    return ['input']
  }

  return ['change']
}

export const modes = {
  passive,
  lazy,
  aggressive,
  eager
}
