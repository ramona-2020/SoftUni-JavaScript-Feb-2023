function solve() {

  let btnGenerate = document.getElementsByTagName('button')[0];
  let btnBuy = document.getElementsByTagName('button')[1];

  let tableTbody = document.querySelectorAll('table tbody')[0];

  // btnGenerate
  btnGenerate.addEventListener('click', () => {

    //  [{"name": "Tablet", "img": "https://s12emagst.akamaized.net/products/16498/16497603/images/res_aec28fc5950c2a40e001ff99795e576b_200x200_l6m7.jpg", "price": 2000, "decFactor": 5.2}, {"name": "Vase", "img": "https://cdn.shoplightspeed.com/shops/606957/files/11398239/200x200x2/small-lady-vase.jpg", "price": 15, "decFactor": 10}]
    let area = document.getElementsByTagName('textarea')[0].value;
    let objects = JSON.parse(area);

    for (let object of objects) {

      // create a new row with td-s for each object (from JSON):
      let tr = document.createElement('tr');
      let tdImage = document.createElement('td');
      let imageObject = document.createElement('img');
  
      let tdName = document.createElement('td');
      let tdPrice = document.createElement('td');
      let tdDecFactor = document.createElement('td');
      let tdCheckbox = document.createElement('td');

      for (let property in object) {
        if (property === 'name') {
          let name = object[property];
          tdName.textContent = name;
        } else if (property === 'img') {
          let image = object[property];
          imageObject.src = image;
          tdImage.appendChild(imageObject);
        } else if (property === 'price') {
          let price = object[property];
          tdPrice.textContent = price;
        }  else {
          let decFactor = object[property];
          tdDecFactor.textContent = decFactor;
  
          let input = document.createElement('input');
          // Assigning the attributes
          // to created checkbox
          input.type = 'checkbox';
          tdCheckbox.appendChild(input)
          
          tr.appendChild(tdImage);
          tr.appendChild(tdName);
          tr.appendChild(tdPrice);
          tr.appendChild(tdDecFactor);
          tr.appendChild(tdCheckbox);
    
          tableTbody.appendChild(tr);
        }
      }
    }

  })

  // btnBuy
  btnBuy.addEventListener('click', () => {
    // get all checked input[type='checkbox'];
    let checkbox = document.getElementsByTagName('input');
    let trNodes = [...checkbox].filter(item => item.checked).map(item => item.parentNode.parentNode);
    
    let furnitureNames = [];
    let totalPrice = 0;
    let factor = 0;
    for (const tr of trNodes) {
        let trChildren = tr.children;
        for (let index = 0; index < trChildren.length; index++) {
            if (index == 1) {
              let furniture = trChildren[index].textContent;
              furnitureNames.push(furniture);
            } else if (index == 2) {
              let price = Number(trChildren[index].textContent);
              totalPrice += price;
            } else if (index == 3) {
              let tdFactor = Number(trChildren[index].textContent);
              factor += tdFactor;
            }
        }
    }

    let result = `Bought furniture: ${furnitureNames.join(', ')}`;
    let total = `Total price: ${totalPrice.toFixed(2)}`;

    let trCounts = document.querySelectorAll('table tbody tr').length - 1;
    factor /= trCounts;
    let decFactor = `Average decoration factor: ${factor}`;

    let textarea = document.getElementsByTagName('textarea')[1];
    textarea.value = result + '\n' + total + '\n' + decFactor;
  })
}