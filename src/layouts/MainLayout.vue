<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">{{ title.toUpperCase() }}</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },
  computed: {
    // This function returns the path were located at
    title() {
      let myPath = this.$route.fullPath
      if (myPath == '/') {
        return 'Smack Chat Main'
      } else if (myPath == "/chat") {
        return 'Chat'
      } else if (myPath == '/auth') {
        return 'Auth'
      }
    }
  }
};
</script>
