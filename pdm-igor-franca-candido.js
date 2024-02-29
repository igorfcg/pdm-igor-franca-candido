//criando o objeto do aluno com uma array que engloba todos

const aluno = [{
//armazenando os valores
    nome: 'Jorge',
    idade: 11,
    cursando: ["TIA", "PDM",],
    presença: [  "2022-01-10"],
    ra: "220"


},
//criando aluno1
 {
    nome: "Kayky de Brito da Silva", 
    idade: 15,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "22002200"
}]

//essa function chama 
//function criada para validar cada cadastro
function validaCadastro(aluno) {
    if(aluno.nome.length <= 10  ){
        console.log("Erro: Nome do aluno deve ter no mínimo 10 caracteres")


    }
    //cria condição para a idade
    if(aluno.idade <= 14){
    console.log(' deve ser maior de 14 anos')
    }
    //cria condição para o numero de caracteres
    if(aluno.cursando.length < 3 ){
console.log('no minimo 3 materias')

    }
    //cria condição para o numero de presenças
        if(aluno.presença.length < 3){

        console.log(" ausencia de presença")
    }
//cria condição para o numero de caracteres
    if(aluno.ra.length < 7){
console.log("deve ter no minino 7 caracteres")
}}

validaCadastro(aluno)


    //chama a função para validar