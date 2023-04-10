const api = 'http://localhost:1717'

async function getPastryItem(id) {
  const response = await fetch(`${api}/pastry/detail/${id}`)
  const data = await response.json()
  return data
}

const createTableRow = (key, value) => {
  if (['id', 'name', 'image'].includes(key)) return

  const tr = document.createElement('tr')
  const td1 = document.createElement('td')
  const td2 = document.createElement('td')

  if (key === 'cost') {
    td1.textContent = 'Price'
    td2.textContent = `$${value}`
  } else if (key === 'inStock') {
    td1.textContent = 'In Stock'
    td2.textContent = value
  } else if (key === 'ingredients') {
    td1.textContent = 'Ingredients'
    td2.textContent = value.join(', ')
  } else if (key === 'hasDelivery') {
    td1.textContent = 'Delivery'
    td2.textContent = value ? 'yes' : 'no'
  } else if (key === 'address') {
    td1.textContent = 'Address'
    td2.textContent = `${value.street} ${value.houseNumber}`
  }
  
  tr.append(td1, td2)
  return tr
}

async function renderPastryItem() {
  const pastryId = new URLSearchParams(window.location.search).get('id')
  const data = await getPastryItem(pastryId)

  document.querySelector('.pastry-item__title').textContent = data.name
  document.querySelector('.pastry-item__image').src = data.image
  const tbody = document.querySelector('.pastry-item__table tbody')
  
  for (let key in data) {
    const tr = createTableRow(key, data[key])
    if (tr) tbody.append(tr)
  }
}

renderPastryItem()