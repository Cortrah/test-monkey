<template>
    <div class="msg">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        props: {
            "msg": String,
            "default": "Gogo Gadget"
        }
    }
</script>
