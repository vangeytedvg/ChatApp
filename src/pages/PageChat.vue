<template>
  <q-page class="flex column">
    <q-banner 
      v-if="!otherUserDetails.online"
      class="bg-red text-white text-center">
      {{ otherUserDetails.name }} is offline
    </q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        ;name = "message.from == 'me' ? userDetails.name: otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>

      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input v-model="newMessage" bg-color="white" outlined rounded label="Message" dense>
            <template v-slot:after>
              <!-- This button must have @click set, otherwise won't work -->
              <q-btn round dense flat @click="sendMessage" type="submit" color="white" icon="send" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinOtherDetails from 'src/mixins/mixin-other-user-detail.js'
export default {
  mixins: [mixinOtherUserDetails],
  data() {
    return {
      newMessage: "",
    };
  },
  computed: {
    // Get the messages
    ...mapState('store', ['messages', 'userDetails']),
    
  },
  methods: {
    ...mapActions('store', ['firebaseGetMessages', 'firebaseStopGettingMessages']),
    sendMessage() {
      this.messages.push( {
        text: this.newMessage,
        from: "me"
      });
    }
  },
  mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId)
  },
  destroyed() {
    // Called when we leave the page
    this.firebaseStopGettingMessages()
  }
};
</script>

<style>
</style>
