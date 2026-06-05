const btnorder = document.getElementById("order")
const btnproduct = document.getElementById("product")
btnorder.addEventListener("click",() => {
    const masage = ` halo saya mau beli 
    Nama :
    jumlah :
    Tanggal penjemputan :`;
    const url = `https://wa.me/62882003067694?text=${encodeURIComponent(masage)}`;
    window.open(url,"_blank");
});
btnproduct.addEventListener("click", () => {
    const masage = ` halo saya mau beli 
    Nama :
    jumlah :
    Tanggal penjemputan :`;
    const url = `https://wa.me/62882003067694?text=${encodeURIComponent(masage)}`;
    window.open(url, "_blank");
});