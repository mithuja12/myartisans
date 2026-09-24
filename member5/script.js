const products = [
    {
        id: "P001",
        image: "",
        name: "Bamboo Basket",
        category: "Basket",
        material: "Bamboo",
        colour: "Natural",
        description: "Traditional handmade bamboo basket",
        tags: ["bamboo", "handmade", "traditional"],
        price: 850,
        artisanName: "Ravi",
        village: "Coimbatore",
        craft: "Bamboo Craft",
        story: "A traditional bamboo craft made by local artisans.",
        availability: "Available"
    },
    {
        id: "P002",
        image: "",
        name: "Clay Pot",
        category: "Pottery",
        material: "Clay",
        colour: "Brown",
        description: "Handmade traditional clay pot",
        tags: ["clay", "pottery", "handmade"],
        price: 500,
        artisanName: "Meena",
        village: "Pollachi",
        craft: "Pottery",
        story: "A handmade clay pot created using traditional pottery methods.",
        availability: "Available"
    }
];

let selectedProduct = null;

function displayProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const material = document.getElementById("materialFilter").value;

    const filteredProducts = products.filter(product => {

        const productText = (
            product.name + " " +
            product.category + " " +
            product.material + " " +
            product.artisanName + " " +
            product.village + " " +
            product.craft + " " +
            product.tags.join(" ")
        ).toLowerCase();

        return (
            productText.includes(search) &&
            (category === "" || product.category === category) &&
            (material === "" || product.material === material)
        );
    });

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Material: ${product.material}</p>
            <p>Artisan: ${product.artisanName}</p>
            <p>Village: ${product.village}</p>
            <p>Price: ₹${product.price}</p>
            <p>${product.description}</p>
            <button onclick="viewProduct('${product.id}')">
                View Details
            </button>
        `;

        productList.appendChild(card);
    });
}

function viewProduct(productId) {
    selectedProduct = products.find(product => product.id === productId);

    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <h2>${selectedProduct.name}</h2>
        <p><strong>Category:</strong> ${selectedProduct.category}</p>
        <p><strong>Material:</strong> ${selectedProduct.material}</p>
        <p><strong>Colour:</strong> ${selectedProduct.colour}</p>
        <p><strong>Artisan:</strong> ${selectedProduct.artisanName}</p>
        <p><strong>Village:</strong> ${selectedProduct.village}</p>
        <p><strong>Craft:</strong> ${selectedProduct.craft}</p>
        <p><strong>Price:</strong> ₹${selectedProduct.price}</p>
        <p><strong>Availability:</strong> ${selectedProduct.availability}</p>
        <p><strong>Description:</strong> ${selectedProduct.description}</p>
        <p><strong>Story:</strong> ${selectedProduct.story}</p>
        <button onclick="showEnquiry()">
            Enquire
        </button>
        <button onclick="showOrder()">
            Order
        </button>
    `;
}

function showEnquiry() {
    document.getElementById("enquirySection").style.display = "block";
    document.getElementById("orderSection").style.display = "none";
}

function showOrder() {
    document.getElementById("orderSection").style.display = "block";
    document.getElementById("enquirySection").style.display = "none";
}

function submitEnquiry() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const message = document.getElementById("customerMessage").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all enquiry details.");
        return;
    }

    alert("Enquiry sent successfully!");

    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerMessage").value = "";
}

function placeOrder() {
    const name = document.getElementById("orderName").value;
    const phone = document.getElementById("orderPhone").value;
    const quantity = document.getElementById("orderQuantity").value;
    const address = document.getElementById("orderAddress").value;

    if (name === "" || phone === "" || quantity === "" || address === "") {
        alert("Please fill all order details.");
        return;
    }

    alert("Order placed successfully!");

    document.getElementById("orderName").value = "";
    document.getElementById("orderPhone").value = "";
    document.getElementById("orderQuantity").value = "";
    document.getElementById("orderAddress").value = "";
}

document.getElementById("enquirySection").style.display = "none";
document.getElementById("orderSection").style.display = "none";

