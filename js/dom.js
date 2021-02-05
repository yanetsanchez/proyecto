// const publicaciones = document.getElementById('publicacion')

// const tituloRev = document.getElementsByClassName('tituloRev');

// console.log(publicacion);
// console.log(tituloRev);

let publicacionContainer = document.getElementById('publicacion');

publicacionContainer.textContent = 'Revista Núcleos ';




let numeroContainer = document.getElementById('numero');

// let numeroRev = document.createElement('h4');
// numeroRev.textContent = 'Núcleos #1 – Ciencia para la vida';
// numeroContainer.appendChild(numeroRev);


const data = [{
    "name" : "Núcleos #1 – Ciencia para la vida",
    "price": 250,
    "code" : "0001",
    "enabled" : true,
    "imagen" : {
        "url" : "img/nuc-1.png"
    }
} , {
    "name" : "Núcleos #2 – Agua recurso vital",
    "price": 250,
    "code" : "0002",
    "enabled" : true,
    "imagen" : {
        "url" : "img/nuc-2.png"
    }
} , {
    "name" : "Núcleos #3 – Enseñanza de la biología",
    "price": 250,
    "code" : "0003",
    "enabled" : true,
    "imagen" : {
        "url" : "img/nuc-3.png"
    }
} , {
    "name" : "Núcleos #4 – Formación para el desarrollo humano",
    "price": 250,
    "code" : "0004",
    "enabled" : true,
    "imagen" : {
        "url" : "img/nuc-4.png"
    }
}]



data.forEach(function(product){
    // console.log(product.name);
    if(product.enabled) {
            let numeroRev = document.createElement('h4');
            numeroRev.textContent = product.name;
            numeroContainer.appendChild(numeroRev);
    }
<<<<<<< HEAD
})

=======
})
>>>>>>> developer
