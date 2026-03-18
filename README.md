# Files Manager

Files Manager é um gerenciador de arquivos premium para aplicações web que precisam oferecer uma experiência profissional de upload, organização, visualização e administração de arquivos e pastas.

Ele foi pensado para quem quer entregar ao usuário final uma interface clara, rápida e agradável, sem improvisar com soluções limitadas. Em vez de apenas permitir enviar arquivos, o Files Manager transforma essa área em uma central completa de operação, com navegação por árvore, visualização em lista ou grade, preview, lixeira, ações contextuais e personalização para diferentes tipos de projeto.

Se o seu sistema precisa convencer pela usabilidade e pela sensação de produto pronto, o Files Manager foi feito para isso.

## Por que usar o Files Manager

- Valoriza a percepção do seu produto com uma interface de gerenciamento de arquivos mais completa e profissional.
- Reduz o tempo de implantação com uma distribuição pronta para instalar.
- Permite adaptar comportamento, visual e regras de uso ao seu cenário.
- Funciona bem em desktop e mobile.
- Atende desde bibliotecas de mídia até áreas administrativas, repositórios internos e painéis corporativos.

## Funcionalidades

### Navegação e organização

- Árvore de diretórios com carregamento progressivo.
- Navegação clara entre pastas e subpastas.
- Breadcrumb para contexto de localização.
- Redimensionamento das áreas de navegação e conteúdo.
- Alternância entre visualização em lista e grade.

### Operações do dia a dia

- Upload múltiplo.
- Criação de pastas.
- Renomeação de arquivos e diretórios.
- Movimentação por arrastar e soltar.
- Exclusão com confirmação.
- Download de arquivos.
- Atualização rápida do diretório atual.

### Visualização e produtividade

- Miniaturas para imagens e vídeos.
- Preview de imagem, vídeo, áudio e PDF.
- Modal de informações com dados do item selecionado.
- Menu contextual para ações rápidas.
- Barra de ações para operações frequentes.
- Seleção simples, múltipla, por intervalo e seleção total.

### Governança de conteúdo

- Lixeira com visualização dedicada.
- Restauração de itens removidos.
- Exclusão permanente com confirmação reforçada.
- Modo demonstração para apresentar a interface sem permitir ações críticas.

## Personalização

O Files Manager foi construído para se ajustar ao seu produto e ao seu público.

- Tema claro.
- Tema escuro.
- Tema automático conforme o dispositivo.
- Definição do modo inicial em lista ou grade.
- Exibição opcional da barra de ações.
- Exibição opcional do breadcrumb.
- Exibição opcional do painel de informações.
- Liberação ou bloqueio de upload, criação, renomeação, movimentação, exclusão e download.
- Definição dos tipos de arquivos permitidos.
- Definição de limite de tamanho para uploads.
- Uso em modo mais livre, restrito, somente leitura ou demonstração.
- Múltiplas instâncias independentes na mesma página.

## Configurações que podem ser ajustadas

- Pasta raiz apresentada ao usuário.
- Idioma da interface.
- Detecção automática de idioma.
- Tema padrão.
- Modo inicial de visualização.
- Quantidade de uploads simultâneos.
- Tipos de arquivo aceitos.
- Limites de upload.
- Operações disponíveis para cada contexto.
- Elementos da interface que devem ou não aparecer.

## Idiomas disponíveis

- Português do Brasil
- Inglês
- Espanhol
- Francês
- Alemão
- Chinês simplificado

## Cenários de uso

- Bibliotecas de mídia.
- Sistemas administrativos.
- Portais corporativos.
- CMS e intranets.
- Repositórios de documentos.
- Áreas de anexos.
- Galerias organizadas por pastas.
- Ambientes com acesso controlado.

## Instalação

O repositório de distribuição do produto é:

- https://github.com/jepasa/files-manager

O repositório https://github.com/jepasa/files-manager-dev é destinado ao desenvolvimento interno do produto.

Você pode instalar o Files Manager de três formas: por dist, por bundle ou por CDN via jsDelivr.

### 1. Instalação por dist

Essa é a forma ideal para quem quer uma distribuição organizada e modular.

Arquivos principais:

- dist/files-manager.min.js
- dist/files-manager.min.css

Exemplo de uso:

```html
<link rel="stylesheet" href="dist/files-manager.min.css" />

<div id="files-manager"></div>

<script type="module">
  import FilesManager from './dist/files-manager.min.js';

  new FilesManager({
    containerId: 'files-manager',
    rootPath: '/uploads',
    uploadEndpoint: 'api/upload.php',
    ajaxEndpoint: 'api/files.php',
    thumbnailEndpoint: 'api/thumbnail.php',
  });
</script>
```

Quando escolher esta opção:

- Quando você quer uma estrutura de distribuição modular.
- Quando prefere organizar melhor os arquivos publicados no projeto.
- Quando deseja maior clareza entre estilos, script principal e demais arquivos de distribuição.

### 2. Instalação por bundle

Essa é a forma ideal para quem quer a integração mais rápida possível.

Arquivo principal:

- bundle/files-manager.min.js

Exemplo de uso:

```html
<div id="files-manager"></div>

<script src="bundle/files-manager.min.js"></script>
<script>
  new FilesManager({
    containerId: 'files-manager',
    rootPath: '/uploads',
    uploadEndpoint: 'api/upload.php',
    ajaxEndpoint: 'api/files.php',
    thumbnailEndpoint: 'api/thumbnail.php',
  });
</script>
```

Quando escolher esta opção:

- Quando o objetivo é publicar rapidamente.
- Quando você quer reduzir o esforço de integração.
- Quando prefere um único arquivo principal para inicializar o produto.

### 3. Instalação por CDN com jsDelivr

Se você prefere carregar o Files Manager diretamente por CDN, pode usar jsDelivr apontando para o repositório de distribuição.

Exemplo:

```html
<div id="files-manager"></div>

<script src="https://cdn.jsdelivr.net/gh/jepasa/files-manager@v3.0.3/bundle/files-manager.bundle.min.js"></script>
<script>
  new FilesManager({
    containerId: 'files-manager',
    rootPath: '/uploads',
    uploadEndpoint: 'api/upload.php',
    ajaxEndpoint: 'api/files.php',
    thumbnailEndpoint: 'api/thumbnail.php',
  });
</script>
```

Essa opção é útil quando você quer acelerar a adoção, centralizar a entrega do arquivo distribuído e simplificar a publicação em diferentes ambientes.

## Como o usuário final opera

Depois de instalado, o uso é direto:

1. Escolha uma pasta na árvore de navegação.
2. Visualize os itens em lista ou grade.
3. Faça upload, crie pastas e reorganize arquivos.
4. Abra previews e consulte informações detalhadas.
5. Exclua, restaure, baixe e mantenha a estrutura organizada.

Tudo acontece em uma interface consistente, orientada à produtividade e pensada para uso real.

## Diferenciais

- Instalação simples.
- Experiência visual profissional.
- Distribuição pronta para uso por dist, bundle ou CDN.
- Personalização suficiente para diferentes regras de negócio.
- Operação confortável em desktop e mobile.
- Produto licenciado para uso comercial.

## Licenciamento

Files Manager é um produto comercial licenciado. Se o seu objetivo é entregar uma experiência de gerenciamento de arquivos mais robusta, mais elegante e mais confiável para o usuário final, esta distribuição foi pensada para entrar em produção com rapidez e boa apresentação.
