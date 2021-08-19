
let userData = [];

const fetchUser =  async () =>{
await fetch('http://localhost:3000/api/cameras')
.then((res) => res.json())
.then((data) => (userData = data));

console.log(userData);
};

const addCards = async () => {
  await fetchUser()
const card = document.getElementById('liste')
  card.innerHTML = userData.map((camera) =>
  `
  <div class="col-sm-12 col-md-6 col-lg-6 pb-3 mt-3">
          <div class="card border bg-light shadow p-3 mb-3 rounded">
              <div class="card-body">
                  <div class="row">
                      <a href="./frontend/produit.html?_id=${camera._id}"><img src="${camera.imageUrl}" class="img-fluid img-thumbnail p-1" alt="${camera.name}"></a>
                      <div class="col-6 col-sm-7 mt-3">
                          <h5 class="card-title">${camera.name}</h5>
                      </div>
                      <div class="col-6 col-sm-5 text-end mt-3">
                          <h5 class="card-title">${camera.price}</h5>
                      </div>
                  </div>
                  <p class="card-text text-truncate">${camera.description}</p>
                  <a href="../back-end/pages/produit.html?_id=${camera._id}" class="btn btn-secondary">Choisir</a>
              </div>
          </div>
      </div>
  `).join("");


}

addCards()