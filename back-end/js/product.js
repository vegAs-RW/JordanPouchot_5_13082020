let productData = [];
const params = new URL(document.location).searchParams;
const id = params.get("_id");

const newUrl = `http://localhost:3000/api/cameras/${id}`;

const fetchProduct = async () => {
  await fetch(newUrl)
    .then((res) => res.json())
    .then((data) => (productData = data));
  console.log(productData);
};
const productDisplay = async () => {
  await fetchProduct();
  const productImage = document.getElementById("productImage");
  productImage.innerHTML += `
<img src="${productData.imageUrl}" class="img-fluid img-thumbnail" alt="${product.name}">
`;
  const productName = document.getElementById("productName");
  productName.innerHTML += `
<h5 class="card-title">${productData.name}</h5>
`;
  const productPrice = document.getElementById("productPrice");
  productPrice.innerHTML += `
 <h5 class="card-title">${productData.price}</h5>
`;
  const productDescription = document.getElementById("productDescription");
  productDescription.innerHTML += `
<p class="card-text">${productData.description}</p>
`;

  addLenses();
};
productDisplay();

const addLenses = () => {
  console.log(productData);
  const lensesChoice = document.getElementById("option");
  for (let lenses of productData.lenses) {
    lensesChoice.innerHTML += `<option value="${lenses}">${lenses}</option>`;
  }
}
