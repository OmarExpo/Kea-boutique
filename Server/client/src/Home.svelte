<script>
import Register from './Register.svelte';
import Login from './Login.svelte';

let user = [];


</script>


<div class="jumbotron centered">
  <div class="container">
    <i class="fas fa-key fa-6x"></i>
    <h1 class="display-3">Welcome to KEA Boutique</h1>
    <p class="lead">Please login or register if you are not existing member</p>
    <hr>
    <Register />
    <Login />

  </div>
</div>


<style>

</style>