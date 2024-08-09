// script.js

// 预定义的笑话列表
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "I'm reading a book about anti-gravity. It's impossible to put down!"
];

// 获取DOM元素
const jokeContainer = document.getElementById('joke');
const newJokeBtn = document.getElementById('new-joke-btn');

// 随机生成笑话的函数
function generateRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// 更新笑话内容
function updateJoke() {
    jokeContainer.textContent = generateRandomJoke();
}

// 初始化时显示一个笑话
updateJoke();

// 点击按钮生成新笑话
newJokeBtn.addEventListener('click', updateJoke);
