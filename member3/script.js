let recognition;
let isListening = false;

// Check browser support
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function () {
        isListening = true;

        document.getElementById("voiceButton").innerText =
            "🔴 Listening...";

        document.getElementById("status").innerText =
            "Please speak now...";
    };

    recognition.onresult = function (event) {

        const transcript =
            event.results[0][0].transcript;

        document.getElementById("speechText").value =
            transcript;

        document.getElementById("status").innerText =
            "✅ Speech captured successfully.";

        // NLP processing
        analyzeText(transcript);
    };

    recognition.onerror = function (event) {

        document.getElementById("status").innerText =
            "❌ Voice recognition error: " + event.error;

        resetVoiceButton();
    };

    recognition.onend = function () {
        resetVoiceButton();
    };

} else {

    document.getElementById("status").innerText =
        "❌ Voice recognition is not supported in this browser.";
}


// Start voice recognition
function startVoiceRecognition() {

    if (!recognition) {
        alert("Voice recognition is not supported in this browser.");
        return;
    }

    const selectedLanguage =
        document.getElementById("language").value;

    recognition.lang = selectedLanguage;

    recognition.start();
}


// Reset voice button
function resetVoiceButton() {

    isListening = false;

    document.getElementById("voiceButton").innerText =
        "🎙️ Start Speaking";
}


// Basic NLP processing
function analyzeText(text) {

    const lowerText = text.toLowerCase();

    let intent = "General Query";
    let keywords = [];

    // Product related words
    const productWords = [
        "product",
        "saree",
        "craft",
        "handloom",
        "புடவை",
        "கைவினை",
        "சேலை"
    ];

    // Price related words
    const priceWords = [
        "price",
        "cost",
        "rate",
        "விலை",
        "வில",
        "कीमत"
    ];

    // Order related words
    const orderWords = [
        "order",
        "buy",
        "purchase",
        "வாங்க",
        "ஆர்டர்",
        "खरीद"
    ];

    // Detect product intent
    if (productWords.some(word => lowerText.includes(word))) {

        intent = "Product Information";

        keywords.push("Product");
    }

    // Detect price intent
    if (priceWords.some(word => lowerText.includes(word))) {

        intent = "Price Information";

        keywords.push("Price");
    }

    // Detect order intent
    if (orderWords.some(word => lowerText.includes(word))) {

        intent = "Purchase / Order";

        keywords.push("Order");
    }

    if (keywords.length === 0) {
        keywords.push("No specific keyword detected");
    }

    document.getElementById("intent").innerText =
        intent;

    document.getElementById("keywords").innerText =
        keywords.join(", ");

    detectLanguage();
}


// Detect selected language
function detectLanguage() {

    const language =
        document.getElementById("language").value;

    let languageName;

    if (language === "ta-IN") {
        languageName = "Tamil";
    }
    else if (language === "en-IN") {
        languageName = "English";
    }
    else if (language === "hi-IN") {
        languageName = "Hindi";
    }
    else {
        languageName = "Unknown";
    }

    document.getElementById("detectedLanguage").innerText =
        languageName;
}


// Clear all data
function clearVoiceData() {

    document.getElementById("speechText").value = "";

    document.getElementById("intent").innerText =
        "Waiting...";

    document.getElementById("detectedLanguage").innerText =
        "Waiting...";

    document.getElementById("keywords").innerText =
        "Waiting...";

    document.getElementById("status").innerText =
        "Click the button and start speaking.";
}