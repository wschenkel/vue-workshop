<template>
    <li :class="`row item-${id}`">
        <div class="col s6">
            <label class="valign-wrapper left">
            <input type="checkbox" class="filled-in" :name="itemName"/>
            <span>{{ itemName }}</span>
            </label>
        </div>
        <div class="col s6">
            <a @click="removeItem(id)" class="waves-effect waves-light btn-small right">remove</a>
        </div>                
    </li>
</template>
<script>
export default {
    name: 'x-list-item',
    props: {
        itemName: {
            required: true,
            type: String,
            default: ''
        },
        id: {
            required: true,
            type: Number
        }
    },
    methods: {
        removeItem(id) {
            this.$emit('removeItem', id)
        }
    }
}
</script>
<style scoped>

</style>
