const form = document.getElementById ('form-atividade');
const NomeAtividade = document.getElementById('nome-atividade');
const NotaAtividade = document.getElementById('nota-atividade');
const CorpoTabela = document.querySelector('tbody');
const ImgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />';
const ImgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />';
const SpanAprovado = `<span class="resultado aprovado">Aprovado</span>`;
const SpanReprovado = `<span class="resultado reprovado">Reprovado</span>`;
const NotaMinima = parseFloat(prompt("Qual o valor da Média Mínima para Resultado aprovado?"));

let nomesAtividade = [];
let notasAtividade = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    AdicionaLinha();
    CalculaMedia ();
    AtualizaMedia();
})

    

    function AdicionaLinha(){

        if (nomesAtividade.includes(NomeAtividade.value)){

            alert(`A Atividade : ${NomeAtividade.value} ja está inclusa!`);

        } else {
            
            notasAtividade.push(parseFloat(NotaAtividade.value));
            nomesAtividade.push(NomeAtividade.value);
    
    
            let linha = '<tr>';
            linha += `<td> ${NomeAtividade.value}</td>`;
            linha += `<td> ${NotaAtividade.value}</td>`;
            linha += `<td> ${NotaAtividade.value >= NotaMinima ? ImgAprovado : ImgReprovado }</td>`;
            linha += '</tr>';
    
            linhas += linha;
    
            CorpoTabela.innerHTML = linhas;
    
            
        }
        
        NomeAtividade.value = '';
        NotaAtividade.value = '';

    }



    function  AtualizaMedia(){

        const MediaValorFinal = CalculaMedia ();

        document.getElementById('media-valor').innerHTML = MediaValorFinal.toFixed(2);
        document.getElementById('media-valor-resultado').innerHTML = MediaValorFinal >= NotaMinima ? SpanAprovado : SpanReprovado;
        
    }

    function CalculaMedia (){
        let SomaDasNotas = 0;

        for (let i =0; i < notasAtividade.length; i++ ){

            SomaDasNotas += notasAtividade[i];

            

        }

        return SomaDasNotas / notasAtividade.length;
        
        

    }
    