# README do Projeto

Este guia fornecerá informações sobre como criar e trabalhar com submódulos no Git.

## Passo 1: Criar um Submódulo

Para adicionar um submódulo ao seu repositório, siga os passos abaixo:

1. Abra o terminal e navegue até a raiz do seu repositório principal.
2. Use o comando `git submodule add` para adicionar um submódulo ao seu projeto. Substitua `<URL_DO_SUBMÓDULO>` pelo URL do repositório do submódulo e `<CAMINHO_LOCAL>` pelo caminho local onde você deseja que o submódulo seja clonado.

 Exemplo:

 ```bash
 git submodule add <URL_DO_SUBMÓDULO> <CAMINHO_LOCAL>
 ```
   
## Passo 2: Clonar o Projeto com Submódulos

Para clonar o projeto juntamente com os submódulos, siga os passos abaixo:

1. Clone o repositório principal usando o comando git clone.

```bash
git clone <URL_DO_REPOSITÓRIO_PRINCIPAL>
Após o clone, navegue até o diretório raiz do projeto.
```

2. Para inicializar e baixar os submódulos, execute o seguinte comando:

```bash
git submodule update --init --recursive
A opção --recursive garante que todos os submódulos aninhados também sejam inicializados e clonados.
```

## Passo 3: Links de Referência dos Submódulos
Aqui estão os links para os READMEs dos submódulos que fazem parte deste projeto:

[Submódulo - imhere]([https://www.google.com](https://github.com/dev-marianacavalcante/imhere#imhere))

Certifique-se de visitar esses links para obter informações detalhadas sobre cada submódulo.