displayProducts();
const products = [
    {
        id: "P001",
        image: "",
        name: "Bamboo Basket",
        category: "Basket",
        material: "Bamboo",
        colour: "Natural",
        description: "Traditional handmade bamboo basket",
        tags: ["bamboo", "handmade", "traditional"],
        price: 850,
        artisanName: "Ravi",
        village: "Coimbatore",
        craft: "Bamboo Craft",
        story: "A traditional bamboo craft made by local artisans.",
        availability: "Available"
    },
    {
        id: "P002",
        image: "",
        name: "Clay Pot",
        category: "Pottery",
        material: "Clay",
        colour: "Brown",
        description: "Handmade traditional clay pot",
        tags: ["clay", "pottery", "handmade"],
        price: 500,
        artisanName: "Meena",
        village: "Pollachi",
        craft: "Pottery",
        story: "A handmade clay pot created using traditional pottery methods.",
        availability: "Available"
    }
];

let selectedProduct = null;

function displayProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const material = document.getElementById("materialFilter").value;

    const filteredProducts = products.filter(product => {

        const productText = (
            product.name + " " +
            product.category + " " +
            product.material + " " +
            product.artisanName + " " +
            product.village + " " +
            product.craft + " " +
            product.tags.join(" ")
        ).toLowerCase();

        return (
            productText.includes(search) &&
            (category === "" || product.category === category) &&
            (material === "" || product.material === material)
        );
    });

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Material: ${product.material}</p>
            <p>Artisan: ${product.artisanName}</p>
            <p>Village: ${product.village}</p>
            <p>Price: ₹${product.price}</p>
            <p>${product.description}</p>
            <button onclick="viewProduct('${product.id}')">
                View Details
            </button>
        `;

        productList.appendChild(card);
    });
}

function viewProduct(productId) {
    selectedProduct = products.find(product => product.id === productId);

    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <h2>${selectedProduct.name}</h2>
        <p><strong>Category:</strong> ${selectedProduct.category}</p>
        <p><strong>Material:</strong> ${selectedProduct.material}</p>
        <p><strong>Colour:</strong> ${selectedProduct.colour}</p>
        <p><strong>Artisan:</strong> ${selectedProduct.artisanName}</p>
        <p><strong>Village:</strong> ${selectedProduct.village}</p>
        <p><strong>Craft:</strong> ${selectedProduct.craft}</p>
        <p><strong>Price:</strong> ₹${selectedProduct.price}</p>
        <p><strong>Availability:</strong> ${selectedProduct.availability}</p>
        <p><strong>Description:</strong> ${selectedProduct.description}</p>
        <p><strong>Story:</strong> ${selectedProduct.story}</p>
        <button onclick="showEnquiry()">
            Enquire
        </button>
        <button onclick="showOrder()">
            Order
        </button>
    `;
}

function showEnquiry() {
    document.getElementById("enquirySection").style.display = "block";
    document.getElementById("orderSection").style.display = "none";
}

function showOrder() {
    document.getElementById("orderSection").style.display = "block";
    document.getElementById("enquirySection").style.display = "none";
}

function submitEnquiry() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const message = document.getElementById("customerMessage").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all enquiry details.");
        return;
    }

    alert("Enquiry sent successfully!");

    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerMessage").value = "";
}

function placeOrder() {
    const name = document.getElementById("orderName").value;
    const phone = document.getElementById("orderPhone").value;
    const quantity = document.getElementById("orderQuantity").value;
    const address = document.getElementById("orderAddress").value;

    if (name === "" || phone === "" || quantity === "" || address === "") {
        alert("Please fill all order details.");
        return;
    }

    alert("Order placed successfully!");

    document.getElementById("orderName").value = "";
    document.getElementById("orderPhone").value = "";
    document.getElementById("orderQuantity").value = "";
    document.getElementById("orderAddress").value = "";
}

document.getElementById("enquirySection").style.display = "none";
document.getElementById("orderSection").style.display = "none";

