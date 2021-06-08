const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos',     declinacao: -59 },
    { nome: 'Gama Normídeos',         declinacao:         -50 },
    { nome: 'Pi Pupídeos',                    declinacao:       -45 },
    { nome: 'Líridas',                     declinacao:   34  },
    { nome: 'Eta Aquáridas',               declinacao:         -1  },
    { nome: 'Eta Líridas',           declinacao:       44  },
    { nome: 'Bootídeos de Junho',             declinacao: 48  },
    { nome: 'Alfa Capricornídeos',    declinacao:          -10 },
    { nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
    { nome: 'Piscis Austrinídeos',             declinacao:   -30 },
    { nome: 'Perseidas',              declinacao:     58  },
];

const chuvasHemisferioNorte = chuvaDeMeteoros.filter( (meteoros) =>
    meteoros.declinacao >=0
);

const chuvasHemisferioSul = chuvaDeMeteoros.filter( (meteoros) =>
    meteoros.declinacao < 0
);

const chuvas = (chuvas) => {
    console.log(chuvas.nome);
};

console.log('\nChuvas do hemisferio Sul:');
chuvasHemisferioSul.forEach(chuvas);
console.log('\nChuvas do hemisferio Norte:');
chuvasHemisferioNorte.forEach(chuvas);















// //Lista de Pedidos
// let pedidos = [
//     {'id': 420, 'nome':'Dener', 'alimento': 'Sandubão de Bacon', 'bebida': 'Suco Limão' },
//     {'id': 152, 'nome':'Naiady', 'alimento': 'Sandubão Vegano', 'bebida': 'Suco de Laranja' },
//     {'id': 29, 'nome':'Marcio', 'alimento': 'Coxinha', 'bebida': 'Suco de Uva' },
//     {'id': 33, 'nome':'Isabel', 'alimento': 'Sandubão de Picanha', 'bebida': 'Refrigerante' },
//     {'id': 55, 'nome':'José', 'alimento': 'Pizza', 'bebida': 'Refrigerante' }
//     ];
    
//     //Iterador forEach
//     pedidos.forEach( ( pedido, index ) => {
//     let { nome, alimento, bebida } = pedido;
//     console.log(`${index} - O Cliente: ${nome} fez o pedido do alimento: ${alimento} e a bebida: ${bebida}.`);
//     })