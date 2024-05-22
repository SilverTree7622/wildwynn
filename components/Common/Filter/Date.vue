<template>
    <div class="group-13-ppRdQV">
        <UPopover :popper="{ placement: 'bottom-start' }">
            <div class="btn_-round-square-SqVRvm btn_-round-square" style="cursor: pointer;">
                <div class="group-24-vpjhxn group-24">
                    <div class="rectangle-13-NyCxgV"></div>
                    <div class="text-NyCxgV text body" style="left: 27px;">{{ opt.displayDate }}</div>
                </div>
                <div class="group-25-vpjhxn">
                    <div class="rectangle-13-JxJyba"></div>
                    <div class="text-JxJyba text body" style="left: 27px;">{{ opt.displayDate }}</div>
                </div>
            </div>
            <!-- <template #panel="{ close }">
                <CommonFilterDatePicker 
                    v-model="opt.date"
                    @update:model-value="updateCalendar"
                    is-required
                    @close="close"
                />
            </template> -->
        </UPopover>

        <div class="group-11-SqVRvm" style="cursor: pointer;" @click="next">
            <div class="btn_-circle-Px0qxZ btn_-circle">
                <div class="ellipse-4"></div>
                <img class="polygon-3-O6vvrF smart-layers-pointers" src="@/public/img/polygon-3-1@2x.png"
                    alt="Polygon 3"/>
            </div>
        </div>
        <div class="group-12-SqVRvm" style="cursor: pointer;" @click="prev">
            <div class="btn_-circle-722jqV btn_-circle">
                <div class="ellipse-4"></div>
                <img class="polygon-3-VuSxuy smart-layers-pointers" src="@/public/img/polygon-4-1@2x.png"
                    alt="Polygon 3"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    date: any;
}>(), {
    date: new Date(Date.now()),
});

const emit = defineEmits<{
    (e: 'next-tab'): void;
}>();

const {
    ONE_DAY_MILLISECOND,
} = useRuntimeConfig().public.CONSTANTS;
const dateStore = useDateStore();

const setFormat = (date?: Date) => {
    if (date) {
        opt.date = date;
    }
    const time = opt.date;
    opt.displayDate = dateStore.getFilterFormat(time);
    return opt.displayDate;
};

const opt = reactive({
    date: props.date,
    displayDate: dateStore.getFilterFormat(new Date(props.date)),
});

dateStore.setDate(opt.date);

watch(
    () => opt.date,
    async (p) => {
        setFormat();
        dateStore.setDate(opt.date);
    }
);

const init = () => {
    setFormat(new Date(Date.now()));
    dateStore.setDate(opt.date);
};

const prev = () => {
    const yesterday = new Date(opt.date.getTime() - ONE_DAY_MILLISECOND);
    setFormat(yesterday);
};

const next = () => {
    const tmpDate = new Date(opt.date.getTime() + ONE_DAY_MILLISECOND);
    if (new Date().getTime() > tmpDate.getTime()) {
        setFormat(tmpDate);
        return;
    }
    // emit('next-tab');
};

const updateCalendar = (value) => {
    if (new Date().getTime() > value.getTime()) {
        return;
    }
    setFormat(new Date());
};

defineExpose({
    init,
});
</script>