<template>
    <main id="main">
        <ul v-for="(item, i) in listItem" :key="i">
            <li :class="`row item-${item.id}`">
                <div class="col s6">
                    <label class="align-wrapper left">
                        <input @click="addChecked(item.id)" type="checkbox" class="filled-in" :name="item.title"/>
                        <span>{{ item.title }}</span>
                    </label>
                </div>
                <div class="col s6">
                    <a @click="removeItem(item.id)" class="waves-effect waves-light btn-small right">remove</a>
                </div>                
            </li>
        </ul>
    </main>
</template>
<script>
export default {
    name: 'x-main',
    data() {
        return {
            item: ''
        }
    },
    props: {
        listItem: {
            required: true,
            type: Array || JSON
        }
    },
    methods: {
        removeItem(id) {
            this.$emit('removeItem', id)
        },
        addChecked(id) {
            let elemento = document.querySelector(`.item-${id}`)
            elemento.classList.toggle('checked')
        }
    }
}
</script>
<style scoped>
    .row.checked span {
        text-decoration: line-through;
    }
</style>