displayProducts();const products = [
    {
        id: "P001",
        image: "",
        name: "Bamboo Basket",
        category: "Basket",
        material: "Bamboo",
        colour: "Natural",
        description: "Traditional handmade bamboo basket",
        tags: ["bamboo", "handmade", "traditional"],
        price: 850,
        artisanName: "Ravi",
        village: "Coimbatore",
        craft: "Bamboo Craft",
        story: "A traditional bamboo craft made by local artisans.",
        availability: "Available"
    },
    {
        id: "P002",
        image: "",
        name: "Clay Pot",
        category: "Pottery",
        material: "Clay",
        colour: "Brown",
        description: "Handmade traditional clay pot",
        tags: ["clay", "pottery", "handmade"],
        price: 500,
        artisanName: "Meena",
        village: "Pollachi",
        craft: "Pottery",
        story: "A handmade clay pot created using traditional pottery methods.",
        availability: "Available"
    }
];

let selectedProduct = null;

function displayProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const material = document.getElementById("materialFilter").value;

    const filteredProducts = products.filter(product => {

        const productText = (
            product.name + " " +
            product.category + " " +
            product.material + " " +
            product.artisanName + " " +
            product.village + " " +
            product.craft + " " +
            product.tags.join(" ")
        ).toLowerCase();

        return (
            productText.includes(search) &&
            (category === "" || product.category === category) &&
            (material === "" || product.material === material)
        );
    });

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Material: ${product.material}</p>
            <p>Artisan: ${product.artisanName}</p>
            <p>Village: ${product.village}</p>
            <p>Price: ₹${product.price}</p>
            <p>${product.description}</p>
            <button onclick="viewProduct('${product.id}')">
                View Details
            </button>
        `;

        productList.appendChild(card);
    });
}

function viewProduct(productId) {
    selectedProduct = products.find(product => product.id === productId);

    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <h2>${selectedProduct.name}</h2>
        <p><strong>Category:</strong> ${selectedProduct.category}</p>
        <p><strong>Material:</strong> ${selectedProduct.material}</p>
        <p><strong>Colour:</strong> ${selectedProduct.colour}</p>
        <p><strong>Artisan:</strong> ${selectedProduct.artisanName}</p>
        <p><strong>Village:</strong> ${selectedProduct.village}</p>
        <p><strong>Craft:</strong> ${selectedProduct.craft}</p>
        <p><strong>Price:</strong> ₹${selectedProduct.price}</p>
        <p><strong>Availability:</strong> ${selectedProduct.availability}</p>
        <p><strong>Description:</strong> ${selectedProduct.description}</p>
        <p><strong>Story:</strong> ${selectedProduct.story}</p>
        <button onclick="showEnquiry()">
            Enquire
        </button>
        <button onclick="showOrder()">
            Order
        </button>
    `;
}

function showEnquiry() {
    document.getElementById("enquirySection").style.display = "block";
    document.getElementById("orderSection").style.display = "none";
}

function showOrder() {
    document.getElementById("orderSection").style.display = "block";
    document.getElementById("enquirySection").style.display = "none";
}

function submitEnquiry() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const message = document.getElementById("customerMessage").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all enquiry details.");
        return;
    }

    alert("Enquiry sent successfully!");

    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerMessage").value = "";
}

function placeOrder() {
    const name = document.getElementById("orderName").value;
    const phone = document.getElementById("orderPhone").value;
    const quantity = document.getElementById("orderQuantity").value;
    const address = document.getElementById("orderAddress").value;

    if (name === "" || phone === "" || quantity === "" || address === "") {
        alert("Please fill all order details.");
        return;
    }

    alert("Order placed successfully!");

    document.getElementById("orderName").value = "";
    document.getElementById("orderPhone").value = "";
    document.getElementById("orderQuantity").value = "";
    document.getElementById("orderAddress").value = "";
}

document.getElementById("enquirySection").style.display = "none";
document.getElementById("orderSection").style.display = "none";

