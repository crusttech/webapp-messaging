import Vue from 'vue'
import Vuex from 'vuex'

import MessagingAPI from 'corteza-webapp-common/src/lib/corteza-server/messaging'

import channels from './channels'
import unread from './unread'
import settings from './settings'
import suggestions from './suggestions'
import session from './session'
import ui from './ui'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    channels: channels(MessagingAPI),
    settings: settings(MessagingAPI),
    suggestions: suggestions(MessagingAPI),
    unread: unread(MessagingAPI),
    session: session(MessagingAPI),
    ui: ui(),
  },
})

export default store
