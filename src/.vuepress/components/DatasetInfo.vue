<template>
    <div class="dataset-info-container">
    <dl>
        <dt>路径</dt>
        <dd>/mnt/cephfs/dataset/{{$frontmatter.path}}</dd>

        <dt>限额</dt>
        <dd>
            <span :title="`${$frontmatter.quota.bytes} B`">{{quotaBytesStr}}</span><br>
            <span :title="$frontmatter.quota.files">{{quotaFilesStr}}</span>个文件
        </dd>

        <dt>所有者</dt>
        <dd>{{$frontmatter.owner}}</dd>
    </dl>
    </div>
</template>

<script>
const byteUnits = ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB'];
const fileUnits = ['', 'K', 'M'];

export default {
    computed: {
        quotaBytesStr() {
            let bytes = this.$frontmatter.quota.bytes;
            let u = 0;
            while (bytes >= 1024 && u < byteUnits.length) {
                bytes /= 1024;
                ++u;
            }
            return (u == 0 ? bytes : bytes.toFixed(2)) + ' ' + byteUnits[u];
        },
        quotaFilesStr() {
            let files = this.$frontmatter.quota.files;
            let u = 0;
            while (files >= 1000 && u < fileUnits.length) {
                files /= 1000;
                ++u;
            }
            return (u == 0 ? files : files.toFixed(2)) + ' ' + fileUnits[u];
        }
    }
}
</script>

<style scoped>
.dataset-info-container {
    background: #eaf8ff;
    border-radius: 5px;
    padding: 1px 20px;
}
.dataset-info-container dl {
    display: flex;
    flex-flow: wrap;
}
.dataset-info-container dt {
    display: inline-block;
    width: 70px;
    font-weight: bold;
}
.dataset-info-container dd {
    display: inline-block;
    margin: 0;
    flex-grow: 1;
    flex-basis: calc(100% - 100px);
}
</style>
