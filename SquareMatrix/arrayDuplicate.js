let firstArray = [5, 8, 9, 34, 544, 826, 7885, 345]

let copyArray = []


function arrayDuplicate() {
  // make this function take all element in first array
  // and add them to second array
  if (firstArray === []){
    return
  }
  else{
    firstArray.forEach(value=>{
      copyArray.push(value)
  })
  }

}


arrayDuplicate()
console.log(`firstArray: ${firstArray} `)
console.log(`dupl Array: ${copyArray}`)