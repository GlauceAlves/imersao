// Função pesquisar():
//   Realiza uma pesquisa nos dados e atualiza a seção de resultados na página.

function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // **Para fins de depuração:** Exibe o elemento section no console do navegador
    console.log(section);
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item (dado) no array de dados
    for (let dado of dados) {
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
  
    // Adiciona os resultados construídos ao conteúdo HTML da seção
    section.innerHTML += resultados;
  }