displayProducts();
const products = [
    {
        id: "P001",
        image: "",
        name: "Bamboo Basket",
        category: "Basket",
        material: "Bamboo",
        colour: "Natural",
        description: "Traditional handmade bamboo basket",
        tags: ["bamboo", "handmade", "traditional"],
        price: 850,
        artisanName: "Ravi",
        village: "Coimbatore",
        craft: "Bamboo Craft",
        story: "A traditional bamboo craft made by local artisans.",
        availability: "Available"
    },
    {
        id: "P002",
        image: "",
        name: "Clay Pot",
        category: "Pottery",
        material: "Clay",
        colour: "Brown",
        description: "Handmade traditional clay pot",
        tags: ["clay", "pottery", "handmade"],
        price: 500,
        artisanName: "Meena",
        village: "Pollachi",
        craft: "Pottery",
        story: "A handmade clay pot created using traditional pottery methods.",
        availability: "Available"
    }
];

let selectedProduct = null;

function displayProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const material = document.getElementById("materialFilter").value;

    const filteredProducts = products.filter(product => {

        const productText = (
            product.name + " " +
            product.category + " " +
            product.material + " " +
            product.artisanName + " " +
            product.village + " " +
            product.craft + " " +
            product.tags.join(" ")
        ).toLowerCase();

        return (
            productText.includes(search) &&
            (category === "" || product.category === category) &&
            (material === "" || product.material === material)
        );
    });

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Material: ${product.material}</p>
            <p>Artisan: ${product.artisanName}</p>
            <p>Village: ${product.village}</p>
            <p>Price: ₹${product.price}</p>
            <p>${product.description}</p>
            <button onclick="viewProduct('${product.id}')">
                View Details
            </button>
        `;

        productList.appendChild(card);
    });
}

function viewProduct(productId) {
    selectedProduct = products.find(product => product.id === productId);

    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <h2>${selectedProduct.name}</h2>
        <p><strong>Category:</strong> ${selectedProduct.category}</p>
        <p><strong>Material:</strong> ${selectedProduct.material}</p>
        <p><strong>Colour:</strong> ${selectedProduct.colour}</p>
        <p><strong>Artisan:</strong> ${selectedProduct.artisanName}</p>
        <p><strong>Village:</strong> ${selectedProduct.village}</p>
        <p><strong>Craft:</strong> ${selectedProduct.craft}</p>
        <p><strong>Price:</strong> ₹${selectedProduct.price}</p>
        <p><strong>Availability:</strong> ${selectedProduct.availability}</p>
        <p><strong>Description:</strong> ${selectedProduct.description}</p>
        <p><strong>Story:</strong> ${selectedProduct.story}</p>
        <button onclick="showEnquiry()">
            Enquire
        </button>
        <button onclick="showOrder()">
            Order
        </button>
    `;
}

function showEnquiry() {
    document.getElementById("enquirySection").style.display = "block";
    document.getElementById("orderSection").style.display = "none";
}

function showOrder() {
    document.getElementById("orderSection").style.display = "block";
    document.getElementById("enquirySection").style.display = "none";
}

function submitEnquiry() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const message = document.getElementById("customerMessage").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all enquiry details.");
        return;
    }

    alert("Enquiry sent successfully!");

    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerMessage").value = "";
}

function placeOrder() {
    const name = document.getElementById("orderName").value;
    const phone = document.getElementById("orderPhone").value;
    const quantity = document.getElementById("orderQuantity").value;
    const address = document.getElementById("orderAddress").value;

    if (name === "" || phone === "" || quantity === "" || address === "") {
        alert("Please fill all order details.");
        return;
    }

    alert("Order placed successfully!");

    document.getElementById("orderName").value = "";
    document.getElementById("orderPhone").value = "";
    document.getElementById("orderQuantity").value = "";
    document.getElementById("orderAddress").value = "";
}

document.getElementById("enquirySection").style.display = "none";
document.getElementById("orderSection").style.display = "none";

