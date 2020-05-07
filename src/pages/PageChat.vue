<template>
  <q-page ref="pageChat" class="page-chat flex column">
    <q-banner 
      v-if="!otherUserDetails.online"
      class="bg-red text-white text-center">
      {{ otherUserDetails.name }} is offline
    </q-banner>
    <div
      :class = "{ 'invisible' :  ! showMessages }" 
      class="q-pa-md column col justify-end">
      <!-- The message here was using message.text, wich craeted duplicats
      so it was replace by key -->
      <q-chat-message
        v-for="(message, key) in messages"
        :key="key"
        :name = "message.from == 'me' ? userDetails.name: otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>

      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input ref="newMessage" v-model="newMessage" bg-color="white" outlined rounded label="Message" dense>
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
import otherUserDetails from 'src/mixins/mixin-other-user-detail.js'
export default {
  mixins: [otherUserDetails],
  data() {
    return {
      newMessage: '',
      showMessages: false,
    };
  },
  computed: {
    // Get the messages
    ...mapState('store', ['messages', 'userDetails']),
  },
  methods: {
    ...mapActions('store', ['firebaseGetMessages', 
                            'firebaseStopGettingMessages',
                            'firebaseSendMessage']),
    sendMessage() {
      this.firebaseSendMessage ({
        message: {
          text: this.newMessage,
          from: "me"
        },
        otherUserId : this.$route.params.otherUserId
      });
      // Clear the old message text from the message field
      this.clearMessage()
    },
    clearMessage() {
      // Clear the field
      this.newMessage = ''
      // Set focus back to the message field.  The $refs variable here
      // refers to the ref="" in the template above
      this.$refs.newMessage.focus()
    },
    scrollToBottom() {
      // Go to the end of the page
      let pageChat = this.$refs.pageChat.$el
      setTimeout(() => {
        window.scrollTo(0, pageChat.scrollHeight)
      }, 20)
    }
  },
  watch: {
    messages: function(val) {
      // If we got messages, scroll to the bottom of the page
      this.scrollToBottom()
      setTimeout (() => {
        // When messages are loaded and we have scrolled to the bottom
        // let the message show.
        this.showMessages = true
      }, 20)
    }
  },
  mounted() {
    // Loads when the page is loaded.
    this.firebaseGetMessages(this.$route.params.otherUserId)
  },
  destroyed() {
    // Called when we leave the page
    console.log("Leaving page because of leaving page...")
    this.firebaseStopGettingMessages()
  }
};
</script>

<style lang="stylus">
  .page-chat
    background #e2dfd5
</style>
