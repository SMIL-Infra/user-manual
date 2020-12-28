<template>
    <li>
        {{host}}
        <ul>
            <li v-if="passwordExpire">密码过期：{{passwordExpire}}</li>
            <li v-if="accountExpire">账户过期：{{accountExpire}}</li>
        </ul>
    </li>
</template>

<script>
const today = Math.round(Date.now() / (24 * 3600 * 1000));

export default {
    props: {
        account: {
            type: Object,
            required: true,
        },
    },
    methods: {
        timeText(expireAfter) {
            if (expireAfter >= 0) {
                return `${expireAfter}天后`;
            } else {
                return `已过期（${-expireAfter}天前）`;
            }
        }
    },
    computed: {
        host() {
            return this.account.metric.instance.replace(/:\d+$/, '');
        },
        passwordExpire() {
            const maxAge = parseInt(this.account.metric.pw_maxage);
            if (maxAge > 90000) {
                return null;
            }
            const expireAfter = parseInt(this.account.metric.pw_lastchange) + maxAge - today;
            return this.timeText(expireAfter)
        },
        accountExpire() {
            const expire = parseInt(this.account.metric.expire);
            if (expire === -1) {
                return null;
            }
            return this.timeText(expire - today)
        },
    },
}
</script>
