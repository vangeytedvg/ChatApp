 <template>
  <q-form @submit="submitForm">
    <q-input
        v-if="tab=='register'"
        outlined
        class="q-mb-md"
        v-model="formData.name"
        label="Name" />    
    <q-input
        outlined
        class="q-mb-md"
        v-model="formData.email"
        label="Email" />
    <q-input
        outlined
        class="q-mb-md"
        v-model="formData.password"
        type="password"
        label="Password" />    
    <div class="row">
        <!-- Push the button to the right -->
        <q-space></q-space>
        <!-- Set the correct label depending on the tab -->
        <q-btn type="submit" color="primary" :label="tab" />
    </div>
  </q-form>
</template>

<script>
// Import actions
import { mapActions } from 'vuex'
export default {
  props: ["tab"],
  methods: {
    // store is defined in store/index.js
    ...mapActions("store", ['registerUser', 'loginUser']),
    submitForm() {
        if (this.tab == 'login') {
            this.loginUser(this.formData)
        } else {
            this.registerUser(this.formData)
        }
    }
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: ""
      }
    };
  }
};
</script>