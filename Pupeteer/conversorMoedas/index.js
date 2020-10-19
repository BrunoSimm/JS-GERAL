const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


async function robo(){
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    const moedaBase = readlineSync.question('Informe a moeda base:') || `dolar`
    const moedaFinal = readlineSync.question('Informe a moeda final:') ||`real`
    const qualquerURL= `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome.0.0i433l2j0l6.4214j1j7&sourceid=chrome&ie=UTF-8`
    await page.goto(`${qualquerURL}`);

    //await page.screenshot({path: 'example.png'});

    const resultado = await page.evaluate(() => {
        return document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value
    });

    console.log(`O valor de 1 ${moedaBase} em ${moedaFinal} é: ${resultado}`)
    
    await browser.close();
}

robo();

//MX TOOL BOX SPF: document.querySelector('pre.alert.alert-danger').textContent 