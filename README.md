# trabalhoIA

  Trabalho de Inteligência artificial 
 
  Trabalho da disciplina de Inteligência Artificial da Universidade Federal de Lavras (UFLA), lecionada pelo professor Ahmed Ali Abdalla Esmin e produzido pelo aluno Guilherme Henrique de Melo. Design produzido por @mfparussulo .
  
 ## Automatic Manhattan
  
  O trabalha tem como objetivo recriar o jogo Manhattan de forma automatizada. Aplicando 1 heurística (Criada pelo aluno) e uma resolução de força bruta. Também é necessário a criação de uma interface gráfica.
  
 ## Technologies
  
  Foi implementa todo o algoritmo em JavaScript com a biblioteca React(não é a forma essencial para o tratamento desse trabalho, porém o objetivo foi também expandir o conhecimento em REACT). As duas formas utilizadas para a resolução foram busca em largura e uma heurística baseada na busca em largura porém ela sempre segue o caminho com menor peso(Tabuleiro mais próximo do resultado ideal) no tabuleiro.
  
 ## To compile
 
  Para compilar o conteúdo é necessário baixar o repositório e executar o comando NPM INSTALL para fazer o download de todas as dependências do projeto. Após baixado as dependência usando o comando NPM START para iniciar. Será aberto em seu navegador na URL "http://localhost:3000/". 
  
 ## How it works
  
  A página possui um tabuleiro onde cada posição pode ser preenchida com um número de 1 até 8, clicando repetidamente para aumentar o número em determinada posição, e quando somente restar 1 posição deve ser preenchida com mais 1 clique, dessa forma colocando o valor "vazio" do jogo Manhattan. Neste momento existem três possíveis caminhos, selecionar o botão reset, para reiniciar o tabuleiro ou escolher uma das duas resoluções para tentar resolver o tabuleiro. Como foram implementadas uma resolução em força bruta e outra sendo heurística é possível que não seja encontrada uma resolução para o tabuleiro, dessa forma o programa retornará um pop up avisando. No caso que o tabuleiro foi resolvido, um aparecerá um botão "Resolução" onde é possível observar cada passo que o algoritmo levou para terminar. Nessa nova página existe um tabuleiro com a resolução, um botão de tentar novamente para voltar à página inicial e 2 botões de "->" e "<-" onde pode caminhar entre os passos feitos pelo algoritmo. A posição verde no board significa a posição futura da posição vazia e a posição vermelha representa a posição passada da posição vazia.
