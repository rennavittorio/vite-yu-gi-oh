<script>
import store from '../store';
export default {
    data(){
        return {
            store,
        }
    },

    methods: {
        setPageIndex(n){
            this.store.pageIndex = (n - 1) * 20;
            console.log('new index on footer', this.store.pageIndex)
        }
    }

}
</script>



<template>

    <footer class="footer">

        <div class="container">
            <ul class="pages">
                <li
                @click="setPageIndex(n)"
                v-for="n in 5"
                class="page"
                >
                    {{ n }}
                </li>
            </ul>
        </div>

    </footer>

</template>



<style lang="scss" scoped>

.footer {
    background-color: #333;
    color: #eee;
    padding: 50px 0;

    .pages {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;

        .page {
            width: 20px;
            height: 20px;
            padding: 20px;
            border-radius: 50%;
            background-color: #eee;
            color: #333;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;

            &:hover {
                background-color: burlywood;
                font-weight: 700;
                cursor: pointer;
            }
        }
    }
}


</style>