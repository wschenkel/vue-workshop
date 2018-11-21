<template>
    <header id="x-header">
        <h5 class="center">{{ title }}</h5>
        <input :value="filtro" v-on:input="filtro = $event.target.value" @keyup.enter="submit" type="text" name="txtItem" placeholder="O que precisa ser feito?">
    </header>
</template>
<script>
export default {
    name: 'x-header',
    data () {
        return {
            filtro: ''
        }
    },
    props: {
        title: {
            required: true,
            type: String,
            default: ''
        }
    },
    methods: {
        submit() {
            this.$emit('addItem', this.filtro)
            this.filtro = ""
        }
    }
}
</script>
