

class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }
    productInWarehouse(product) {
        return this.products.find((p) => p.product === product);
    }
    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        }
        this.products.push({product, quantity});
        this.warehouseSpace -= spaceRequired
        return `The ${product} has been successfully delivered in the warehouse.`;
    }
    quantityCheck(product, minimalQuantity) {
        // let productObjects = this.products;
        // const productFound = productObjects.some((arrVal) => product === arrVal.product);
        const productFound = this.productInWarehouse(product);
        if (!productFound) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        else if (minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        else if (minimalQuantity <= productFound.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - productFound.quantity;
            productFound.quantity = minimalQuantity;
            return `You added ${difference} more from the ${product} products.`;
        }
    }s
    sellProduct(product) {
        const productFound = this.productInWarehouse(product);
        if (!productFound) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        // decrement by 1 the product quantity from the product in the products array
        productFound.quantity -= 1;
        let quantity = productFound.quantity;
        this.sales.push({
            product,
            quantity,
        })
        return `The ${product} has been successfully sold.`
    }
    revision() {
        if (!this.sales.length) {
            throw new Error('There are no sales today!');
        }
        const sales = this.sales.length;
        let result = [`You sold ${sales} products today!`, 'Products in the warehouse:'];
        this.products.forEach((p) => {
            result.push(`${p.product} - ${p.quantity} more left`);
        })
        return result.join('\n');
    }
}

//
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());