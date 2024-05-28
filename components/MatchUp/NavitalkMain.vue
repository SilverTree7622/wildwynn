<template>
    <div class="frmu95mobileu95matchup-item-2">
        <div class="table-6 table-9 rounded-t-lg rounded-b-lg">
            <template v-for="(league, idx) of props.result_league">
                <CommonContentMatchUpNavitalk
                
                />
            </template>
            <div class="matchup_-navitalk_insert-chat rounded-b-lg">
                <div class="btn_-shot_-en">
                    <div class="en headline3">EN</div>
                </div>
                <div class="matchup_-navitalk_-text">
                    <input class="share-your-views body" name="shareyourviews" placeholder="Share your Views"
                        type="text" />
                </div>
                <div class="btn_-imoge">
                    <div class="text-5-1">😀</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    result_league;
}>();

const chckIsLast = (idx: number) => {
    return idx === (props.result_league.length - 1);
};

onMounted(async () => {
    await nextTick();
    
});

</script>

<style scoped>
.frmu95mobileu95matchup-item-2 {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 0px 10px 8px;
  position: relative;
  width: 100%;
}

.contents_-bottom-bg-1 {
    border-radius: 10px 10px 0px 0px;
    height: 10px;
}

.contents_-bottom-bg-3 {
    align-self: stretch;
    background-color: var(--wild-sand);
    position: relative;
    width: 100%;
}

.table-6 {
    align-self: stretch;
    background-color: var(--bggray);
    flex: 0 0 auto;
    flex-direction: column;
    width: 100%;
}

.table-9 {
    align-items: flex-start;
    display: flex;
    position: relative;
}

.matchup_-navitalk_insert-chat {
  align-items: center;
  align-self: stretch;
  background-color: var(--bggray);
  display: flex;
  flex: 0 0 auto;
  gap: 6px;
  padding: 8px 6px;
  position: relative;
  width: 100%;
}


.btn_-shot_-en {
  background-color: var(--ctgray);
  border-radius: 12.5px;
  height: 25px;
  position: relative;
  width: 25px;
}

.en {
  color: var(--bk);
  font-weight: 600;
  left: 4px;
  line-height: normal;
  position: absolute;
  top: 3px;
}

.matchup_-navitalk_-text {
  align-items: center;
  background-color: var(--ctgray);
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  padding: 4px 13px;
  position: relative;
}


.share-your-views {
  background-color: transparent;
  border: 0;
  color: var(--bk);
  flex: 1;
  flex-grow: 1;
  font-weight: 400;
  line-height: normal;
  margin-top: -1.00px;
  padding: 0;
  position: relative;
}


.btn_-imoge {
  align-items: center;
  display: flex;
  height: 18px;
  justify-content: center;
  position: relative;
  width: 18px;
}


.text-5-1 {
  color: var(--bk);
  font-family: var(--font-family-pretendard-semibold);
  font-size: 18px;
  font-weight: 600;
  height: 18px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
  width: 18px;
}

.contents_-bottom-bg-2 {
  border-radius: 0px 0px 10px 10px;
  flex: 1;
  flex-grow: 1;
}

.contents_-bottom-bg {
  align-self: stretch;
  background-color: var(--wild-sand);
  border-radius: 0px 0px 10px 10px;
  height: 10px;
  position: relative;
  width: 100%;
}

</style>