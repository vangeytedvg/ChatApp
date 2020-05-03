// We need to import the variables declared in firebase.js
import { firebaseAuth, firebaseDb } from "boot/firebase"

import { boot } from "quasar/wrappers"

const state = {

}

const mutations = {

}

const actions = {
    // Payload is the data passed in via LoginRegister.vue component
    registerUser({}, payload) {
        firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

}

const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}