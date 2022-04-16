<script>
  import {products} from './products';
import CompProduct from './CompProduct.svelte';

</script>

<!-- #######################-->
<style>

</style>

<!-- #######################-->
<h1>PRODUCTS</h1>
{JSON.stringify($products)}

{#each $products as product }
  <CompProduct product={product} />
{/each}