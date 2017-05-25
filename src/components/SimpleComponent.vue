<template>
    <span>{{ msg }}</span>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'hello!'
            }
        },
        created () {
            this.msg = 'goodbye!'
        }
    }
</script>
