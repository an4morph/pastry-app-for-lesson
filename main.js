async function getPastry() {
  const response = await fetch('http://localhost:1717/pastry');
  const pastry = await response.json();

  return pastry;
}

function createCatalogItem(item) {
  const div = document.createElement('div')
  div.textContent = item.name
  return div
}

async function renderCatalog() {
  const pastry = await getPastry()
  const catalogGrid = document.querySelector('.catalog__grid')

  pastry.forEach((item) => {
    const itemElement = createCatalogItem(item)
    catalogGrid.append(itemElement)
  })
}

renderCatalog()

