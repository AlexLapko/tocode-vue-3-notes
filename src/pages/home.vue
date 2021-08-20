<template>
  <Form @onSubmit="handleSubmit" />
  <List
    :items="notes"
    @onRemove="handleRemove"
    @onEdit="handleEdit"
    @onStoreNote="onStoreNote"
  />
</template>

<script>
import Form from '@/components/Notes/Form'
import List from '@/components/Notes/List'
export default {
  components: { Form, List },
  data() {
    return {
      notes: []
    }
  },
  mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    handleSubmit({ title, activeTags }) {
      const note = {
        id: this.notes.length + 1,
        title: title,
        inEditMode: false,
        tags: activeTags
      }
      this.notes.push(note)
    },
    handleRemove(note) {
      this.notes.splice(this.notes.indexOf(note), 1)
    },
    handleEdit(note) {
      for (let i = 0; i < this.notes.length; i++) {
        this.notes[i].inEditMode = false
      }
      note.inEditMode = true
    },
    onStoreNote(note) {
      note.inEditMode = false
    }
  }
}
</script>
