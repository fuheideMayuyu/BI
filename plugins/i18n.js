import Vue from 'vue'
import i18n from '@/lang'

export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  app.i18n = i18n
}