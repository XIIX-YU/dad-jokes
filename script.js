// script.js

// 预定义的笑话和答案列表
const jokes = [
    { joke: "Why don't scientists trust atoms?", answer: "Because they make up everything!" },
    { joke: "Why did the chicken join a band?", answer: "Because it had the drumsticks!" },
    { joke: "What do you call fake spaghetti?", answer: "An impasta!" },
    { joke: "Why was the math book sad?", answer: "Because it had too many problems." },
    { joke: "How does a penguin build its house?", answer: "Igloos it together!" }
    { joke: "What did the vet say to the cat?", answer: "How are you feline?" }
    { joke: "What happens when M&M’s can’t agree on anything?", answer: "They reach an M-passe." },
    { joke: "What do you call a fake noodle?", answer: "An impasta." },
    { joke: "What do you call a belt made of watches?", answer: "A waist of time." },
    { joke: "Where do math teachers go on vacation?", answer: "Times Square." },
    { joke: "What does garlic do when it gets hot?", answer: "it takes its cloves off." }
];

// 获取DOM元素
const jokeContainer = document.getElementById('joke');
const answerContainer = document.getElementById('answer');
const revealBtn = document.getElementById('reveal-btn');

// 当前的笑话索引
let currentJokeIndex = null;

// 随机生成笑话的函数
function generateRandomJoke() {
    currentJokeIndex = Math.floor(Math.random() * jokes.length);
    return jokes[currentJokeIndex];
}

// 更新笑话内容
function updateJoke() {
    const currentJoke = generateRandomJoke();
    jokeContainer.textContent = currentJoke.joke;
    answerContainer.textContent = currentJoke.answer;
    answerContainer.style.display = 'none'; // 隐藏答案
}

// 显示答案
function revealAnswer() {
    if (currentJokeIndex !== null) {
        answerContainer.style.display = 'block';
    }
}

// 初始化时立即生成并显示一个随机笑话
updateJoke();

// 点击“Reveal”按钮显示答案
revealBtn.addEventListener('click', revealAnswer);
