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
            Đang loading id:  {{ $route.params.idddd}} ....
        </div>
        <div>{{ this.$store.state.transaction }}</div>
    <br>
    <div> Test getter trong store : {{ numberFilter }}</div>

    </div>
</template>

<script>
    export default {
        // data() {
        //     return {
        //         object: null
        //     }
        // },

        //async là sử lý bất đồng bộ thôi , await là đợi thằng này này thực hiện xong mới thực hiện cái nào đó
        // async created() {
        //     await this.$store.dispatch("fetchTranssaction",  this.$route.params.idddd );
        //     this.object = this.$store.state.transaction;
        // },
        //Nhưng sử dụng computed để khi có sự thay đổi thì nó thay đổi

        created() {
            this.$store.dispatch("fetchTranssaction",  this.$route.params.idddd );
        },

        // Xem những sự thay đổi thì nó sẽ thay đổi theo
        computed:{
            
            //Kiểu đối tượng object này sẽ thay đổi this.$store.state.transaction;
            object() {
                console.log( " xinh gái quá đi " );
                return this.$store.state.transaction;
            },

            //Đây là phần test thử của store.getters thôi 
            numberFilter(){
                return this.$store.getters.filterNumber;
            }
        }


    }

</script>