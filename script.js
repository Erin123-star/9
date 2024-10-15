const lines = [
    "我挣扎着从混沌中爬到另一个深渊，原本想着就这样平平淡淡的度过一生，也不错。",
    "虽然清苦，但也安稳，至少能得到内心的平静。",
    "可没想到的是，我早已破碎的灵魂，会有人视若珍宝的一片一片捡起来，",
    "然后对我说，别难过，粘起来就好了。",
    "那一刻，我荒芜的内心迎来了冰雪消融的一点翠绿，",
    "我看着你的眼睛，那是晚冬时节的第一春，",
    "春雷在我耳边炸响，或许就是那一瞬间，我感受到了爱。",
    "从此，田光乍现，我的世界春花开满山。",
    "而多年后的今天，你靠在我的怀里，",
    "我才后知后觉地反应过来，那夜，我听到震耳欲聋的声响，",
    "不是雷声，是心跳"
   
];

const textElement = document.getElementById('text');
let currentLine = 0;

function showNextLine() {
    if (currentLine < lines.length) {
        const line = document.createElement('p');
        line.textContent = lines[currentLine];
        line.style.opacity = '0';
        textElement.appendChild(line);
        fadeIn(line);
        currentLine++;
        setTimeout(showNextLine, 3000); // 每3秒显示一行
    } else {
        setTimeout(showHeart, 3000); // 等待3秒后显示爱心
    }
}

function fadeIn(element) {
    let opacity = 0;
    const fadeInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.02;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
        }
    }, 50);
}

function showHeart() {
    const heart = document.getElementById('heart');
    heart.style.display = 'block';
    setTimeout(() => {
        document.body.style.backgroundColor = 'black';
        heart.style.display = 'none'; // 黑屏3秒后黑屏
    }, 4000); // 心跳动画完成后4秒黑屏
}

// 开始显示文本
showNextLine();
