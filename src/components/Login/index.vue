<template>
  <div class="login-wrap">
    <Form class="login-from" ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" size="large" v-model="formInline.user" placeholder="Username">
        <Icon size="20" type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" size="large" v-model="formInline.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" size="large" @click="handleSubmit('formInline')">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>
<style lang="scss">
  $bg:black;
  .login-wrap {
    background: url(../../../static/img/login-bg.png)  no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .login-from{
    width: 300px;
    height: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
    position: absolute;
  }

</style>
<script>
  export default {
    data () {
      return {
        formInline: {
          user: 'simin',
          password: '123456'
        },
        ruleInline: {
          user: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        var _this = this;
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$api.LoginBlog({user: 'simin', password: '123456'},
              function () {
                this.$Message.success('成功!');
              }, function () {
                this.$Message.success('失败!');
              })
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>
