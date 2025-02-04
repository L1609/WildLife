
     function salvarInformacoes(event) {
    event.preventDefault();

    // Obter os valores do formulário
    
    var docIdentificacao = document.getElementById("docIdentificacao").value;
    var datetimeLocal = document.getElementById("datetimeLocal").value;
    var responsavelEntrega = document.getElementById("responsavelEntrega").value;
    var tipoEntrega = document.getElementById("tipoEntrega").value;
    var nome = document.getElementById("nome").value;
    var cientifico = document.getElementById("cientifico").value;
    var sexo = document.getElementById("sexo").value;
    var encontrado = document.getElementById("encontrado").value;
    var cativeiro = document.getElementById("cativeiro").value;
    var tempoCativeiro = document.getElementById("tempoCativeiro").value;
    var estadoSaude = document.getElementById("estadoSaude").value;
    var numeroRegistro = document.getElementById("numeroRegistro").value;
    var observacoes = document.getElementById("observacoes").value;
    var entreguePor = document.getElementById("entreguePor").value;
    var recebidoPor = document.getElementById("recebidoPor").value;
        

    // Salvar as informações no localStorage
    
    localStorage.setItem("docIdentificacao", docIdentificacao);
    localStorage.setItem("datetimeLocal", datetimeLocal);
    localStorage.setItem("responsavelEntrega", responsavelEntrega);
    localStorage.setItem("tipoEntrega", tipoEntrega);
    localStorage.setItem("nome", nome);
    localStorage.setItem("cientifico", cientifico);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("encontrado", encontrado);
    localStorage.setItem("cativeiro", cativeiro);
    localStorage.setItem("tempoCativeiro", tempoCativeiro);
    localStorage.setItem("estadoSaude", estadoSaude);
    localStorage.setItem("numeroRegistro", numeroRegistro);
    localStorage.setItem("observacoes", observacoes);
    localStorage.setItem("entreguePor", entreguePor);
    localStorage.setItem("recebidoPor", recebidoPor);


    // Redirecionar para a próxima página
    window.location.href = "cadastrados.html";
        }

        function selectImage() {
    const inputFile = document.getElementById("inputFile");
    const selectedImage = document.getElementById("selectedImage");

    inputFile.onchange = function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                selectedImage.src = e.target.result;
                selectedImage.style.display = "block";

                // Salvar a imagem no localStorage
                localStorage.setItem("animalPhoto", e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    inputFile.click();
}

//Conecatando front com back

const formulario = document.querySelector(".form");
const botao = document.querySelector(".button");
const documentoIdentificacao = document.querySelector(".documentoIdentificacao");
const dataEHora = document.querySelector(".dataEHora");
const responsavelPelaEntrega = document.querySelector(".responsavelPelaEntrega");
const tipoDeEntrega = document.querySelector(".tipoDeEntrega");
const nomeAnimal = document.querySelector(".nomeAnimal");
const nomeCientifico = document.querySelector(".nomeCientifico");
const sexoAnimal = document.querySelector(".sexoAnimal");
const ondeFoiEncontrado = document.querySelector(".ondeFoiEncontrado");
const localDeCativeiro = document.querySelector(".localDeCativeiro");
const tempoDeCativeiro = document.querySelector(".tempoDeCativeiro");
const estadoDeSaude = document.querySelector(".estadoDeSaude");
const numeroDeRegistro = document.querySelector(".numeroDeRegistro");
const observacaoSobreOAnimal = document.querySelector(".ObservacaoSobreOAnimal");
const entregue = document.querySelector(".entregue");
const recebido = document.querySelector(".recebido");

function cadastrar (){
    fetch("http//localhost:8080/animais",
    {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            documentoIdentificacao: documentoIdentificacao.value,
            dataEHora: dataEHora.value,
            responsavelPelaEntrega: responsavelPelaEntrega.value,
            tipoDeEntrega: tipoDeEntrega.value,
            nomeAnimal: nomeAnimal.value,
            nomeCientifico: nomeCientifico.value,
            sexoAnimal: sexoAnimal.value,
            ondeFoiEncontradoo: ondeFoiEncontrado.value,
            localDeCativeiro: localDeCativeiro.value,
            tempoDeCativeiro: tempoDeCativeiro.value,
            estadoDeSaude: estadoDeSaude.value,
            numeroDeRegistro: numeroDeRegistro.value,
            ObservacaoSobreOAnimal: ObservacaoSobreOAnimal.value,
            entregue: entregue.value,
            recebido: recebido.value

        })
    
    })
    .then (function (res) {console.log(res) })
    .catch (function (res) {console.log(res) })
}

function limpar(){
    documentoIdentificacao.value ="",
    DataEHora.value ="",
    responsavelPelaEntrega.value ="",
    tipoDeEntrega.value ="",
    nomeAnimal.value ="",
    nomeCientifico.value ="",
    sexoAnimal.value ="",
    ondeFoiEncontrado.value ="",
    localDeCativeiro.value ="",
    tempoDeCativeiro.value ="",
    estadoDeSaude.value ="",
    numeroDeRegistro.value ="",
    observacaoSobreOAnimal.value ="",
    entregue.value ="",
    recebido.value =""


}

animais.addEventListener("Submit"), function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
}