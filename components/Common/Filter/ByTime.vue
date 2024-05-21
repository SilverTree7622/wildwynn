<template>
    <a @click="toggle">
        <div class="group-14-ppRdQV">
            <div class="btn_-round-square-6PjiIf btn_-round-square">
                <div class="group-24-b9oapg group-24">
                    <div class="rectangle-13-PHX7OD"></div>
                    <div class="text-PHX7OD text body">By time</div>
                </div>
                <div class="group-25-b9oapg smart-layers-pointers">
                    <div :class="opt.isToggled ? 'bg-[#315b99]' : 'rectangle-13-989EQc'"></div>
                    <div class="text-989EQc text body">By time</div>
                </div>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">

const filterStore = useFilterStore();

const opt = reactive({
    isToggled: <boolean> filterStore.getTimeIsToggled(),
});

watch(
    () => filterStore.getTimeIsToggled(),
    (p) => {
        opt.isToggled = filterStore.getTimeIsToggled();
    }
)

const toggle = () => {
    opt.isToggled = filterStore.toggle();
};

</script>