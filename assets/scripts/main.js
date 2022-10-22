// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let listaJs = document.getElementById('listahtml');



for (let i = 1; i < 101; i++) {

     let scatola = document.createElement("div");
     scatola.classList.add("box");
     scatola.classList.add("container");
     if ( i % 3 == 0) {
      scatola.innerHTML = `Fizz`;
      scatola.classList.add("fizz");
     } else if ( i % 5 == 0 ) {

      scatola.innerHTML = `Buzz`;
      scatola.classList.add("buzz");

     }  else if ( i % 15 == 0 ) {

      scatola.innerHTML = `giovanni`;
      scatola.classList.add("fizzbuzz");

     } else {

      scatola.innerHTML = `${i}`
      scatola.classList.add("numeri");

     }
  
     {listaJs.append(scatola);}

}
  


