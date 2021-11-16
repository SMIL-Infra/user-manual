<template>
    <li class="select-tab-item"
        :class="{ active: state.active }"
        :aria-selected="state.active"
        @click="selection = v">
        <slot />
    </li>
</template>

<script setup>
import { inject, computed, reactive, onMounted } from "vue";

const props = defineProps({
    v: {
        type: String,
        required: true,
    },
    default: {
        type: Boolean,
        required: false,
        default: false,
    }
});

const selection = inject('selection');
const state = reactive({
    active: props.default,
});
onMounted(() => {
    if (props.default && selection.value === null) {
        selection.value = props.v;
    }
    state.active = computed(() => props.v === selection.value)
})
</script>

<style lang="scss" scoped>
.select-tab-item {
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    &.active {
        border-bottom: var(--c-brand) 1px solid;
    }
}
</style>