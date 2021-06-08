let cursos_idiomas =[
    {nome:"Inglês", preco:2500, carga_horaria:160},
    {nome:"Espanhol", preco:1500, carga_horaria:110},
    {nome:"Francês", preco:3600, carga_horaria:200},
    {nome:"Chinês", preco:5500, carga_horaria:400},
    {nome:"Alemão", preco:3800, carga_horaria:230}
] 
for (const curso of cursos_idiomas) {
    nome = curso.nome;
    preco = curso.preco;
    carga_horaria= curso.carga_horaria;

    
    console.log("Nome do Curso: " + nome);
    console.log("Carga horária do curso: " + carga_horaria + " horas" );
    console.log("Preço do curso: " + preco); 
    

    if(preco/carga_horaria >= 15){
        console.log("Hora/aula superior ou igual a R$15,00\n");
    }else{
        console.log("Hora/aula inferior a R$15,00\n");
    }

}