displayProducts();const products = [
    {
        id: "P001",
        image: "",
        name: "Bamboo Basket",
        category: "Basket",
        material: "Bamboo",
        colour: "Natural",
        description: "Traditional handmade bamboo basket",
        tags: ["bamboo", "handmade", "traditional"],
        price: 850,
        artisanName: "Ravi",
        village: "Coimbatore",
        craft: "Bamboo Craft",
        story: "A traditional bamboo craft made by local artisans.",
        availability: "Available"
    },
    {
        id: "P002",
        image: "",
        name: "Clay Pot",
        category: "Pottery",
        material: "Clay",
        colour: "Brown",
        description: "Handmade traditional clay pot",
        tags: ["clay", "pottery", "handmade"],
        price: 500,
        artisanName: "Meena",
        village: "Pollachi",
        craft: "Pottery",
        story: "A handmade clay pot created using traditional pottery methods.",
        availability: "Available"
    }
];

let selectedProduct = null;

function displayProducts() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const material = document.getElementById("materialFilter").value;

    const filteredProducts = products.filter(product => {

        const productText = (
            product.name + " " +
            product.category + " " +
            product.material + " " +
            product.artisanName + " " +
            product.village + " " +
            product.craft + " " +
            product.tags.join(" ")
        ).toLowerCase();

        return (
            productText.includes(search) &&
            (category === "" || product.category === category) &&
            (material === "" || product.material === material)
        );
    });

    const productList = document.getElementById("productList");

    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Material: ${product.material}</p>
            <p>Artisan: ${product.artisanName}</p>
            <p>Village: ${product.village}</p>
            <p>Price: ₹${product.price}</p>
            <p>${product.description}</p>
            <button onclick="viewProduct('${product.id}')">
                View Details
            </button>
        `;

        productList.appendChild(card);
    });
}

function viewProduct(productId) {
    selectedProduct = products.find(product => product.id === productId);

    const details = document.getElementById("productDetails");

    details.innerHTML = `
        <h2>${selectedProduct.name}</h2>
        <p><strong>Category:</strong> ${selectedProduct.category}</p>
        <p><strong>Material:</strong> ${selectedProduct.material}</p>
        <p><strong>Colour:</strong> ${selectedProduct.colour}</p>
        <p><strong>Artisan:</strong> ${selectedProduct.artisanName}</p>
        <p><strong>Village:</strong> ${selectedProduct.village}</p>
        <p><strong>Craft:</strong> ${selectedProduct.craft}</p>
        <p><strong>Price:</strong> ₹${selectedProduct.price}</p>
        <p><strong>Availability:</strong> ${selectedProduct.availability}</p>
        <p><strong>Description:</strong> ${selectedProduct.description}</p>
        <p><strong>Story:</strong> ${selectedProduct.story}</p>
        <button onclick="showEnquiry()">
            Enquire
        </button>
        <button onclick="showOrder()">
            Order
        </button>
    `;
}

function showEnquiry() {
    document.getElementById("enquirySection").style.display = "block";
    document.getElementById("orderSection").style.display = "none";
}

function showOrder() {
    document.getElementById("orderSection").style.display = "block";
    document.getElementById("enquirySection").style.display = "none";
}

function submitEnquiry() {
    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;
    const message = document.getElementById("customerMessage").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Please fill all enquiry details.");
        return;
    }

    alert("Enquiry sent successfully!");

    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerPhone").value = "";
    document.getElementById("customerMessage").value = "";
}

function placeOrder() {
    const name = document.getElementById("orderName").value;
    const phone = document.getElementById("orderPhone").value;
    const quantity = document.getElementById("orderQuantity").value;
    const address = document.getElementById("orderAddress").value;

    if (name === "" || phone === "" || quantity === "" || address === "") {
        alert("Please fill all order details.");
        return;
    }

    alert("Order placed successfully!");

    document.getElementById("orderName").value = "";
    document.getElementById("orderPhone").value = "";
    document.getElementById("orderQuantity").value = "";
    document.getElementById("orderAddress").value = "";
}

document.getElementById("enquirySection").style.display = "none";
document.getElementById("orderSection").style.display = "none";

displayProducts();
