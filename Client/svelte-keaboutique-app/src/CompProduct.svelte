<script>
  import {products} from './cart';
  export let product = {};

  const buyProduct = () => {
    $products = {...$products,product}
  }
</script>

<!-- #######################-->
<div class="product">
  id: {product.id}
  name: {product.name}
  price: {product.price}

  <button on:click={buyProduct}>Buy</button>
</div>

<!-- #######################-->
<style>
</style>
