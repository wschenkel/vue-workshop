<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s10 offset-s1">
                    <input :value="filtro" v-on:input="filtro = $event.target.value" type="text" name="txtItem" placeholder="Buscar?">
                    <xCard v-for="(item, i) of noticiasFiltradas" :key="i"
                        :cardTitle="item.title"
                        :cardDescription="item.contents"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import xCard from '@/components/xCard'
export default {
    name: "Api",
    components: {
        xCard
    },
    data() {
        return {
            noticias: [{}],
            filtro: ''
        }
    },
    computed: {
        noticiasFiltradas() {
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim(), 'i');
                return this.noticias.filter(noticia => exp.test(noticia.title));
            } else {
                return this.noticias
            }
        }
    },
    created() {
        const API_BASE = 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/'
        let promise = this.$http.get(`${API_BASE}?appid=440&count=6&maxlength=150&format=json`)
        promise
        .then(res => res.json())
        .then(res => {
            console.log(res.appnews.newsitems)
            this.noticias = res.appnews.newsitems
        })
    }
}
</script>
<style scoped>

</style>
