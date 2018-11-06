import Vue from 'vue'
import Router from 'vue-router'

const _054e3d55 = () => import('..\\pages\\salesManagement\\index.vue' /* webpackChunkName: "pages_salesManagement_index" */).then(m => m.default || m)
const _4da02ba4 = () => import('..\\pages\\redirect.vue' /* webpackChunkName: "pages_redirect" */).then(m => m.default || m)
const _fc50195a = () => import('..\\pages\\dataCenterSetting\\index.vue' /* webpackChunkName: "pages_dataCenterSetting_index" */).then(m => m.default || m)
const _48b30bed = () => import('..\\pages\\document.vue' /* webpackChunkName: "pages_document" */).then(m => m.default || m)
const _08cdc797 = () => import('..\\pages\\salesManagement\\supplierContributionInfo.vue' /* webpackChunkName: "pages_salesManagement_supplierContributionInfo" */).then(m => m.default || m)
const _8b7a33f8 = () => import('..\\pages\\salesManagement\\WinningStatisticsInfo.vue' /* webpackChunkName: "pages_salesManagement_WinningStatisticsInfo" */).then(m => m.default || m)
const _4b80b159 = () => import('..\\pages\\salesManagement\\TOPSInfo.vue' /* webpackChunkName: "pages_salesManagement_TOPSInfo" */).then(m => m.default || m)
const _13a32319 = () => import('..\\pages\\salesManagement\\GrossProfitInfo.vue' /* webpackChunkName: "pages_salesManagement_GrossProfitInfo" */).then(m => m.default || m)
const _649883e1 = () => import('..\\pages\\salesManagement\\channePlatformlInfo.vue' /* webpackChunkName: "pages_salesManagement_channePlatformlInfo" */).then(m => m.default || m)
const _ae805ea4 = () => import('..\\pages\\salesManagement\\skuInfo.vue' /* webpackChunkName: "pages_salesManagement_skuInfo" */).then(m => m.default || m)
const _76baa336 = () => import('..\\pages\\salesManagement\\WinningStatistics.vue' /* webpackChunkName: "pages_salesManagement_WinningStatistics" */).then(m => m.default || m)
const _08ce0220 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/salesManagement",
			component: _054e3d55,
			name: "salesManagement"
		},
		{
			path: "/redirect",
			component: _4da02ba4,
			name: "redirect"
		},
		{
			path: "/dataCenterSetting",
			component: _fc50195a,
			name: "dataCenterSetting"
		},
		{
			path: "/document",
			component: _48b30bed,
			name: "document"
		},
		{
			path: "/salesManagement/supplierContributionInfo",
			component: _08cdc797,
			name: "salesManagement-supplierContributionInfo"
		},
		{
			path: "/salesManagement/WinningStatisticsInfo",
			component: _8b7a33f8,
			name: "salesManagement-WinningStatisticsInfo"
		},
		{
			path: "/salesManagement/TOPSInfo",
			component: _4b80b159,
			name: "salesManagement-TOPSInfo"
		},
		{
			path: "/salesManagement/GrossProfitInfo",
			component: _13a32319,
			name: "salesManagement-GrossProfitInfo"
		},
		{
			path: "/salesManagement/channePlatformlInfo",
			component: _649883e1,
			name: "salesManagement-channePlatformlInfo"
		},
		{
			path: "/salesManagement/skuInfo",
			component: _ae805ea4,
			name: "salesManagement-skuInfo"
		},
		{
			path: "/salesManagement/WinningStatistics",
			component: _76baa336,
			name: "salesManagement-WinningStatistics"
		},
		{
			path: "/",
			component: _08ce0220,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
