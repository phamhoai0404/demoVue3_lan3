<template>
    <h1>Transaction version 2</h1>
    <div v-if="listData.length >0">
        <div v-for=" item in listData" :key="item.id" style="padding: 20px;">
            <router-link :to="{name: 'transaction-detail-router', params: { idddd: item.id  } }">id là : {{
                item.id}},&nbsp;&nbsp;</router-link> &nbsp; &nbsp;
            tên là: {{ item.name}}
        </div>
    </div>
    <div v-else-if="error" class="error"> {{error.message}} </div>
    <div v-else>
        loading data....
    </div>


</template>

<script>

    import { useStore } from 'vuex'
    import { computed } from 'vue'

    export default {
        //Đây là vuex ( store) được sử dụng trong Composition API nhá 
        setup() {
            const $store = useStore();
            $store.dispatch("getAllTransaction");

            const listData = computed ( ()=>{
                return $store.state.allTransaction;
            })
            const error = computed (()=>{
                return $store.state.error;
            })

            return{
                listData,
                error
            }
        }
    }
</script>
<style scoped>
    .error {
        color: red;
        background-color: azure;
    }
</style>