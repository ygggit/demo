<template lang="html">
  <div class="login-form">
      <div class="form-group">
            <label for="">用户名:</label>
            <input type="text" name="" value="" placeholder="请输入用户名">
      </div>
      <div class="form-group">
            <label for="">密码：</label>
            <input type="password" name="" value="" placeholder="请输入密码">
      </div>
      <div class="form-group">
          <button type="button" name="button">注册</button>
      </div>
  </div>
</template>

<script>
export default {
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
        }
    }
</style>
