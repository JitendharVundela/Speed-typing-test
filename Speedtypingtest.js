let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let counter = 0;
let uniqueId = setInterval(function() {
    spinner.classList.add('d-none');
    timer.textContent = counter + "Seconds";
    counter = counter + 1;
}, 1000);

function randomJoke(content) {
    quoteDisplay.textContent = content;
}

let option = {
    method: "GET"
};
let url = "https://apis.ccbp.in/random-quote";
fetch(url, option)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinner.classList.remove('d-none');
        let {
            content
        } = jsonData;
        randomJoke(content);
    });


submitBtn.addEventListener("click", function() {
    if (quoteInput.value === quoteDisplay.textContent) {
        result.textContent = "You typed in " + counter + " seconds";
        clearInterval(uniqueId);
    } else {
        result.textContent = "You typed an Incorrect sentence";
    }
});

resetBtn.addEventListener("click", function() {});