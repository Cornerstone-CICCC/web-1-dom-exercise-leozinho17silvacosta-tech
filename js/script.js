// YOUR CODE HERE

const clickButton1 = document.querySelector('.btn1');
btn1.addEventListener("click", function() {
    const output1 = document.querySelector('.output');
    output1.style.color = "red"
});

const clickButton2 = document.querySelector('.btn2');
btn2.addEventListener("click", function () {
    const outputList = document.querySelectorAll('.output')
    const output2 = outputList[1];

    const newSpan = document.createElement("span");
    newSpan.textContent = "Hello word";
    output2.appendChild(newSpan);
});

const removeClassButton = document.querySelector('#btn3');

removeClassButton.addEventListener("click", function() {
    const outputBox = document.getElementById('output3');
    const paragraph = outputBox.querySelector('p');
    if (paragraph) {
        paragraph.classList.remove('small-text');
    }
})

const clickButton4 = document.querySelector('#btn4');

clickButton4.addEventListener("click", function() {
    const outputBox = document.getElementById('output4');
    
    const paragraphs = outputBox.querySelectorAll('p'); 
    paragraphs.forEach(paragraph => {
        paragraph.style.color = "red";
    });
});

const valueButton = document.querySelector('#btn5');
const inputValue = document.getElementById('message');

valueButton.addEventListener("click", function() {
    
    const newValue = inputValue.value;
    console.log(newValue);
});