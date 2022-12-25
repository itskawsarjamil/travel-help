var carObject = {
    vehicle: "Car",
    imageUrl:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 3,
    capacity: 4,
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

var boatObject = {
    vehicle: "Boat",
    imageUrl:
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",

    farePerKilo: 3,
    capacity: 4,
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};
var bikeObject = {
    vehicle: "Bike",
    imageUrl:
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlrZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 2,

    capacity: 2,

    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};

var busObject = {
    vehicle: "Bus",
    imageUrl:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

    farePerKilo: 3,
    capacity: 30,
    description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eligendi veritatis expedita, dicta aut eum itaque ut tempora alias laudantium?",
};



const services = [bikeObject, busObject, carObject, boatObject];

function calculateCost(obj) {
    console.log(obj);
  const quantity = document.getElementById("quantity-input").value;
  const distance = document.getElementById("distance-input").value;

  const fareDiv = document.getElementById("fare");

  fareDiv.innerHTML = quantity * distance * obj.farePerKilo;
}

function modalDetails(obj) {
    const objstring=JSON.stringify(obj);
    console.log(obj);
    const modalBody = document.getElementById("modal-body");
    const div = document.createElement("div");
    div.innerHTML =
        `
    <div class="card mx-auto" style="width: 25rem;">
  <img src=${obj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Vehicle Mood : ${obj.vehicle}</h5>
    <p class="card-text">${obj.description}</p>
    <p class="card-text"><small class="text-muted">Fare per kilo ${obj.farePerKilo}</small> <small class="text-muted">Capacity ${obj.capacity}</small></p>
    <div class="d-flex flex-column" role="search">
     <p>Fare: <small class="text-muted" id="fare"></small > </p>
     <p>tax: <small class="text-muted" id="tax"></small > </p>
     <p>Total-cost: <small class="text-muted" id="total-cost"></small > </p>
    <input class="form-control my-2" id= "distance-input"  type="number" placeholder="Koto kilo jaba?" aria-label="Search"/>
    <input class="form-control my-2" type="number" id= "quantity-input" placeholder="koita gari lagbe?" aria-label="Search"/>
    <button class="btn btn-outline-success" id="search-btn" aria-label="type="submit" onclick='calculateCost(${objstring})'>submit</button>
  </div>
  </div>
</div>
    `
    modalBody.appendChild(div);
}

function displayService(service) {
    const stringifiedservice=JSON.stringify(service);
    const div = document.createElement("div");
    const cardContainer = document.getElementById("card-container");
    div.innerHTML =
        `
    <div class="card mb-3 p-3" style="max-width: 60%; margin:1em auto;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${service.imageUrl}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">Transport Mood: ${service.vehicle}</h5>
                    <p class="card-text">${service.description}</p>
                    <p class="card-text d-flex gap-5">
                    <small class="text-muted">Fare per Kilo:${service.farePerKilo}</small>
                    <small class="text-muted">Capacity: ${service.capacity}</small>
                    </p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick='modalDetails(${stringifiedservice})' data-bs-target="#exampleModal">
              see details
        </button>
                </div>
            </div>
        </div>
    </div>
    `
    cardContainer.appendChild(div);
}
function callDisplayService(services) {
    for (let service of services) {
        displayService(service);
    }
}

callDisplayService(services);


document.getElementById("search-btn").addEventListener("click",function(){
    const value=document.getElementById("search-value").value;
    document.getElementById("search-value").value='';
    console.log(value);
    document.getElementById("card-container").innerHTML='';
    for(let service of services)
    {
        if(service.vehicle.toLowerCase()==value.toLowerCase())
        {
            displayService(service);
        }
    }
})


document.getElementById("search-btn2").addEventListener("click",function(){
    //its not working
    console.log('nav search');
    const value2=document.getElementById("search-value2").value;
    document.getElementById("search-value2").value='';
    console.log(value2);
    document.getElementById("card-container").innerHTML='';
    for(let service of services)
    {
        if(service.vehicle.toLowerCase()==value2.toLowerCase())
        {
            displayService(service);
        }
    }
})
