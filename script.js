const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});

// adidasos 
 
const preve = document.querySelector(".preve");
const nexte = document.querySelector(".nexte");
const carousele = document.querySelector(".carousel-containere");
const tracke = document.querySelector(".tracke");
let widthe = carousele.offsetWidth;
let indexe = 0;
window.addEventListener("resize", function () {
  widthe = carousele.offsetWidth;
});
nexte.addEventListener("click", function (e) {
  e.preventDefault();
  indexe = indexe + 1;
  preve.classList.add("show");
  tracke.style.transform = "translateX(" + indexe * -widthe + "px)";
  if (track.offsetWidth - indexe * widthe < indexe * widthe) {
    nexte.classList.add("hide");
  }
});
preve.addEventListener("click", function () {
  indexe = indexe - 1;
  nexte.classList.remove("hide");
  if (indexe === 0) {
    preve.classList.remove("show");
  }
  tracke.style.transform = "translateX(" + indexe * -widthe + "px)";
});


const niketermek = [
    {
        id: 0,
        kep: 'https://i.ibb.co/VHKLS1J/Jordan1-brotherhood.webp',
        nev: 'Air Jordan 1 Retro High OG',
        ar: 70000,
    },
    {
        id: 1,
        kep: 'https://i.ibb.co/MRgF86w/Jordan1-aquatone.jpg',
        nev: 'Air Jordan 1 Mid',
        ar: 60000,
    },
    {
        id: 2,
        kep: 'https://i.ibb.co/XZ8vFBt/Af1.webp',
        nev: 'Air Force 1 07',
        ar: 50000,
    },
    {
        id: 3,
        kep: 'https://i.ibb.co/GJfW3D9/Af1-supreme.jpg',
        nev: 'Air Force 1 Low',
        ar: 85000,
    },
    {
        id: 4,
        kep: 'https://i.ibb.co/pyPw17d/Jordan1-UNC.webp',
        nev: 'Air Jordan 1 Retro High',
        ar: 200000,
    },
    {
        id: 5,
        kep: 'https://i.ibb.co/tmcTmyv/AirMax.webp',
        nev: 'Air Max 98',
        ar: 91000,
    },
    {
        id: 6,
        kep: 'https://i.ibb.co/kHKWnR4/blazer.jpg',
        nev: 'Blazer Mid 77',
        ar: 29990,
    },
    {
        id: 7,
        kep: 'https://i.ibb.co/TLsLKmG/Travis.webp',
        nev: 'Air Jordan 1 Retro High',
        ar: 1500000,
    },
    {
        id: 8,
        kep: 'https://i.ibb.co/zr4rHyw/hyperroyal.webp',
        nev: 'Air Jordan 1 Retro High OG',
        ar: 185000,
    },
    {
        id: 9,
        kep: 'https://i.ibb.co/1XVL195/Vapormax.webp',
        nev: 'Air Vapormax Plus',
        ar: 89990,
    },
    {
        id: 10,
        kep: 'https://i.ibb.co/4PgVx0b/supremeaf.webp',
        nev: 'Air Force 1 Low Supreme',
        ar: 84990,
    }
];

