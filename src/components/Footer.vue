<template>
  <div class="container">
    <ul class="navbar-list">
      <li class="navbar-item" v-for="link in links" :key="link.alias">
        <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {links} from '@/_config'
export default {
  name: 'Footer',
  data() {
    return {
      links: links
    }
  }
}
</script>t