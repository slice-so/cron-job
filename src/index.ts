import * as fs from "node:fs/promises"

async function main() {
  const obj = { date: new Date() }

  setTimeout(async () => {
    await fs.writeFile("data/test.json", JSON.stringify(obj, null, 2))
  }, 1000)
}

main()
