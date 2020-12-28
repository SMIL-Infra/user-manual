<template>
    <div>
        <form>
            <input type="text" name="name" id="name" placeholder="用户名" v-model="name">
            <button type="submit" @click.prevent="queryAccount">查询</button>
        </form>
        <p v-if="loading">加载中</p>
        <p v-if="error !== null">{{error}}</p>
        <p v-else-if="accountInfo !== null && accountInfo.length === 0">
            没有查询到本地账号。
        </p>
        <ul v-if="accountInfo !== null">
            <local-account-host v-for="a in accountInfo" :key="a.metric.instance" :account="a">{{a.metric.instance}}</local-account-host>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            loading: false,
            error: null,
            accountInfo: null,
        };
    },
    methods: {
        async queryAccount() {
            this.loading = true;
            const promUrl = new URL('http://gpu016.scut-smil.cn:9090/api/v1/query');
            promUrl.searchParams.set('query', `node_local_account_info{name="${this.name}"}`);
            try {
                const res = await fetch(promUrl);
                const res_json = await res.json();
                this.accountInfo = res_json.data.result;
            } catch (e) {
                this.error = e;
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>
