# 所有数据集

<ul>
    <li v-for="ds in allDatasets"><a :href="ds.pagePath">{{ds.title}}</a></li>
</ul>

[新增数据集](https://github.com/SMIL-Infra/user-manual/new/master/src/dataset)

<script>
import allDatasets from '@temp/allDatasets.json';
export default {
  setup() {
    return {
      allDatasets
    }
  }
}
</script>
