<template>
    <div class="select-content" :class="{active: active}">
        <slot/>
    </div>
</template>

<script setup lang="ts">
import { getSelection } from './SelectTab.vue';
import { computed } from "vue";
const props = defineProps({
    s: {
        type: String,
        required: true,
    },
    v: {
        type: String,
        required: true,
    },
});
const s = getSelection(props.s);
const active = computed(() => s.value === props.v);
</script>

<style lang="scss" scoped>
.select-content {
    display: none;
    &.active {
        display: block;
    }
}
</style>
