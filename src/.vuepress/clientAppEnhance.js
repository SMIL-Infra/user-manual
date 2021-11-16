/**
 * Client app enhancement file.
 *
 * https://v2.vuepress.vuejs.org/advanced/cookbook/usage-of-client-app-enhance.html
 */

import { defineClientAppEnhance } from '@vuepress/client'

import SelectTab from "./components/SelectTab.vue";
import SelectTabItem from "./components/SelectTabItem.vue";
import SelectContent from "./components/SelectContent.vue";
import DatasetInfo from "./components/DatasetInfo.vue";

export default defineClientAppEnhance(({
  app,
  router,
  siteData
}) => {
  app.component('SelectTab', SelectTab)
    .component('SelectTabItem', SelectTabItem)
    .component('SelectContent', SelectContent)
    .component('DatasetInfo', DatasetInfo)
})
