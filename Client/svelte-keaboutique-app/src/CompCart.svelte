<script>
import {products} from './cart';
import CompCartProduct from './CompCartProduct.svelte';

</script>

<!-- #######################-->
<style>
</style>

<!-- #######################-->
<h1>CART</h1>

{JSON.stringify($products)}
{#each $products as product }
  <CompCartProduct product={product} />
{/each}