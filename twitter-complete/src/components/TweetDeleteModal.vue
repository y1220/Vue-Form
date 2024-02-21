<script setup lang="ts">


const emits = defineEmits(['submit', 'cancel']);

const onSubmit = () => {
    emits('submit');
};

const onCancel = () => {
    emits('cancel');
};
</script>

<template>
    <div class="modal-mask">
        <div class="modal-container">
            <div class="modal-header">
                <slot name="header">
                    <h3>Delete?</h3>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <button @click="onSubmit">Ok</button>
                    <button @click="onCancel">Ok</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(89, 165, 184, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-container {
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 0.5em;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    display: flex;
    flex-direction: column;
    font-size: 1.5em;
    padding: 20px;

}

span {
    font-size: 0.75em;
}
</style>
