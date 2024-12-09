let alinacakUrunSayisi = prompt("Kaç Ürün alacaksın?");
let sepet = [];

for (let i = 0; i < alinacakUrunSayisi; i++) {
    let alinanUrun = prompt("Sepete koyacağın ürünü yaz:");
    sepet[i] = alinanUrun;
}

console.log("Sepetteki ürünler:");
for (let i = 0; i < sepet.length; i++) {
    console.log((i + 1)+ ". ürün " +  sepet[i]);    
}
