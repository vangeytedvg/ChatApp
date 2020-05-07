<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          v-go-back.single
          icon="arrow_back" flat
          no-caps=""
          label="Back"
        />
        <q-toolbar-title class="absolute-center">{{ title }}</q-toolbar-title>
        <q-btn 
          v-if="!userDetails.userId"
          to="/auth" 
          class="absolute-right" 
          q-pr-sm 
          flat 
          no-caps icon="account_circle" 
          dense 
          label="Login" 
        />
        <q-btn 
          v-else="userDetails.userId"
          @click = "logoutUser"
          to="/auth" 
          class="absolute-right" 
          q-pr-sm 
          flat 
          no-caps icon="account_circle" 
          dense 
          >Logout <br>{{ userDetails.name }}</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import otherUserDetails from 'src/mixins/mixin-other-user-detail.js'

export default {
  mixins: [otherUserDetails],
  components: {
  },
  computed: {
    ...mapState('store', ['userDetails'] ),
    // This function returns the path were located at
    title() {
      let myPath = this.$route.fullPath;
      if (myPath == "/") {
        return "Smack Chat Main";
      } else if (myPath.includes("/chat")) {
        // For setting the username on top of the form
        return this.otherUserDetails.name;
      } else if (myPath == "/auth") {
        return "Auth";
      }
    }
  },
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
};
</script>
<style lang="stylus">
  .q-toolbar
    .q-btn
      line-height: 1.2
</style>