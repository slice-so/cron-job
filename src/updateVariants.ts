import * as fs from "node:fs/promises"

async function updateVariants() {
  const res = await fetch("https://api.printful.com/products")
  const data = await res.json()

  let variants: { [key: string]: any } = {}

  for (const p of data.result) {
    const hasVariants = p.variant_count > 1
    if (!hasVariants) continue

    const product = await fetch(`https://api.printful.com/products/${p.id}`)
    const res = await product.json()
    console.log(res)
    const productData = res.result
    if (!productData.variants) continue

    for (const v of productData.variants) {
      const variant = { color: v.color, colorCode: v.color_code, size: v.size }

      variants[v.id] = variant
    }

    // await to not get rate limited
    await new Promise((resolve) => setTimeout(resolve, 3000))
  }

  // Save variants to a JSON file
  await fs.writeFile(
    "data/printfulVariants.json",
    JSON.stringify(variants, null, 2)
  )
}

updateVariants()
