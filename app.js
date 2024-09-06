// Função pesquisar():
//   Realiza uma pesquisa nos dados e atualiza a seção de resultados na página.

function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value
  // **Para fins de depuração:** Exibe o elemento section no console do navegador
  console.log(section);

  // **Para fins de depuração:** Exibe a informação no console do navegador
  console.log(campoPesquisa);

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
 
  if (campoPesquisa == "") {
    // alert("Informe o que desaja pesquisar") 
    section.innerHTML = "<p>Não foi encontrados resultados para pesquisa!</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // inicializa a string vazia para armazenar os resultados 
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  // Itera sobre cada item (dado) no array de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // console.log(dado.titulo.includes(campoPesquisa))
    // verifica dados dentro da condição de pesquisa
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa)){
      // Constrói o HTML para cada resultado, formatando o título, descrição e link
      resultados += `
   <div class="item-resultado">
     <h2>
       <a href="#" target="_blank">${dado.titulo}</a>
     </h2>
     <p class="descricao-meta">${dado.descricao}</p>
     <a href="${dado.link}" target="_blank">Mais informações</a>
   </div>
 `;
    }

  }
  
  if (!resultados){
    resultados = "<p>Nada foi encontrado.</p>"
  }
  // Adiciona os resultados construídos ao conteúdo HTML da seção
  section.innerHTML += resultados;
}