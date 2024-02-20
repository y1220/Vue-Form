<script setup lang="ts">

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
                    <p>Settings body</p>
                </slot>
            </div>
            <div class="modal-footer">
                <slot name="footer">
                    <button>Close</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
