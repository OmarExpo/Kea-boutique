import { writable} from 'svelte/store';

export let products = writable([
  {"id": 1, "name": "Fruits", "price": 20},
  {"id": 2, "name": "Vegetables", "price": 20},
  {"id": 3, "name": "Milk", "price": 10},
  {"id": 4, "name": "Yoghurt", "price": 12},
]);