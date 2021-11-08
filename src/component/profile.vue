<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.user_name}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.access_token}}
      <!-- {{currentUser.access_token.substring(0, 20)}} ... {{currentUser.access_token.substr(currentUser.access_token.length - 20)}} -->
    </p>
    <p>
      <strong>Id:</strong>
      <!-- {{currentUser}} -->
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{role}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    console.info(this.currentUser)
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>