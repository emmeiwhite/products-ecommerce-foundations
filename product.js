const product = document.querySelector('.product')

const url = `https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog`

const fetchProduct = async () => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

const renderProduct = item => {
  console.log(item)
}

const start = async () => {
  const data = await fetchProduct()
  renderProduct(data)
}

start()
