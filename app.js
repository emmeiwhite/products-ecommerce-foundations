const url = 'https://www.course-api.com/javascript-store-products'

const products = document.querySelector('.products-center')

const getProducts = async () => {
  // loading state
  products.innerHTML = `<div class="loading"></div>`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    products.innerHTML = `<div class="error">there was an error</div>`
  }
}

const displayProducts = list => {
  console.log(list)
  const productsHTML = list
    .map(product => {
      const {
        id,
        fields: { name, price, image }
      } = product
      const img = image[0].url
      return `<a
            href="product.html"
            class="single-product"
            data-id=${id}
          >
            <img
              src="${img}"
              alt="title"
              class="img single-product-img"
            />

            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">${price}</span>
            </footer>
          </a>`
    })
    .join('')

  products.innerHTML = productsHTML
}

const start = async () => {
  const data = await getProducts()
  displayProducts(data)
}

// Everything starts from some point, so let's also start with start() function

start()
