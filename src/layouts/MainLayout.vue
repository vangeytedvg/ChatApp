<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          v-go-back.single
          icon="arrow_back"
          flat
          no-caps=""
          label="Back"
        />
        <q-toolbar-title class="absolute-center">{{ title }}</q-toolbar-title>
        <q-btn to="/auth" class="absolute-right" q-pr-sm flat no-caps icon="account_circle" dense label="Login" />
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
      let myPath = this.$route.fullPath;
      if (myPath == "/") {
        return "Smack Chat Main";
      } else if (myPath == "/chat") {
        return "Chat";
      } else if (myPath == "/auth") {
        return "Auth";
      }
    }
  }
};
</script>
