
//Variables Globales
const url = `http://localhost:3000/api/cameras`;
const basket = JSON.parse(localStorage.getItem("cameras")) || [];

// convertir le prix
function convertPrice(productPrice) {
    let price = `${productPrice}`;
    price = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(price / 100);
    return price;
}

// création de la class produit
class Product {
    constructor(id, name, description, price, option, quantity, imgurl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = +price;
        this.option = option;
        this.quantity = +quantity;
        this.imgurl = imgurl;
    }
}

// calcul du total
function displayTotalBasket() {
    let totalBasket = 0;
    basket.forEach((camera) => {
        totalBasket = totalBasket + camera.price * camera.quantity;
    });
    return totalBasket;
}

//ajoute le tableau de commande
function displayProductListTable(product) {
    const indexProduct = basket.indexOf(product);
    const productList = document.getElementById("productsBasket");
    productList.innerHTML += `
    <tr class="text-center">
        <td class="align-middle">
            <span>${product.name}</span>
        </td>
        <td class="align-middle productQuantity">
            <button type="button" class="rounded bg-light border-0 minus" data-toggle="modal"  data-index="${indexProduct}"><span class="fas fa-minus" text-danger" data-index="${indexProduct}"></span></button>
            <span class="mx-0 mx-lg-3"> ${product.quantity}</span>
            <button type="button" class="rounded bg-light border-0 plus" data-toggle="modal" data-index="${indexProduct}"><span class="fas fa-plus" data-index="${indexProduct}"></span></button>
        </td>
        <td class="align-middle">
            <span>${convertPrice(product.price)}</span>
        </td>
        <td class="align-middle bg-light">
            <span>${convertPrice(product.quantity * product.price)}</span>
        </td>
    </tr>`;
}

//affiche le totalBasket
function totalPrice() {
    const totalPrice = document.getElementById("totalPrice");
    totalPrice.innerHTML += `${convertPrice(displayTotalBasket())}`;
}



// supprimer le Panier
function clearBasket() {
    localStorage.clear();
}
