<template>
    <div class="select-tab">
        <ul class="ul">
            <slot/>
        </ul>
    </div>
</template>

<script>
import { reactive, ref, toRef, watch } from "vue";
const selections = reactive({});

export function getSelection(subject) {
    let s;
    if (!selections.hasOwnProperty(subject)) {
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
        selections[subject] = s;
    } else {
        s = toRef(selections, subject);
    }
    return s;
}

</script>

<script setup>
import { provide } from 'vue';

const props = defineProps({
    subject: {
        type: String,
        required: true,
    },
});
const selection = getSelection(props.subject);
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