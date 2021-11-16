<template>
    <div class="select-tab">
        <ul class="ul">
            <slot/>
        </ul>
    </div>
</template>

<script>
import { reactive, ref, toRef, provide, inject, watch } from "vue";
const selectionsSymbol = Symbol('selections');

export function setupSelections() {
    const ss = reactive({});
    provide(selectionsSymbol, ss);
}

export function useSelection(subject) {
    const ss = inject(selectionsSymbol);
    let s;
    if (!ss.hasOwnProperty(subject)) {
        if (__VUEPRESS_SSR__) {
            s = ref(null);
        } else {
            const storageKey = 's:' + subject;
            const params = (new URL(window.location)).searchParams;
            let initSelection = params.get(storageKey);
            if (initSelection == null)
                initSelection = localStorage.getItem(storageKey);
            s = ref(initSelection);
            watch(s, v => {
                localStorage.setItem(storageKey, v);
            })
        }
        ss[subject] = s;
    } else {
        s = toRef(ss, subject);
    }
    return s;
}

</script>

<script setup>
const props = defineProps({
    subject: {
        type: String,
        required: true,
    },
});
const selection = useSelection(props.subject);
provide('selection', selection);

</script>

<style lang="scss" scoped>
.select-tab {
    margin: 16px 0;
    .ul {
        display: inline-flex;
        list-style: none;
        padding-left: 0;
        margin: 0;
    }
}
</style>