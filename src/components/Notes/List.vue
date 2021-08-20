<template>
  <div class="notes-list">
    <div class="note-item" v-for="note in items" :key="note.id">
      <div class="note-header">
        <p v-show="!note.inEditMode" @click="$emit('onEdit', note)">
          {{ note.title }}
        </p>
        <span style="cursor: pointer" @click="$emit('onRemove', note)"
          >&#10005;</span
        >
        <p class="edit-field">
          <input
            v-show="note.inEditMode"
            type="text"
            v-model="note.title"
            @keyup.enter="$emit('onStoreNote', note)"
          />
        </p>
      </div>
      <div class="note-footer">
        <TagsList
          v-if="note.tags && note.tags.length"
          :items="note.tags"
          isPreview
        />
      </div>
    </div>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList'
export default {
  components: { TagsList },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .edit-field {
    position: absolute;
    top: -15px;
    left: 0;
    input {
      margin-bottom: 0;
    }
  }
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
</style>
