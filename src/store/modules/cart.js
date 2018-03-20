//初始化数据
// 解释一下 state和组件中data作用一样，都是设置假数据和变量的
const state = {
    // 商品列表
    shop_list: [
        {
            id: 11,
            name: '鱼香肉丝',
            price: 12,
        },
        {
            id: 22,
            name: '宫保鸡丁',
            price: 14
        },
        {
            id: 34,
            name: '土豆丝',
            price: 10
        },
        {
            id: 47,
            name: '米饭',
            price: 2
        }
    ],
      //添加到购物车的商品（已选商品）
      added:[]
};

//getter 抛出去的数据
// 拿到state中的数据
// 想要拿到shoplist中的数据，需要使用mapGetters辅助函数的方法
const getters = {
    // 商品列表
    shoplist:state => state.shop_list,
    // 购物车列表
    cartProducts:state =>{
        return state.added.map(({id,num}) =>{
             //在原始数据数据上面进行刷选，这里通过id来匹配
             let product = state.shop_list.find(n=>n.id == id)
             // console.info('product',product)
             return{
                 ...product,
                 num
             }
        })
    },
    // 计算总价
    //getter中可以调用getter里面的方法
    totalPrice:(state,getters) =>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.price * n.num
        })
        return total;
    },
    // 计算总数量
    totalNum:(state,getters) =>{
        let total = 0;
        getters.cartProducts.forEach(n=>{
            total += n.num
        })
        return total;
    },
};

//action 异步的操作
const actions = {
    //添加到购物车操作
    addToCart({commit},product){
        commit('add',{  //传递一个add的方法，携带参数id
            id:product.id
        })
    },
    // 清除购物车
    clearAllCart({commit}){
        commit('clearAll')//分发一个clearAll事件，不带参数进行
    },
    // 删除购物车中的指定商品
    delProduct({commit},product){
        commit('del',product)
    }
};

//mutation const mutations = {};
const mutations = {
    //添加到购物车操作
    add(state,{id}){  //解构id 你可以 测试id 和 {id}的区别
    let record = state.added.find(n=>n.id == id);
    console.log(record)
        if(!record){
            state.added.push({
                id,
                num:1
            })
        }else {
            record.num++
        }
        console.info(record,state.added)
      },
      // 清除购物车
      clearAll(state){
          state.added = []
      },
      // 删除单个商品
      del(state,product){
          //console.info(state,product)
          state.added.forEach((n,i)=>{
              if(n.id === product.id){
                  // console.log(11,n)
                  state.added.splice(i,1)
              }
          })
      }
  };

  export default {
    state,
    mutations,
    actions,
    getters,
  };