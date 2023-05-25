// Имеется объект

const obj = {
    products: [
        { title: "bottle of wine", price: 35, category: "wines" },
        { title: "1984", price: 15, category: "books", author: "George Orwell" },
        { title: "Iphone XR", price: 400, category: "phones", campera: "12MP" }
    ]
};
// Используя деструктуризацию пулучите в отдельную переменную значение поля author;

const { products: [, { author }] } = obj;
console.log(author);

// Задание 2 *дополнительно
// Выберите одну API из списка. Сделайте fetch запрос, разместите полученную от API информацию на странице html.

const ipVolume = document.getElementById("ipVolume");

async function getIp() {
    const response = await fetch("https://api.ipify.org?format=json");
    const obj = await response.json();
    const { ip } = obj;
    console.log(ip);
    ipVolume.textContent = ip;
}

getIp();