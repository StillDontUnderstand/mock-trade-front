<template>
  <div class="center" style="width: 400px; height: 300 px">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="User name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
.center {
  margin: 20% auto;
}
</style>
<script lang="js">
import axios from "axios";

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        // checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        console.info(this.ruleForm)
        if (valid) {
          axios({
            url: "api/login",
            method: "post",
            crossdomain: true,
            contentType: "application/json",
            data: {
              "userName": this.ruleForm.name,
              "passward": this.ruleForm.pass
            },
          }).then((res) => {
            if (res.status == 200) {
              if (res.data == true) {
                this.$router.push('/main');
              }else{
                alert("userName and passwrod not match")
              }
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>