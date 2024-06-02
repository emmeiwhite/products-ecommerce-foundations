const product = document.querySelector('.product')

const url = `https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog`

const fetchProduct = async () => {
  product.innerHTML = `<div class="loading"></div>`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    product.innerHTML = `<div class="error">${error.msg}</div>`
  }
}

const renderProduct = item => {
  const { description, name: title, price, colors, company, image } = item.fields
  const { url: img } = image[0]

  const formatPrice = price / 100

  const colorsHTML = colors
    .map(color => {
      return `<span
            class="product-color"
            style="background-color: ${color}"
          ></span>`
    })
    .join('')

  const productHTML = ` <div class="product-wrapper">
        <img
          src="${img}"
          alt="${title}"
          class="img"
        />

        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$ ${formatPrice}</span>
          <div class="colors">
                ${colorsHTML}
          </div>

          <p>
            ${description}
          </p>

          <button class="btn">add to cart</button>
        </div>
      </div>`

  product.innerHTML = productHTML
}

// it starts from here
const start = async () => {
  const data = await fetchProduct()
  renderProduct(data)
}

start()
