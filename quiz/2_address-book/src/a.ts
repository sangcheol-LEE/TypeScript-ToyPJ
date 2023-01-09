function fetchItems():string[] {
   const items = ["a","b","c"]
   return items
}

let results = fetchItems()
console.log(results)

function fetchItem():Promise<string[]> {
   let items = ["a","b","c"];
   return new Promise(res => {
      res(items)
   })
}
