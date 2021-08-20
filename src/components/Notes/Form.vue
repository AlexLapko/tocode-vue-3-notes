<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
        @keyup.enter="onSubmit"
        required
        v-model="value"
        placeholder="Type ur note"
      />
      <TagsList :items="tags" @onItemClick="handleTagClick" />
      <button class="btn btnPrimary" type="submit">Add new note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList'
export default {
  components: { TagsList },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      activeTags: []
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', { title: this.value, activeTags: this.activeTags })
      this.value = ''
      this.activeTags = []

      const allTagItems = document.querySelectorAll('.note-form .tag-item')

      allTagItems.forEach(item => {
        item.classList.remove('isActive')
      })
    },
    handleTagClick(tag) {
      if (this.activeTags.indexOf(tag) === -1) {
        this.activeTags.push(tag)
      } else {
        this.activeTags.splice(this.activeTags.indexOf(tag), 1)
      }
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  max-width: 600px;
  margin: 0 auto;
}
.note-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
