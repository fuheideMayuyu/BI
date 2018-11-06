import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import Cookies from 'js-cookie'
import i18n from '@/lang' 

export default () => {
  Vue.use(Element, { 
	  setize: Cookies.get('size') || 'medium', // set element-ui default size
	  i18n: (key, value) => i18n.t(key, value)
   })
}
