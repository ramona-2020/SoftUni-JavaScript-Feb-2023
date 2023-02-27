function solve() {

  let btnGenerate = document.getElementsByTagName('button')[0];
  let btnBuy = document.getElementsByTagName('button')[1];

  let table = document.querySelectorAll('table tbody')[0];

  // btnGenerate
  btnGenerate.addEventListener('click', btn => {

    //  [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]
    let area = document.getElementsByTagName('textarea')[0].value;
    let object = JSON.parse(area)[0];

    for (const property in object) {
      let tr = document.createElement('tr');
      let tdImage = document.createElement('td');
      let imageObject = document.createElement('img');
  
      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdDecFactor = document.createElement('td');
  
      if (property === 'name') {
        let name = object[property];
        tdName.textContent = name;
        tr.appendChild(tdName);
      } else if (property === 'img') {
        let image = object[property];
        imageObject.src = image;
        tdImage.appendChild(imageObject);
        tr.appendChild(tdImage);
      } else if (property === 'price') {
        let price = object[property];
        tdPrice.textContent = price;
        tr.appendChild(tdPrice);
      }  else {
        let decFactor = object[property];
        tdDecFactor.textContent = decFactor;
        tr.appendChild(tdDecFactor);

        let tdCheckbox = document.createElement('input');
        // Assigning the attributes
        // to created checkbox
        tdCheckbox.type = 'checkbox';
        tr.appendChild(tdCheckbox);
  
        table.appendChild(tr);
      }
    }

  })

  // btnBuy
  btnBuy.addEventListener('click', item => {
    // get all checked input[type='checkbox'];
    let checkbox = document.getElementsByTagName('input');
    let trCheckedCheckboxes = [...checkbox].filter(item => item.checked).map(item => item.parentNode);
    
    let furnitureNames = [];
    let totalPrice = 0;
    let factor = 0;
    for (const tr of trCheckedCheckboxes) {
        let children = tr.children;
        for (let index = 0; index < children.length; index++) {
            if (index == 1) {
              let furniture = children[index].textContent;
              furnitureNames.push(furniture);
            } else if (index == 2) {
              let price = Number(children[index].textContent);
              totalPrice += price;
            } else if (index == 3) {
              let tdFactor = Number(children[index].textContent);
              factor += tdFactor;
            }
        }
    }

    let result = `Bought furniture: ${furnitureNames.join(', ')}`;
    let total = `Total price: ${totalPrice}`;
    let decFactor = `Average decoration factor: ${factor}`;

    let textarea = document.getElementsByTagName('textarea')[1];
    textarea.value = result + '\n' + total + '\n' + decFactor;
  })
}