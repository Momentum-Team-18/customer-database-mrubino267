let customerProfiles = document.querySelector("#customerProfiles")

console.log(customers);

// build a container for each customer and populate with their name

for (let customer of customers) {
    
    let customerCard = document.createElement('div');

    let customerPicture = document.createElement("img");
    customerPicture.src = customer.picture.large;
    customerCard.appendChild(customerPicture);
   
    
    let customerName = document.createElement('h2');
    customerName.innerText =`${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);
    customerProfiles.appendChild(customerCard);

    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);
    customerProfiles.appendChild(customerCard);
    
   let customerAddress = document.createElement ('p');
   customerAddress.innerText =`${customer.location.street.number} ${customer.location.street.name} ${customer.location.city}, ${ nameToAbbr (customer.location.state)}`
   customerCard.appendChild(customerAddress);
   customerProfiles.appendChild(customerCard);

   let formattedDate = moment(customer.registered.date).format("MMM DD, YYYY")
   let formattedDob = moment(customer.dob.date).format("MMM DD, YYYY")

   let customerDob = document.createElement('p');
   customerDob.innerText = `DOB: ${formattedDob} \n Customer since: ${formattedDate}`;
   customerCard.appendChild(customerDob);
   customerProfiles.appendChild(customerCard);

   

}

