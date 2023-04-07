export function createCatalogItem(item) {
  const itemContainer = document.createElement('div')
  itemContainer.className = 'catalog__item'

  const title = document.createElement('h2')
  title.className = 'catalog__item-title'
  title.textContent = item.name

  const image = document.createElement('img')
  image.setAttribute('src', item.image)
  image.className = 'catalog__item-image'

  const price = document.createElement('div')
  price.className = 'catalog__item-price'
  price.textContent = `$${item.cost}`

  const buyBtn = document.createElement('button')
  buyBtn.className = 'catalog__item-buy-btn'
  buyBtn.textContent = 'Buy'

  itemContainer.append(title, image, price, buyBtn)

  return itemContainer
}