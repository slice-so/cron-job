async function updateOrders() {
  // const res = await fetch("https://slice.so/api/orders/storeBasedMerch")
  const res = await fetch(
    "https://base-testnet.slice.so/api/orders/storeBasedMerch"
  )

  if (!res.ok) {
    console.log("Could not fetch products")
  } else {
    console.log("Updated")
  }
}

updateOrders()
