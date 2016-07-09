import scss from './stylesheets/app.scss'

import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import App from './components/App.vue'
import Breathe from './components/Breathe.vue'

// Install plugins
Vue.use(Router)
Vue.use(Resource)

// Set up a new router
var router = new Router()

// Route config
router.map({
  '/breathe':{
    name: 'breathe',
    component: breathe
  }
})

// For every new route scroll to the top of the page
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

// If no route is matched redirect home
router.redirect({
  '*': '/home'
})

// Start up our app
router.start(App, '#app')
