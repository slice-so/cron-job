async function updateOrders() {
  // const res = await fetch("https://slice.so/api/orders/storeBasedMerch")
  const res = await fetch(
    "https://base-testnet.slice.so/api/orders/storeBasedMerch"
  )

  const respons = await res.json()

  if (!res.ok) {
    throw new Error("Could not fetch products")
  } else {
    console.log(respons)
  }
}

updateOrders()
