// Hazır cavablar bazası
const answers = {
    "How does AI predict stock prices?": "AI uses machine learning models, historical data, and technical indicators to forecast stock price movements.",
    "What are the best AI tools for trading?": "Some of the top AI tools for trading include Trade Ideas, Kavout, and AlphaSense.",
    "Can AI beat the stock market?": "AI can analyze vast amounts of data quickly, but consistently beating the market is still a challenge due to unpredictable market conditions."
};

// Axtarış funksiyası
function searchQuestion() {
    let question = document.getElementById("search-input").value;
    let answerBox = document.getElementById("answer-text");

    if (answers[question]) {
        answerBox.innerText = answers[question];
    } else {
        answerBox.innerText = "Sorry, we don't have an answer for this question yet.";
    }
}

// Təklif olunan suallara klikləyəndə cavabı göstərir
function setQuestion(question) {
    document.getElementById("search-input").value = question;
    searchQuestion();
}
