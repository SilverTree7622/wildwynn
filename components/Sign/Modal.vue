<template>
    <UModal v-model="opt.isOpen"
        :ui="{
            wrapper: 'bg-transparent p-0 m-0',
            base: 'p-0 m-0',
            rounded: 'rounded-lg',
            width: 'w-[360px]',
            height: 'h-full',
        }"
    >
        <SignIn v-if="authStore.getTab() === 'signin'" />
        <SignUp v-if="authStore.getTab() === 'signup'" />
        <SignComplete1 v-if="authStore.getTab() === 'complete1'" />
        <SignComplete2 v-if="authStore.getTab() === 'complete2'" />
    </UModal>
</template>

<script setup lang="ts">

const authStore = useAuthStore();

const opt = reactive({
    isOpen: <boolean>false,
});

watch(
    () => authStore.getIsOpen(),
    async () => {
        opt.isOpen = authStore.getIsOpen();
    }
);

watch(
    () => opt.isOpen,
    async () => {
        if (opt.isOpen) return;
        authStore.hide();
    }
);

</script>