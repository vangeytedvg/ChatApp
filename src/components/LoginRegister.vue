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
export default {
  props: ["tab"],
  methods: {
    submitForm() {
        if (this.tab == 'login') {
            console.log('Login the user')
        } else {
            console.log('Register the user')
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