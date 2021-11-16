<template>
    <div class="select-content" :class="{active: state.active}">
        <slot/>
    </div>
</template>

<script setup>
import { useSelection } from './SelectTab.vue';
import { computed, reactive, onMounted } from "vue";

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
const s = useSelection(props.s);
const state = reactive({
    active: true,
});
onMounted(() => {
    state.active = computed(() => s.value === props.v);
});
</script>

<style lang="scss" scoped>
.select-content {
    display: none;
    &.active {
        display: block;
    }
}
</style>
