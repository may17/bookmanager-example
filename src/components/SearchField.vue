<template>
  <section class="row filter-search">
    <form action="#" class="column">
      <label for="search">Search by Title</label>
      <input type="text" id="search" v-model="currentFieldValue" />
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface SearchFieldData {
  currentFieldValue: string
}

export default defineComponent({
  data(): SearchFieldData {
    return {
      currentFieldValue: ''
    }
  },
  watch: {
    currentFieldValue(currentValue) {
      this.$emit('search-value-changed', currentValue)
    }
  }
})
</script>
