const chuvas_meteoros = [
    { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
    { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
    { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
    { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
    { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
    { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
    { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
    { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
    { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
];

const titulo = "=== Chuvas de meteoros - hemisfério sul ===";
console.log(titulo.toUpperCase() + "\n");

for (const chuvas of chuvas_meteoros) {
    
    let nomeChuvas = "Nome:";
    let nomeChuvasMeteoros = chuvas.nome;

    let picoChuvas = "Pico:";
    let picoChuvasMeteoros = chuvas.pico;
    
    let picoChuvaDiaMes = picoChuvasMeteoros.split (" ");
    let picoChuvaMes = picoChuvaDiaMes[0];
    let picoChuvaDia = picoChuvaDiaMes[1];

    switch (picoChuvaMes) {
        case "Fev":
            picoChuvaMes = "Fevereiro"
            break;
        case "Mar":
            picoChuvaMes = "Março"
            break;
        case "Abr":
            picoChuvaMes = "Abril"
            break;
        case "Mai":
            picoChuvaMes = "Maio"
            break;
        case "Jul":
            picoChuvaMes = "Julho"
            break;
        case "Jun":
            picoChuvaMes = "Junho"
            break;
        case "Ago":
            picoChuvaMes = "Agosto"
            break;
        case "Out":     
            picoChuvaMes = "Outubro";     
            break;
        case "Nov":     
            picoChuvaMes = "Novembro";     
            break;
        case "Dez":     
            picoChuvaMes = "Dezembro";     
            break;  
        default:
            picoChuvaMes = "Mês Invalido"
            break;
    };


    let picoChuvasMeteorosFormat = `${picoChuvaDia} de ${picoChuvaMes}`;



    let velocidadeChuvas = "Velocidade:";
    let velocidadeChuvasMeteoros = chuvas.velocidade;
    let velocidadeChuvasMeteorosFormat = velocidadeChuvasMeteoros.replace('km/s', 'quilômetros por segundo');
    

    console.log(`${nomeChuvas.padEnd(30,'.')}${nomeChuvasMeteoros}`)
    console.log(`${picoChuvas.padEnd(30,'.')}${picoChuvasMeteorosFormat}`);
    console.log(`${velocidadeChuvas.padEnd(30,'.')}${velocidadeChuvasMeteorosFormat}`);
    console.log("\n");

}