function generateProduct() {

    // Get values from form
    const productName =
        document.getElementById("productName").value.trim();

    const artisanName =
        document.getElementById("artisanName").value.trim();

    const material =
        document.getElementById("material").value.trim();

    const region =
        document.getElementById("region").value.trim();

    const price =
        document.getElementById("price").value;

    const availability =
        document.getElementById("availability").value;

    const craftStory =
        document.getElementById("craftStory").value.trim();


    // Check product name
    if (productName === "") {
        alert("Please enter the product name.");
        return;
    }


    // Update product preview

    document.getElementById("previewName").textContent =
        productName;

    document.getElementById("previewArtisan").textContent =
        artisanName || "-";

    document.getElementById("previewMaterial").textContent =
        material || "-";

    document.getElementById("previewRegion").textContent =
        region || "-";

    document.getElementById("previewPrice").textContent =
        price || "0";

    document.getElementById("previewAvailability").textContent =
        availability;

    document.getElementById("previewStory").textContent =
        craftStory || "No craft story added.";


    // Product data

    const product = {
        name: productName,
        artisan: artisanName,
        material: material,
        region: region,
        price: price,
        availability: availability,
        story: craftStory
    };


    // Convert product data into text
    const productData = JSON.stringify(product);


    // Remove old QR code
    document.getElementById("qrcode").innerHTML = "";


    // Create new QR code
    new QRCode(
        document.getElementById("qrcode"),
        {
            text: productData,
            width: 160,
            height: 160
        }
    );
}


/* Share Product */

function shareProduct() {

    const productName =
        document.getElementById("productName").value.trim();

    const artisanName =
        document.getElementById("artisanName").value.trim();

    const price =
        document.getElementById("price").value;


    if (productName === "") {
        alert("Please create a product listing first.");
        return;
    }


    const shareText =
        "Check out " +
        productName +
        " by " +
        artisanName +
        ". Price: ₹" +
        price;


    // Mobile share option

    if (navigator.share) {

        navigator.share({
            title: productName,
            text: shareText
        });

    }

    else {

        // Copy text if sharing is not supported

        navigator.clipboard.writeText(shareText);

        alert("Product details copied!");
    }
}