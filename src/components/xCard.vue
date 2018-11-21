<template>
    <div class="col s4 m4">
        <div class="card blue-grey">
            <div class="card-content white-text">
                <span class="card-title">{{ cardTitle }}</span>
                <p v-html="cardDescription"></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'xCard',
    props: {
        cardTitle: {
            type: String,
            required: true,
            default: ''
        },
        cardDescription: {
            type: String,
            required: true,
            default: ''
        }
    }
}
</script>
<style scoped>
</style>