let dictionary = {
    ru: {
        hello: "привет",
        world: "мир",
        i: "я",
        love: "люблю",
        javascript: "джаваскрипт"
    },
    en: {
        hello: "hello",
        world: "world",
        i: "i",
        love: "love",
        javascript: "javascript"
    },
    es: {
        hello: "hola",
        world: "mundo",
        i: "yo",
        love: "amo",
        javascript: "javascript"
    }
};

function translate(text, from, to) {
    let words = text.split(' ');
    let translated = words.map(word => dictionary[to][dictionary[from][word]] || word);
    return translated.join(' ');
}

console.log(translate('привет мир я люблю javascript', 'ru', 'en')); // hello world i love javascript
console.log(translate('hello world i love javascript', 'en', 'ru')); // привет мир я люблю javascript
console.log(translate('hello world i люблю javascript', 'en', 'es')); // hola mundo yo amo javascript