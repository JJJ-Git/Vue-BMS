import Vue from "vue"

import axios from "axios"

// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.baseURL = ''

Vue.prototype.$axios = axios
