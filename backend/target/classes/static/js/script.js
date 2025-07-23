document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "Diamond Ring", description: "Elegant diamond ring with brilliant cut", price: 10000, imageUrl: "product1.jpg" },
    { name: "Gold Necklace", description: "Traditional gold necklace", price: 25000, imageUrl: "product2.jpg" },
    { name: "Pearl Earrings", description: "Classic pearl earrings", price: 8000, imageUrl: "product3.jpg" },
    { name: "Designer Bracelet", description: "Elegant designer bracelets", price: 12000, imageUrl: "product4.jpg" },
    { name: "Antique Brooch", description: "Vintage style brooches", price: 15000, imageUrl: "product5.jpg" },
    { name: "Silver Anklet", description: "Beautiful silver anklets", price: 6000, imageUrl: "product6.jpg" },
    { name: "Crystal Pendant", description: "Sparkling crystal pendants", price: 9000, imageUrl: "product7.jpg" },
    { name: "Gold Mangalsutra", description: "Traditional mangalsutra", price: 35000, imageUrl: "product8.jpg" },
    { name: "Diamond Bling", description: "Luxury diamond bling", price: 45000, imageUrl: "product9.jpg" },
    { name: "Royal Headband", description: "Elegant royal headband", price: 18000, imageUrl: "product10.jpg" }
  ];

  const productsSection = document.getElementById('products');
  const toggleBtn = document.getElementById('toggleBtn');
  let productsVisible = false;

  // Create product cards
  products.forEach((product, index) => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.setAttribute('data-aos', 'fade-up');
    div.setAttribute('data-aos-delay', (index * 100).toString());
    
    div.innerHTML = `
      <img src="assets/${product.imageUrl}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/280x250/e0e0e0/666?text=Product+Image'">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <p class="price">₹${product.price.toLocaleString()}</p>
      </div>
    `;
    productsSection.appendChild(div);
  });

  // Toggle show/hide products
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      productsVisible = !productsVisible;
      
      if (productsVisible) {
        productsSection.style.display = "grid";
        toggleBtn.textContent = "Hide Products";
        // Refresh AOS for newly visible elements
        setTimeout(() => {
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        }, 100);
      } else {
        productsSection.style.display = "none";
        toggleBtn.textContent = "Show Products";
      }
    });
  }
});
