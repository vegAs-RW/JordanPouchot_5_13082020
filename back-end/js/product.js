const searchParams = new URLSearchParams(Location.search);
const idProduct= searchParams.get('_id')


let userData = [];
const fetchUser =  async () =>{
    await fetch('http://localhost:3000/api/cameras/${idProduct}')
    .then((res) => res.json())
    .then((data) => (userData = data));
    
    console.log(userData);
    };

const addCard = async () => {
    await fetchUser()

    const productImg = document.getElementById("productImage");
    productImg.innerHTML = userData.map((camera) =>
    `
    <img src="${camera.imageUrl}" class="img-fluid img thumbnail" alt="${camera.name}>
    `);

    const productName = document.getElementById('productName');
    productName.innerHTML = userData.map((camera)
    `
    <h5 class="card-title">${camera.name}</h5>
    `);

    const productPrice = document.getElementById('productPrice');
    productPrice.innerHTML = userData.map((camera)
    `
    <h5 class="card-title">${camera.price}</h5>
    `);
}