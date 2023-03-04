const BASE_ENDPOINT = `http://localhost:3030/jsonstore/grocery/`
const loadProductsBtn = document.getElementById('load-product');
const addProductBtn = document.getElementById('add-product');
const updateProductBtn = document.getElementById('update-product');

function attachEvents() {
    loadProductsBtn.addEventListener('click', loadProductHandler);
    addProductBtn.addEventListener('click', createProduct);
}
attachEvents();

function createProductRow(product, count, price, _id) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.classList.add('name');
    tdName.textContent = product;

    const tdCountProduct = document.createElement('td');
    tdCountProduct.classList.add('count-product');
    tdCountProduct.textContent = count;

    const tdProductPrice = document.createElement('td');
    tdProductPrice.classList.add('product-price');
    tdProductPrice.textContent = price;

    const tdButtons = document.createElement('button');
    tdButtons.classList.add('btn');

    const tdButtonUpdate = document.createElement('button');
    tdButtonUpdate.id = _id;
    tdButtonUpdate.classList.add('update');
    tdButtonUpdate.textContent = 'Update';
    tdButtonUpdate.addEventListener('click', editProduct);

    const tdButtonDelete = document.createElement('button');
    tdButtonDelete.id = _id;
    tdButtonDelete.classList.add('delete');
    tdButtonDelete.textContent = 'Delete';
    tdButtonDelete.addEventListener('click', deleteProduct);


    tdButtons.appendChild(tdButtonUpdate);
    tdButtons.appendChild(tdButtonDelete);

    tr.appendChild(tdName);
    tr.appendChild(tdCountProduct);
    tr.appendChild(tdProductPrice);
    tr.appendChild(tdButtons);

    return tr;
}

async function loadProductHandler(e) {
    if (e) {
        e.preventDefault();
    }
    document.querySelector('table #tbody').remove();
    const tbody = document.createElement('tbody');
    tbody.id = 'tbody';

    const response = await fetch(BASE_ENDPOINT);
    if(!response.ok) {
        throw new Error();
    }
    try {
        const data = await response.json();
        Object.entries(data).forEach(([id, productData]) => {
            const {product, count, price, _id} = productData;
            const tr = createProductRow(product, count, price, _id);

            const table = document.querySelector('.tbl-content table');

            tbody.appendChild(tr);
            table.appendChild(tbody);
        })
    } catch(e) {
        // Handle error...
    }
}

async function createProduct() {
    let product = document.getElementById('product').value;
    let count = document.getElementById('count').value;
    let price = document.getElementById('price').value;

    await fetch(BASE_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({
            'product': product,
            'count': count,
            'price': price,
        })
    })
    .then(() => {
        document.getElementById('product').value = '';
        document.getElementById('count').value = '';
        document.getElementById('price').value = '';
        loadProductHandler()
    })
}

async function deleteProduct(e) {
    const productID = e.target.id;
    await fetch(`http://localhost:3030/jsonstore/grocery/${productID}`, {
        method: 'DELETE',
    })
    await loadProductHandler();
}

async function editProduct(e) {
    let tr = e.target.parentNode.parentElement;
    let productName = tr.children[0];
    let productCount = tr.children[1];
    let productPrice = tr.children[2];

    let product = document.getElementById('product');
    let count = document.getElementById('count');
    let price = document.getElementById('price');

    // Update form data with product:
    product.value = productName.textContent;
    count.value = productCount.textContent;
    price.value = productPrice.textContent;

    addProductBtn.disabled = true;
    updateProductBtn.disabled = false;
    const productID = e.target.id;

    updateProductBtn.addEventListener('click', () => {
        fetch(`http://localhost:3030/jsonstore/grocery/${productID}`, {
            method: 'PATCH',
            body: JSON.stringify({
                'product': product.value,
                'count': count.value,
                'price': price.value,
            })
        }).then(() => {
            // Clear form data
            product.value = '';
            price.value = '';
            count.value = '';
            loadProductHandler();
        })
    })
}
