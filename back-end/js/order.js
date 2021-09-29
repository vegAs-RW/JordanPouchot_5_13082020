const order = JSON.parse(localStorage.getItem("order")) || [];
const date = JSON.parse(localStorage.getItem("date")) || [];

// affiche Mes informations
const informations = document.getElementById("contact");
informations.innerHTML += `
    <p class="fs-5"><span class="fw-bold text-capitalize"><strong>${order.contact.firstName}</strong></span>, merci pour votre commande !</p>
    <p class="fs-5"> Votre commande d'un montant total de <span class="fw-bold"><strong>${convertPrice(displayTotalBasket())}</strong></span> a été validée.</p>
    <p class="fs-5">Elle porte la référence <span class="fw-bold"><strong>${order.orderId}</strong></span>.</p>
    <p class="fs-5">Votre facture vous sera transmise par mail à : <span class="fw-bold"><strong>${order.contact.email}</strong></span>.</p>
    <p class="fs-5">Votre commande sera expédiée à l'adresse suivante :
    <div class=" fs-5 text-center fw-bold">
        <p class="text-capitalize"><strong>${order.contact.firstName} ${order.contact.lastName}</strong></p>
        <p class="text-capitalize"><strong>${order.contact.address}</strong></p>
        <p class="text-capitalize"><strong>${order.contact.city}</strong></p>
    </div>
    `;

// affiche Récapitulatif de ma commande
for (product of basket) {
    displayProductListTable(product);
}
const deletedItem = document.getElementsByClassName("rounded");
for(element of deletedItem){
    element.classList.add("d-none");
}

//affiche le prix total
totalPrice();

//bouton imprimer
const print = document.getElementById("print");
print.addEventListener("click", (e) => {
    e.preventDefault;
    window.print();
});


