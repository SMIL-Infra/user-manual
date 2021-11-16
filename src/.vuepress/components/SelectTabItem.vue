<template>
    <li class="select-tab-item"
        :class="{ active: active }"
        :aria-selected="active"
        @click="selection = v">
        <slot />
    </li>
</template>

<script setup lang="ts">
import { inject, computed, Ref } from "vue";

const selection: Ref<string|null> = inject('selection');
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

if (props.default && selection.value === null) {
    selection.value = props.v;
}

const active = computed(() => props.v === selection.value)
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