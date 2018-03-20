<template lang="html">
  <div class="product">
      <h4>商品信息</h4>
      <table class="table">
          <thead>
              <tr>
                  <th>id</th>
                  <th>名称</th>
                  <th>价格</th>
                  <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for='(shop,index) in shoplist' :key='index'>
                  <td>{{shop.id}}</td>
                  <td>{{shop.name}}</td>
                  <td>{{shop.price}}</td>
                  <td>
                      <div class="btn btn-info" @click="addToCart(shop)">购物车</div>
                  </td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:"product",
    data(){
        return{
            // shoplist:[
            //
            // ]
        }
    },
    computed:{
        ...mapGetters(['shoplist'])
    },
    methods:{
        ...mapActions(['addToCart'])
    }
}
</script>

<style lang="css" scoped>
.product,.product table{
    width: 100%;
}
.product > h4{
    padding-bottom:10px;
}
.product .table th,.product .table td {
    width: 25%;
    border: 1px solid #ccc;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
}
.btn{
    width:100px;
    background:#4fc08d;
    height:25px;
    color: #fff;
    font-size:14px;
    line-height: 25px;
    text-align: center;
    margin:0 auto;
    border-radius: 4px;
    cursor: pointer;
}
</style>
