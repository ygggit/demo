<template lang="html">
  <div class="login-form">
      <div class="form-group">
            <label for="">用户名:</label>
            <input type="text" name="" value="" placeholder="请输入用户名" v-model="userName">
            <span :class="{errorShow:active}" v-show="active">{{errorNameInfo}}</span>
      </div>
      <div class="form-group">
            <label for="">密码：</label>
            <input type="password" name="" value="" placeholder="请输入密码" v-model="userPass">
            <span :class="{errorShow:active}" v-show="active">{{errorPassInfo}}</span>
      </div>
      <div class="form-group">
          <button type="button" name="button" @click="login()">登录</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            userName:'',
            userPass:'',
            errorNameInfo:'',
            errorPassInfo:'',
            active:false
        }
    },
    methods:{
        login(){
            let rightName = /^[0-9]{5}$/;
            if(this.userName ==''){
                this.active = true;
                this.errorNameInfo = '账户不能为空！';
            }else if( this.userPass == ''){
                this.active = true;
                this.errorPassInfo = '密码不能为空！';
            }else if(!rightName.test(this.userName)){
                this.active = true;
                this.errorNameInfo = '账户格式不正确';
            }else if(!rightName.test(this.userPass)){
                this.active = true;
                this.errorPassInfo = '密码格式不正确';
            }else{
                this.active = false;
                this.errorInfo = '';
            }
        }
    }
}
</script>

<style lang="less">
    .login-form{
        padding:20px;
        margin:0 auto;
        .form-group{
            width:100%;
            margin:20px 0;
            label{
                display: inline-block;
                width:80px;
                font-size:16px;
            }
            input{
                height:24px;
                width:250px;
                padding-left:10px;
            }
            .errorShow{
                color:#ff0000;
            }
        }
    }
</style>
