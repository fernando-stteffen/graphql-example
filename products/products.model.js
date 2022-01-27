const products = [
  {
    id: 'redshield',
    description: 'Red Shield',
    price: 50.22,
    reviews: []
  },
  {
    id: 'bluesabre',
    description: 'Blue Sabre',
    price: 71.22,
    reviews: []
  }
]


function getAllProduct() {
  return products
}

function getProductByPrice(min, max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max
  })
}

function getProductById(id) {
  return products.find((product) => {
    return product.id === id
  })
}

function addNewProduct(id, description, price) {
  const product = {
    id,
    description,
    price,
    reviews: []
  }
  products.push(product)
  return product
}

function addNewProductReview(productId, rating, comment) {
  const product = getProductById(productId)
  if (product) {
    const review = {
      rating,
      comment
    }
    product.reviews.push(review)
    return review
  }
}

module.exports = {
  getAllProduct,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview
}