const nikekategoria = [...new Set(niketermek.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('track').innerHTML = nikekategoria.map((item)=>
{
    var {kep, nev, ar} = item;
    return(
        ` <div class="card-container">
        <div class="card" >
          <img src="${kep}" height="200px" width="300px ">
          <h2>${nev}</h2>
          <hr>
          <button onclick="nikekosarba(${i++})"><img src="./kepek/cart.png" height="20px" width="20px"> | Kosárba</button>
          <p><b>ÁR:</b> ${ar} FT </p>
        </div>
      </div>`
    )
}).join('')

const adidastermek = [
    {
        id: 0,
        kep: 'https://i.ibb.co/KGMXLQD/yeezy.webp',
        nev: 'Yeezy Boost 350 V2',
        ar: 125000,
    },
    {
        id: 1,
        kep: 'https://i.ibb.co/Tmd6gxm/Adidas-Prophere-Core-Black.jpg',
        nev: 'Prophere',
        ar: 35000,
    },
    {
        id: 2,
        kep: 'https://i.ibb.co/VVtjYCh/Ozweego.webp',
        nev: 'Ozweego',
        ar: 38000,
    },
    {
        id: 3,
        kep: 'https://i.ibb.co/30M5dVn/Yeezy-Zebra.webp',
        nev: 'Yeezy Boost 350 V2',
        ar: 112000,
    },
    {
        id: 4,
        kep: 'https://i.ibb.co/N3RTDRf/derupt.webp',
        nev: 'Deerupt Runner',
        ar: 53000,
    },
    {
        id: 5,
        kep: 'https://i.ibb.co/tc6ccK9/Adidas-Propherecell.webp',
        nev: 'Prophere',
        ar: 77000,
    },
    {
        id: 6,
        kep: 'https://i.ibb.co/Z19r4wk/Light.webp',
        nev: 'Yeezy Boost 350 V2',
        ar: 180000,
    },
    {
        id: 7,
        kep: 'https://i.ibb.co/86gvbS6/goku.webp',
        nev: 'ZX 500',
        ar: 260000,
    }
];

const adidaskategoria = [...new Set(adidastermek.map((item)=>
    {return item}))]
    let o=0;
document.getElementById('tracku').innerHTML = adidaskategoria.map((item)=>
{
    var {kep, nev, ar} = item;
    return(
        ` <div class="card-container">
        <div class="card" >
          <img src="${kep}" height="200px" width="300px ">
          <h2>${nev}</h2>
          <hr>
          <button onclick="adidaskosarba(${o++})"><img src="./kepek/cart.png" height="20px" width="20px"> | Kosárba</button>
          <p><b>ÁR:</b> ${ar} FT </p>
        </div>
      </div>`
    )
}).join('')

function kosartartalom(){
    var elem = document.getElementById("kosar");
    var displayBeallitas = elem.style.display;
    if(displayBeallitas == 'none'){
        elem.style.display = 'block';
    } else{
        elem.style.display = 'none';
    }
}

var cart =[];



function nikekosarba(a){
    cart.push({...nikekategoria[a]});
    displaynikecart();
}
function nikedelElement(a){
    cart.splice(a, 1);
    displaynikecart();
}


function adidaskosarba(a){
    cart.push({...adidaskategoria[a]});
    displayadidascart();
}
function adidasdelElement(a){
    cart.splice(a, 1);
    displayadidascart();
}

function displaynikecart(){
    let j = 0, total=0;
    if(cart.length==0){
        document.getElementById('kosartargy').innerHTML = "A kosarad üres";
        document.getElementById("teljesar").innerHTML = " "+0+" FT";
    }
    else{
        document.getElementById("kosartargy").innerHTML = cart.map((items)=>
        {
            var {kep, nev, ar} = items;
            total=total+ar;
            document.getElementById("teljesar").innerHTML = ""+total+" FT";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img  src=${kep}>
                </div>
                <p style='font-size:12px;'>${nev}</p><br>
                <h2 style='font-size: 15px;'> ${ar} FT</h2>`+
                "<button onclick='nikedelElement("+ (j++) +")'>Törlés</button></div>"
            );
        }).join('');
    }

    
}
function displayadidascart(){
    let j = 0, total=0;
    if(cart.length==0){
        document.getElementById('kosartargy').innerHTML = "A kosarad üres";
        document.getElementById("teljesar").innerHTML = " "+0+" FT";
    }
    else{
        document.getElementById("kosartargy").innerHTML = cart.map((items)=>
        {
            var {kep, nev, ar} = items;
            total=total+ar;
            document.getElementById("teljesar").innerHTML = ""+total+" FT";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img  src=${kep}>
                </div>
                <p style='font-size:12px;'>${nev}</p><br>
                <h2 style='font-size: 15px;'> ${ar} FT</h2>`+
                "<button onclick='adidasdelElement("+ (j++) +")'>Törlés</button></div>"
            );
        }).join('');
    }

    
}