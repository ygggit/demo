<template lang="html">
  <div class="cart">
      <h4>已选商品</h4>
      <table class="table table-hover table-bordered">
          <thead>
              <tr>
                  <th>id</th>
                  <th>名称</th>
                  <th>价格</th>
                  <th>数量</th>
                  <th>操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(shop,index) in cartProducts" :key="index">
                  <td>{{shop.id}}</td>
                  <td>{{shop.name}}</td>
                  <td>{{shop.price}}</td>
                  <td>{{shop.num}}</td>
                  <td>
                      <div class="btn btn-danger btn-sm" @click="delProduct(shop)">删除</div>
                  </td>
              </tr>
              <tr v-if="!cartProducts.length">
                  <td colspan="5" class="text-center">您的购物车空空如也。。。</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    name:"cart",
    data(){
        return{
            // cartProducts:[]
        }
    },
    computed:{
        ...mapGetters(['cartProducts'])
    },
    methods:{
        ...mapActions(['delProduct'])
    }
}
</script>

<style lang="css" scoped>
.cart{
    margin: 30px 0;
    text-align: center;
}
.cart,.cart table{
    width: 100%;
}
.cart .table th,.cart .table td {
    width: 20%;
    border: 1px solid #ccc;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
.btn{
    width: 100px;
    margin:0 auto;
    height: 25px;
    line-height: 25px;
    text-align: center;
    color: #fff;
    background: #999;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
}
</style>
