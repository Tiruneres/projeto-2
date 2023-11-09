const form = document.getElementById('form-atividade');
const NomeAtividade = document.getElementById('nome-atividade');
const NotaAtividade = document.getElementById('nota-atividade');
const CorpoTabela = document.querySelector('tbody');
let linhas = '';
const EmojiAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />';
const EmojiReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />';
const MediaValor = document.getElementById('media-valor');
const MediaValorResultado = document.getElementById('media-valor-resultado');
let notas = [];
let atividades = [];
const SpanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const SpanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const NotaMinima = parseFloat(prompt ('Qual a nota Mínima para resultado Aprovado?'));

form.addEventListener('submit', function (e){
    e.preventDefault();
    
    AdicionaLinha ();
    CalculaMedia ();
    AtualizaMedia ();
})
    
console.log (NotaMinima);

function AdicionaLinha (){

    if (atividades.includes(NomeAtividade.value)){

        alert ('esta atividade ja está inclusa!');

    } else {
        
        atividades.push(NomeAtividade.value);
        notas.push(parseFloat(NotaAtividade.value));
    
        
    
        let linha = '<tr>';
        linha += `<td>${NomeAtividade.value}</td>`;
        linha += `<td>${NotaAtividade.value}</td>`;
        linha += `<td>${NotaAtividade.value >= NotaMinima ? EmojiAprovado :  EmojiReprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    
        CorpoTabela.innerHTML = linhas;

    }

    NomeAtividade.value = '';
    NotaAtividade.value = '';

}


function AtualizaMedia (){
    const mediaFinal = CalculaMedia ();
    MediaValor.innerHTML = mediaFinal.toFixed(2);
    MediaValorResultado.innerHTML = mediaFinal >= NotaMinima ? SpanAprovado : SpanReprovado ;

}

function CalculaMedia (){

    let SomaDasNotas = 0;
    
    for (let i = 0; i < notas.length; i++ ){
        
        SomaDasNotas += notas[i];
        
    }
    
    return  SomaDasNotas / notas.length;
    
}