<script>
	let cart = [];
	let products = [
		{id:1, name: 'Apple', image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', price: 10, quantity:1},
		{id:2, name: 'Orange', image: 'https://images.unsplash.com/photo-1603664454146-50b9bb1e7afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 11, quantity:1},
		{id:3, name: 'Grapes', image: 'https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', price: 12, quantity:1},
   ];
	

	
	const AddToCart = (product) => {
		for(let item of cart){
			if(item.id === product.id){
				product.quantity+=1
				cart = cart
				return;
			}
		}
		cart = [...cart, product]
	}
	
	const minusItem = (product)=>{
		for(let item of cart){
			if(item.id === product.id){
				product.quantity-=1
				cart = cart
				return;
			}
		}
		cart = [...cart, product]
	}
	
	const plusItem = (product)=>{
		for(let item of cart){
			if(item.id === product.id){
				product.quantity+=1
				cart = cart
				return;
			}
		}
		cart = [...cart, product]
	}
	
	$: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
</script>

<p>
	There are {cart.length} items in your cart
</p>
 <div class='product-list'>
	{#each products as product}
	<div>
		<div class='image'  style='background-image: url({product.image})'></div>
			<h4>{product.name}
				</h4>
			<p>${product.price}
			</p>
		<button on:click={() => AddToCart(product)}>
			Add to cart
		</button>
	 </div>
	{/each}
</div>

<div class='cart-list'>
	{#each cart as item}
		{#if item.quantity > 0}
			<div class='cart-item'>
			<img width='50' src={item.image} alt={item.name}/>
			<div>{item.quantity}
				<button on:click={() => minusItem(item)}>-</button>
				<button on:click={() => plusItem(item)}>+</button>
			</div>
			<p>${item.price * item.quantity}</p>
		</div>
	  {/if}
	{/each}
	<div class='total'>
		<h4>Total: ${total}</h4>
	</div>
</div>

<style>
	.product-list, .cart-item{
		display:grid;
		grid-template-columns: repeat(3, 1fr)
	}
	.image{
		height: 150px;
		width: 150px;
		background-size: contain;
		background-position:center;
		background-repeat:no-repeat;
		}
	.total{
		text-align: right;
	 }
	.cart-list{
		border: 2px solid;
		padding:10px;
	}
	
</style>
