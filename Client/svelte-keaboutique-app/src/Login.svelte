<main>
  <form>
    <div>
        <label for="name">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value=""
        />
    </div>
    <div>
      <label for="name">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value=""
      />
  </div>
    <button type="submit">Login</button>
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