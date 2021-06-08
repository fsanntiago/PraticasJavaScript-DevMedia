const dataAtual = new Date();

const colecao_signos = [
    {Nome: "Aquário", DataInicio: "01-20", DataFim: "02-18"},
    {Nome: "Peixes", DataInicio: "02-19", DataFim: "03-20"},
    {Nome: "Áries", DataInicio: "03-21", DataFim: "04-19"},
    {Nome: "Touro", DataInicio: "04-20", DataFim: "05-20"},
    {Nome: "Gêmeos", DataInicio: "05-21", DataFim: "06-21"},
    {Nome: "Câncer", DataInicio: "06-22", DataFim: "07-22"},
    {Nome: "Leão", DataInicio: "07-23", DataFim: "08-22"},
    {Nome: "Virgem", DataInicio: "08-23", DataFim: "09-22"},
    {Nome: "Libra", DataInicio: "09-23", DataFim: "10-22"},
    {Nome: "Escorpião", DataInicio: "10-23", DataFim: "11-21"},
    {Nome: "Sagitário", DataInicio: "11-22", DataFim: "12-21"},
    {Nome: "Capricórnio", DataInicio: "11-22", DataFim: "01-19"}
];

//Retorna signo
const retornaSigno = (signos,dataDia) => {
    for(let dados of signos) {
        signoNome = dados.Nome;
        dataInicio = dados.DataInicio;
        dataFim = dados.DataFim;
        
        if(dataDia >= dataInicio && dataDia <= dataFim){
            signo = signoNome;
            return signo;
        }
    }
    
    
}

//Data transform in String
const data = () => {
    
    const options = {
        day :'2-digit',
        month : '2-digit'
    }
    
    let dataDia = dataAtual.toLocaleDateString('en-US', options);
    dataDia = dataDia.replace("/","-");
    
    return dataDia;
};


const signoDeHoje = retornaSigno(colecao_signos, data())
console.log(`O signo de Hoje é: ${signoDeHoje}`);

