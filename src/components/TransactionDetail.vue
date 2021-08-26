<template>
    <div>
        <h1> Đây là Transaction Detials</h1>

        <!-- <h2>{{$route}}</h2> -->

        <h2>id là: {{ this.$route.params.idddd}}</h2>
        <div v-if="object">
            id là : {{object.id}},&nbsp;&nbsp; &nbsp; &nbsp;
            tên là: {{ object.name}}
        </div>
        <div v-else>
            Đang loading id: {{ $route.params.idddd}} ....
        </div>
        <div>Đây là từ store : {{ this.$store.state.transaction }}</div>
        <br>
        <!-- <div> Test getter trong store : {{ numberFilter }}</div> -->

    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'
 
    //Bây h sử dụng composition API nhá 
    export default {
        setup() {
            const store = useStore();
            const route = useRoute();

            store.dispatch("fetchTranssaction", route.params.idddd);

            const object = computed( ()=>{
                return store.state.transaction;
            })

            return {
                object

            }
        }


    }

</script>