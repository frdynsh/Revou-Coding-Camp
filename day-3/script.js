alert('Hello World!');

// variable
// var message;
// let nama;
// const pi;

// var message = "Selamat datang di JavaScript!";
// let nama = "Ferdi";
// const pi = 3.14;


// TIPE DATA
let teks = "ferdi";                             // string
let number = 30;                                // number
let keterangan = true;                          // boolean
let kosong = null;                              // null
let tidakAda;                                   // undefined
let array = ['reading', 'gaming', 'coding'];
    array.push("traveling");
    array.splice(1, 1);                         // array
let objek = { a: 1, b: 2 };                     // object

console.log("Judul: " , teks);
console.log("Number: " , number);
console.log("Keterangan: " , keterangan);
console.log("Kosong: " , kosong);
console.log("Tidak Ada: " , tidakAda);
console.log("Array: " , array);
console.log("Object: " , objek);


// OPERATOR
    // Operator Aritmatika
    let a = 10;
    let b = 5;
    let c = a + b;
    console.log("Hasil Penjumlahan: " , c);

    // Operator Penugasan
    let l = 5;
    l += 10;
    console.log("Hasil Penugasan: " , l);

    // Operator Perbandingan
    let d = 10;
    let e = 5;
    let f = d === e;
    console.log("Hasil Perbandingan: " , f);

    // Operator Logika
    let g = true;   
    let h = false;
    let i = g && h;  // AND
    console.log("Hasil Logika: " , i);



// KONDISI
    // if
    let angka = 10;
    if (angka > 5) {
        console.log("Angka lebih besar dari 5");
    }

    // if, else if, else
    let nilai = 75; 
    if (nilai >= 80) {
        console.log("Nilai A");
    } else if (nilai >= 60) {
        console.log("Nilai B");
    } else {
        console.log("Nilai C");
    }

    // switch
    let hari = 3;
    switch (hari) {
        case 1:
            console.log("Hari Senin");
            break;
        case 2:
            console.log("Hari Selasa");
            break;
        case 3:
            console.log("Hari Rabu");
            break;
        default:
            console.log("Hari tidak valid");
    }

// PERULANGAN
    // for
    for (let i = 0; i < 5; i++) {
        console.log("Perulangan ke-" + i);
    }

    // while
    let j = 0;
    while (j < 5) {
        console.log("Perulangan ke-" + j);
        j++;
    }

    // do while
    let k = 0;
    do {
        console.log("Perulangan ke-" + k);
        k++;
    } while (k < 5);


// FUNCTION
function carabiasa() {
    console.log("Ini adalah fungsi biasa");
}

var caraEkspresi = function() {
    console.log("Ini adalah fungsi ekspresi");
}

var caraArrow = () => {
    console.log("Ini adalah fungsi arrow");
}

function caraParameter(nama) {
    console.log("Halo, " + nama);
}