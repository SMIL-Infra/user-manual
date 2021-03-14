<template>
    <p v-if="rate !== null">
        当前最高的硬盘使用率：{{rateDisplay}}%
    </p>
</template>

<script>
export default {
    data() {
        return {
            rate: null,
        };
    },
    methods: {
        async queryUsage() {
            this.loading = true;
            const promUrl = new URL('https://prometheus.scut-smil.cn/api/v1/query');
            promUrl.searchParams.set('query', `max(ceph_osd_stat_bytes_used / ceph_osd_stat_bytes)`);
            try {
                const res = await fetch(promUrl);
                const res_json = await res.json();
                this.rate = parseFloat(res_json.data.result[0].value[1]);
            } catch (e) {
                // Ignore
            }
        }
    },
    computed: {
        rateDisplay() {
            return (this.rate * 100).toFixed(1);
        }
    },
    created() {
        this.queryUsage();
    }
}
</script>
