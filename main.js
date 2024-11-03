function loadProducts() {
    const container = document.getElementById("productContainer");
  
    fetch("https://www.course-api.com/javascript-store-products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response failed " + response.statusText);
        }
        return response.json();
      })
      .then(products => {
        container.innerHTML = '';
  
        products.forEach(product => {
          const { id, fields } = product;
          const { name, price, company, image } = fields;
          const imageUrl = image[0].url;
  
          const productDiv = document.createElement("div");
          productDiv.className = "product";
          
          productDiv.innerHTML = `
            <img src="${imageUrl}" alt="${name}">
            <h2>${name}</h2>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Price:</strong> $${(price / 100).toFixed(2)}</p>
          `;
  
          container.appendChild(productDiv);
        });
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        container.innerHTML = "<p>Failed to load products. Please come back later.</p>";
      });
  }
  
  document.addEventListener("DOMContentLoaded", loadProducts);
    