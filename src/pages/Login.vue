
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
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input
          v-model="ruleForm.pass"
          type="password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >Submit</el-button
        >
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
.center {
  margin: 20% auto;
  /* border: 3px solid green; */
  /* padding: 10px; */
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
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$router.push('/home');
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     axios({
      //       // url: "api/put_selected_news",
      //       method: "post",
      //       crossdomain: true,
      //       data: post_data,
      //     }).then((res) => {
      //       if (res.status == 200) {
      //         this.$router.push('/home');
      //       }
      //     });
      //     alert("submit!");
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>