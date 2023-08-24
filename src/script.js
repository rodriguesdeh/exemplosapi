//bitcoin
const lblBTC = document.getElementById('lblBTC');
const btnConsultar = document.getElementById('btnConsultar');
//clima
const lblClima = document.getElementById('lblClima');
const btnClim = document.getElementById('btnClim');
//dolar
const lblDolar = document.getElementById('lblDolar');
const btnDol = document.getElementById('btnDol');
//cep
const lblCEP = document.getElementById('lblCEP');
const btnCep = document.getElementById('btnCep');



//Bit Coin

const Bits = axios.create({
    baseURL:'https://www.mercadobitcoin.com.br/API/BTC/ticker/'
});

async function consultarBTC(){
    const response = await Bits.get();
    console.log(response.data.ticker.high);
    lblBTC.innerHTML = response.data.ticker.high;
}

btnConsultar.onClick = ()=>{
    consultarBTC();
}

//Clima

const Climas = axios.create({
    baseURL:'https://api.hgbrasil.com/weather'
});

async function consultarClima(){
    const response = await Climas.get();
    console.log(response.data.ticker.high);
    lblClima.innerHTML = response.data.ticker.high;
}

btnClim.onClick = ()=>{
    consultarClima();
}
