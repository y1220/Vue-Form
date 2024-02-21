<script setup lang="ts">
import { inject, ref } from 'vue';
import { updateUserNameKey } from '../key';

const userName = ref('');
const updateUserName = inject<(name: string) => void>(
    updateUserNameKey,
    () => {}
    );

const emits = defineEmits(['submit']);

const onSubmit = () => {
    emits('submit', userName.value);
    console.log('onSubmit');
    console.log('userName: ' + userName.value);
    updateUserName(userName.value); // update the user name
};
</script>

<template>
    <div class="modal-mask">
        <div class="modal-container">
            <div class="modal-header">
                <slot name="header">
                    <h3>Settings</h3>
                </slot>
            </div>
            <div class="modal-body">
                <slot name="body">
                    <span>Update your name</span>
                    <input v-model="userName"/>
                </slot>
            </div>
            <div class="modal-footer">
                <slot style="text-align: center;" name="footer">
                    <button  @click="onSubmit">Ok</button>
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
    text-align: center;
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
    font-size: 0.65em;
    padding: 10px;
}

.modal-footer button {
    padding: 1em 2em;
    border-radius: 5px;
    background-color: #42b883;
    color: white;
    font-size: 0.75em;
    border: none;
    cursor: pointer;
    margin: 20px;
}
</style>
