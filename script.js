// Variabel Keranjang
let cartCount = 0;
let cartItems = [];

// Fungsi Tambah ke Keranjang
function addToCart(productName, productPrice) {
    cartCount++;
    cartItems.push({ name: productName, price: productPrice });
    
    // Perbarui jumlah keranjang di navigasi
    document.getElementById('cart-count').innerText = cartCount;
    
    // Notifikasi sederhana
    alert(`${productName} telah ditambahkan ke keranjang belanja!`);
}

// Event Listener saat dokumen siap
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Kickslab Siap!");
});
