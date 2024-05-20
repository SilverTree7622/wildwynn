<template>
    <div class="group-13-ppRdQV">
        <div class="btn_-round-square-SqVRvm btn_-round-square">
            <div class="group-24-vpjhxn group-24">
                <div class="rectangle-13-NyCxgV"></div>
                <div class="text-NyCxgV text body">{{ opt.displayDate }}</div>
            </div>
            <div class="group-25-vpjhxn">
                <div class="rectangle-13-JxJyba"></div>
                <div class="text-JxJyba text body">{{ opt.displayDate }}</div>
            </div>
        </div>
        <div class="group-11-SqVRvm">
            <div class="btn_-circle-Px0qxZ btn_-circle">
                <div class="ellipse-4"></div>
                <img class="polygon-3-O6vvrF smart-layers-pointers" src="@/public/img/polygon-3-1@2x.png"
                    alt="Polygon 3"
                    @click="next"
                />
            </div>
        </div>
        <div class="group-12-SqVRvm">
            <div class="btn_-circle-722jqV btn_-circle">
                <div class="ellipse-4"></div>
                <img class="polygon-3-VuSxuy smart-layers-pointers" src="@/public/img/polygon-4-1@2x.png"
                    alt="Polygon 3"
                    @click="prev"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    date: string;
}>(), {
    date: new Date().toString(),
});

const emit = defineEmits<{
	(e: 'next-tab'): void;
}>();

const getFormat = (date: string) => {
    const time = new Date(date);
    const year = JSON.stringify(time.getFullYear()).slice(2, 4);
    return year + '/' + (time.getMonth() + 1) + '/' + time.getDate();
};

const opt = reactive({
    date: props.date,
    displayDate: getFormat(props.date),
});

const prev = () => {
    let yesterday = new Date(new Date().setDate(new Date(opt.date).getDate() - 1));
    opt.date = yesterday.toString();
    opt.displayDate = getFormat(opt.date);
};

const next = () => {
    const tmpDate = new Date(new Date().setDate(new Date(opt.date).getDate() + 1)).toString();
    if (opt.date > tmpDate) {
        opt.date = tmpDate;
        opt.displayDate = getFormat(opt.date);
        return;
    }
    emit('next-tab');
};

/*
2. 날짜 
  - 2024-05-17
좌측 / 우측 하루 씩 이동
날짜 이동시 탭에 따라 기능이 들어 갈 수 있다 . 차후 전달.
*/

defineExpose({
    date: opt.date,
});

</script>