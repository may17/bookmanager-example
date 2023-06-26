<template>
  <RouterLink :class="buttonCssClassName" :to="to">{{ text }}</RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'

type buttonVariants = 'default' | 'outline' | 'clear'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true
    },
    to: {
      type: Object as PropType<RouteLocationNamedRaw>,
      required: true
    },
    variant: {
      type: String,
      default: 'default',
      validator(propValue: buttonVariants): boolean {
        return ['default', 'outline', 'clear'].includes(propValue)
      }
    }
  },
  computed: {
    buttonCssClassName(): string {
      let finalCssClassName = 'button'

      if (this.variant === 'outline') {
        finalCssClassName += ' button-outline'
      } else if (this.variant === 'clear') {
        finalCssClassName += ' button-clear'
      }

      return finalCssClassName
    }
  }
})
</script>
