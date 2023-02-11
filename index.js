const adviceNo = document.getElementById("advice-No");
const quote = document.getElementById("blockquote");    
let quotes  = [
    {
        qid:"ADVICE # 110",
        block:'"The greatest glory in living lies not in never falling, but in rising every time we fall."'
    },
    {
        qid:"ADVICE # 111",
        block:'"The way to get started is to quit talking and begin doing."'
    },
    {
        qid:"ADVICE # 112",
        block:'"Your time is limited, so don\'t waste it living someone else\'s life."'
    },
    {
        qid:"ADVICE # 113",
        block:'"If life were predictable it would cease to be life, and be without flavor."'
    },
    {
        qid:"ADVICE # 114",
        block:'"Life is what happens when you\'re busy making other plans"'
    },
    {
        qid:"ADVICE # 115",
        block:'"Always remember that you are absolutely unique."'
    },
    {
        qid:"ADVICE # 116",
        block:'"The future belongs to those who believe."'
    },
    {
        qid:"ADVICE # 118",
        block:'"Whoever is happy will make others happy too."'
    },
    {
        qid:"ADVICE # 119",
        block:'"Life is either a daring adventure or nothing at all."'
    },
    {
        qid:"ADVICE # 120",
        block:'"You will face many defeats in life, but never let yourself be defeated."'
    },
    {
        qid:"ADVICE # 121",
        block:'"The only impossible journey is the one you never begin."'
    },
    {
        qid:"ADVICE # 122",
        block:'"Only a life lived for others is a life worthwhile."'
    },
    {
        qid:"ADVICE # 123",
        block:'"You only live once, but if you do it right, once is enough."'
    },
    {
        qid:"ADVICE # 124",
        block:'"Live in the sunshine, swim the sea, drink the wild air."'
    },
    {
        qid:"ADVICE # 125",
        block:'"Life itself is the most wonderful fairy tale."'
    },
    {
        qid:"ADVICE # 126",
        block:'"May you live all the days of your life."'
    },
    {
        qid:"ADVICE # 127",
        block:'"Life is really simple, but we insist on making it complicated."'
    },
    {
        qid:"ADVICE # 128",
        block:'"Life is ours to be spent, not to be saved."'
    },
    {
        qid:"FACT # 143",
        block:'"I Love You Divya"'
    }

]



document.getElementById("dice-section").onclick = function(){
    let random = Math.floor((Math.random() * 19) + 0);
    adviceNo.textContent = quotes[random].qid;
    quote.textContent = quotes[random].block;
}