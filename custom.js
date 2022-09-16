const data_product_all = [{
        "_id": "62f7b76b5124df644b7c820e",
        "brand": "Samsung",
        "name": "Samsung A80",
        "memory": "16/256",
        "price": "7900000",
        "picture": "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a80-01.jpg",
    },
    {
        "_id": "62f7b76b5d98a4518842da84",
        "brand": "Xiaomi",
        "name": "Xiaomi Redmi Note 9",
        "memory": "4/64",
        "price": "1300000",
        "picture": "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-9-4.jpg",
    },
    {
        "_id": "62f7b76b5d98a4518842da85",
        "brand": "Vivo",
        "name": "Vivo v25",
        "memory": "8/128",
        "price": "3400000",
        "picture": "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v25-pro-1.jpg",
    },
    {
        "_id": "62f7b76b5d98a4518842da86",
        "brand": "iPhone",
        "name": "iPhone 13 Promax",
        "memory": "6/128",
        "price": "18000000",
        "picture": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg",
    },
    {
        "_id": "62f7b76b5d98a4518842da87",
        "brand": "iPhone",
        "name": "iPhone 12",
        "memory": "4/64",
        "price": "9300000",
        "picture": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
    },
    {
        "_id": "62f7b76b5d98a4518842da88",
        "brand": "Samsung",
        "name": "Samsung Galaxy A13",
        "memory": "6/128",
        "price": "2500000",
        "picture": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a13.jpg",
    },
    {
        "_id": "62f7b76b5d98a4518842da89",
        "brand": "Oppo",
        "name": "Oppo A54",
        "memory": "4/64",
        "price": "3500000",
        "picture": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a54.jpg",
    },
];

let data_product = data_product_all; 

showDataProduct();
showIsiBeranda();

function cariData() {
    let key = document.getElementById('filter').value;
    //console.log(key);
    data_product = data_product_all.filter(product => product.name.includes(key));
    //console.log(data_product);
    
    showIsiBeranda();
}

function sortBy() {
    let sort = document.getElementById('urutkan').value;
    console.log(sort);
    if(sort=="nameAsc") {
        data_product = data_product.sort((a, b) => a.name.localeCompare(b.name));
    } else if(sort=="nameDesc") {
        data_product = data_product.sort((a, b) => b.name.localeCompare(a.name));
    } else if(sort=="priceHigh") {
        data_product = data_product.sort((a, b) => b.price - a.price);
    } else if(sort=="priceLow") {
    data_product = data_product.sort((a, b) => a.price - b.price);
    }
    //console.log(data_product);
    
    showIsiBeranda();
}

const PHONE_NUMBER_FORMAT = /^(62|0)*8[1-9]+$/;


function deleteProduct(id_product) {
    console.log(data_product);

    let index_product = data_product.findIndex(product => product._id == id_product);
    data_product.splice(index_product, 1);

    showDataProduct();
    showIsiBeranda();
    console.log(data_product);
}

function editProduct(id_product) {
    let index_product = data_product.findIndex(product => product._id == id_product);

    let formulir = document.getElementById('form-data-product');
    showFormSection();

    formulir.querySelector('#_id').value = data_product[index_product]._id;
    formulir.querySelector('#brand').value = data_product[index_product].brand;
    formulir.querySelector('#name').value = data_product[index_product].name;
    formulir.querySelector('#memory').value = data_product[index_product].memory;
    formulir.querySelector('#price').value = data_product[index_product].price;

    showDataProduct();
    showIsiBeranda();
    console.log(data_product);
}

function showDataProduct() {
    let item_html = '';
    data_product.forEach((product, index) => {
        item_html += `
        <tr>
            <td>${index+1}</td>
            <td>${product.brand}</td>
            <td>${product.name}</td>
            <td>${product.memory}</td>
            <td>${product.price}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editProduct('${product._id}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct('${product._id}')">Delete</button>
            </td>
        </tr>
    `;
    });

    let table_body_product = document.getElementById("data-product");
    table_body_product.innerHTML = item_html;
    console.log(table_body_product.attributes);
}

function showIsiBeranda() {
    let item_html = '';
    data_product.forEach((data_product) => {
        item_html += `
        <div class="col-3">
        <div class="card">
            <img
              class="card-img-top"
              src="${data_product.picture}"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">${data_product.name}</h5>
              <p class="card-text">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p class="card-text">
                <b>Memory : ${data_product.memory}</b>
              </p>
            </div>
            <div class="card-footer">
            <div class="btn btn-primary btn-block">Rp ${data_product.price},00</div>
            </div>
          </div>
          </div>
    `;
    });

    let table_body_product = document.getElementById("isi-product");
    table_body_product.innerHTML = item_html;
}

function showFormSection() {
    document.getElementById("form-section").setAttribute("style",'display:block');
}

function showBeranda() {
    document.getElementById("beranda").setAttribute("style",'display:block');
    document.getElementById("admin").setAttribute("style",'display:none');
    showIsiBeranda();
}

function showAdmin() {
    document.getElementById("beranda").setAttribute("style",'display:none');
    document.getElementById("admin").setAttribute("style",'display:block');
}

function saveData() {
    let form_data = document.getElementById('form-data-product');
    form_data.querySelector('.name').value
    let brand = form_data.querySelector('.brand').value;
    let name = form_data.querySelector('.name').value;
    let memory = form_data.querySelector('.memory').value;
    let price = form_data.querySelector('.price').value;
    
    let validation_form = [
        {"field":"brand", "required":true},
        {"field":"name", "required":true},
        {"field":"memory", "required":true},
        {"field":"price", "required":true},
    ];

    validation_form.forEach(function(validation) {
        if(validation['required']==true && form_data.querySelector("."+validation['field']).value == ""  ) {
            form_data.querySelector("."+validation['field']+"-error").innerHTML = 'Harus Diisi';
        }
    });

    let _id = form_data.querySelector('#_id').value;
    let ubah = false;
    //console.log(_id);

    data_product.forEach((data_product) => {
        if(data_product._id == _id) {
            console.log(data_product._id);
            ubah = true;
        }
    });

    if(ubah == false) {
        data_product.push({
            "_id": generateId(),
            "brand": brand,
            "name": name,
            "memory": memory,
            "price": price,
            "picture": "https://images.tokopedia.net/img/cache/900/VqbcmM/2022/5/16/a965ae7d-896f-40b5-bae3-f143fe90d52f.jpg",
        });
    } else {
        const id_data = data_product.findIndex(product => product._id == _id);
        data_product[id_data]._id = _id;
        data_product[id_data].brand = brand;
        data_product[id_data].name = name;
        data_product[id_data].memory = memory;
        data_product[id_data].price = price;
    }

    showDataProduct();
    showIsiBeranda();
    document.getElementById("form-section").setAttribute("style",'display:hide');
}

function generateId(total_length = 15) {
    let id = "";
    for (let index = 0; index < total_length; index++) {
        id += Math.floor(Math.random() * 11);
    }
    return id;
}

let btn_close_form = document.getElementById('btn-close-form');
btn_close_form.addEventListener("click", function(event) {
    document.getElementById("form-section").setAttribute("style",'display:hide');
    event.preventDefault();
});

function updateFields(element) {
    if(element.value != "") {
        document.getElementsByClassName(element.name+"-error")[0].innerHTML = "";
    }

}

