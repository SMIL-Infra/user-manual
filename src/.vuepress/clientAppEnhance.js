/**
 * Client app enhancement file.
 *
 * https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
 */

import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({
  app,
  router,
  siteData
}) => {
  // ...apply enhancements for the site.
})
