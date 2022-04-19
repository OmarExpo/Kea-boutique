<script lang='ts'>
   function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
  }
</script>

<main>
  <form on:submit|preventDefault={onSubmit}>
    <div>
        <label for="name">Email</label>
        <input
          type="text"
          id="user-email"
          name="email"
          
        />
    </div>
    <div>
      <label for="name">Password</label>
      <input
        type="password"
        id="user-password"
        name="password"
        
      />
  </div>
    <button type="submit">Register</button>
  </form>
</main>

<style>
   * {
      box-sizing: border-box;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }

    form > div{
      display: flex;
      justify-content: space-between;
    }

    form > div + * {
      margin-top: 10px;
    }
</style>