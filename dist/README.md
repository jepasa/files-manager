# Files Manager

> Gerenciador de arquivos moderno e responsivo para aplicações web

**Versão**: 3.0.1  
**Licença**: Proprietária (Todos os direitos reservados)

---

## 📦 Instalação

### Opção 1: Instalação Manual

1. Copie o conteúdo de `public-mirror/dist/` para o diretório público do seu projeto
2. Inclua os arquivos CSS e JS no seu HTML:

```html
<!-- CSS -->
<link rel="stylesheet" href="path/to/dist/css/files-manager.min.css" />

<!-- JavaScript (ES Module) -->
<script type="module">
  import FilesManager from './path/to/dist/files-manager.min.js';

  const fm = new FilesManager({
    containerId: 'files-manager',
    rootPath: '/uploads',
    uploadEndpoint: 'api/upload.php',
    ajaxEndpoint: 'api/files.php',
    thumbnailEndpoint: 'api/thumbnail.php',
  });
</script>
```

### Opção 2: Via CDN (jsDelivr)

Após criar um release no GitHub, os arquivos ficam automaticamente disponíveis via jsDelivr:

```html
<!-- CSS -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/jepasa/files-manager-dev@3.0.1/public-mirror/dist/css/files-manager.min.css"
/>

<!-- JavaScript (ES Module) -->
<script type="module">
  import FilesManager from 'https://cdn.jsdelivr.net/gh/jepasa/files-manager-dev@3.0.1/public-mirror/dist/files-manager.min.js';

  const fm = new FilesManager({
    containerId: 'files-manager',
    rootPath: '/uploads',
    uploadEndpoint: 'api/upload.php',
    ajaxEndpoint: 'api/files.php',
    thumbnailEndpoint: 'api/thumbnail.php',
  });
</script>
```

**Versões disponíveis:**

- `@3.0.1` - Versão específica (recomendado para produção)
- `@latest` - Sempre a última versão (não recomendado, pode quebrar)
- `@2` - Versão principal 2.x (recebe patches automáticos)

**Nota:** As URLs do CDN só funcionarão após criar um release (tag) no GitHub. Para testes locais, use a instalação manual.

### Bundle Monolítico com Callback Global

O bundle monolítico em `public-mirror/bundle/files-manager.bundle.min.js` injeta o CSS compilado e embute os SVGs de interface no próprio arquivo. Para o frontend, ele não exige `dist/css` nem `dist/images`.

```html
<script type="module">
  import FilesManager from 'https://cdn.jsdelivr.net/gh/jepasa/files-manager-dev@3.0.1/public-mirror/bundle/files-manager.bundle.min.js';

  const fm = new FilesManager({
    containerId: 'files-manager',
    rootPath: '/uploads',
    uploadEndpoint: 'api/upload.php',
    ajaxEndpoint: 'api/files.php',
    thumbnailEndpoint: 'api/thumbnail.php',
  });
</script>
```

Os endpoints PHP continuam obrigatórios para listagem, upload, miniaturas e operações de arquivo.

O bundle pode funcionar sozinho com defaults acoplados e também aceitar configuracao global antes da primeira instancia:

```html
<script>
  window.FilesManagerRuntimeConfigCallback = ({ defaults }) => ({
    ...defaults,
    language: document.documentElement.lang || 'es-ES',
    langDir: 'https://cdn.seu-dominio.com/files-manager/lang',
    theme: 'dark',
  });

  window.FilesManagerLangLocalesCallback = async (locale) => {
    const response = await fetch(`https://cdn.seu-dominio.com/files-manager/lang/${locale}.json`);
    if (!response.ok) {
      throw new Error(`Locale indisponivel: ${locale}`);
    }

    return response.json();
  };
</script>
```

Prioridade de configuracao no runtime:

- defaults internos do bundle
- `window.FilesManagerRuntimeConfig`
- `window.FilesManagerRuntimeConfigCallback(...)`
- opcoes explicitas da instancia em `new FilesManager(...)`

Se `language` apontar para um locale nao embutido, o runtime tenta carregá-lo automaticamente usando `FilesManagerLangLocalesCallback` e, se ele nao resolver, usa `langDir` para localizar `${locale}.js` ou `${locale}.dic.js`.

---

## 🚀 Uso Rápido

### HTML

```html
<div id="files-manager"></div>
```

### JavaScript

```javascript
const fm = new FilesManager({
  containerId: 'files-manager',
  rootPath: '/uploads',
  uploadEndpoint: 'api/upload.php',
  ajaxEndpoint: 'api/files.php',
  thumbnailEndpoint: 'api/thumbnail.php',

  // Configurações opcionais
  viewMode: 'grid', // 'list' ou 'grid'
  theme: 'light', // 'light' ou 'dark'
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedExtensions: ['jpg', 'png', 'pdf'],

  // Callbacks
  onFileSelect: (file) => {
    console.log('Arquivo selecionado:', file);
  },
  onUploadComplete: (files) => {
    console.log('Upload concluído:', files);
  },
});
```

---

## 🔧 Configuração do Backend (PHP)

### 1. Copiar Arquivos PHP

Copie os diretórios `api/`, `security/`, `shared/backend/` e `features/` para o seu servidor:

```
seu-projeto/
├── api/
│   ├── files.php
│   ├── upload.php
│   ├── thumbnail.php
│   └── telemetry.php
├── security/
│   ├── Auth.php
│   └── Validator.php
├── shared/
│   └── backend/
│       └── Traits/
└── features/
  ├── files/backend/
  ├── media/backend/
  └── upload/backend/
```

### 2. Configurar Permissões

```bash
# Linux/Unix
chmod 755 api/
chmod 644 api/*.php
chmod 755 uploads/
chmod 644 uploads/*
```

### 3. Configurar config.php

Edite o `config.php` na raiz da distribuicao com suas configuracoes:

```php
<?php
define('UPLOADS_DIR', __DIR__ . '/uploads');
define('CACHE_DIR', __DIR__ . '/cache');
define('MAX_FILE_SIZE', 10 * 1024 * 1024); // 10MB

// Lista de extensões permitidas
$allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx'];

// Lista de tipos MIME permitidos
$allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf'
];

// Proteção de diretórios (index.html)
$indexHtmlContent = '<!DOCTYPE html><html><head><title>403 Forbidden | File-Manager</title></head><body><p>Directory access is forbidden.</p></body></html>';
$newFolderAddIndexHtml = true;        // cria index.html ao criar nova pasta
$autoAddMissingIndexHtml = true;      // cria index.html em pastas sem o arquivo
$hideIndexHtmlFiles = true;           // oculta index.html na listagem
$indexHtmlReadOnly = true;            // bloqueia rename/move/delete/upload
$indexHtmlDeletable = false;          // permite remover index.html
```

### 4. Testar Endpoints

```bash
# Listar arquivos
curl http://localhost/api/files.php?action=list&path=/

# Upload de arquivo (use um cliente HTTP como Postman)
POST http://localhost/api/upload.php
Content-Type: multipart/form-data
```

---

## 📋 Requisitos

### Servidor

- **PHP**: 7.4 ou superior
- **Extensões PHP**:
  - `json`
  - `fileinfo`
  - `gd` ou `imagick` (para thumbnails de imagens)
  - `mbstring` (recomendado)
- **Apache** ou **Nginx**
- **Permissões de escrita** nos diretórios `uploads/` e `cache/`

### Cliente (Navegador)

- **Navegadores modernos**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **JavaScript**: ES6+ habilitado
- **Tamanho mínimo de tela**: 320px (mobile)

---

## 🎨 Personalização

### Temas

```javascript
// Tema escuro
fm.setTheme('dark');

// Tema claro
fm.setTheme('light');
```

### Modo de Visualização

```javascript
// Grade
fm.setViewMode('grid');

// Lista
fm.setViewMode('list');
```

### Estilos Customizados

Sobrescreva as variáveis CSS:

```css
:root {
  --fm-primary-color: #2563eb;
  --fm-background: #ffffff;
  --fm-text-color: #1f2937;
  --fm-border-color: #e5e7eb;
}
```

---

## 📡 API Pública

### Métodos

```javascript
// Selecionar diretório
fm.selectDirectory('/path/to/dir');

// Atualizar visualização
fm.refresh();

// Obter arquivos selecionados
const selected = fm.getSelectedFiles();

// Limpar seleção
fm.clearSelection();

// Alterar tema
fm.setTheme('dark');

// Alterar modo de visualização
fm.setViewMode('grid');

// Destruir instância
fm.destroy();
```

### Eventos

```javascript
// Arquivo selecionado
fm.on('fileSelect', (file) => {
  console.log('Arquivo:', file);
});

// Upload iniciado
fm.on('uploadStart', (files) => {
  console.log('Iniciando upload de', files.length, 'arquivos');
});

// Upload concluído
fm.on('uploadComplete', (result) => {
  console.log('Upload concluído:', result);
});

// Erro
fm.on('error', (error) => {
  console.error('Erro:', error);
});
```

---

## 🔒 Segurança

### Configurações Recomendadas

1. **Validação de tipos**: Configure `allowedExtensions` e `allowedMimeTypes`
2. **Limite de tamanho**: Configure `maxFileSize` apropriadamente
3. **Path traversal**: O plugin já valida caminhos automaticamente
4. **CSRF**: Configure `csrfToken` em ambientes de produção
5. **Permissões**: Restrinja permissões de upload conforme necessário

### Exemplo com CSRF

```javascript
const fm = new FilesManager({
  containerId: 'files-manager',
  csrfToken: document.querySelector('meta[name="csrf-token"]').content,
  // ... outras configurações
});
```

---

## 🐛 Solução de Problemas

### Upload não funciona

- Verifique permissões do diretório `uploads/`
- Verifique `upload_max_filesize` e `post_max_size` no `php.ini`
- Verifique logs do servidor web

### Thumbnails não aparecem

- Verifique se GD ou Imagick está instalado
- Verifique permissões do diretório `cache/thumbnails/`
- Verifique se a extensão `gd` está habilitada no PHP

### Erro 403 ao acessar diretórios

- Esperado! Os diretórios têm `index.html` de proteção
- Arquivos específicos continuam acessíveis normalmente

---

## 📚 Documentação Completa

Para documentação técnica detalhada, visite:

- [Documentação Técnica](../doc/)
- [Guia de Configuração](../doc/configuration.md)
- [Referência da API](../doc/api.md)
- [Exemplos](../doc/examples.md)

---

## 📄 Licença

Este software é proprietário. Todos os direitos reservados.

Para informações sobre licenciamento comercial, entre em contato.

---

## 💬 Suporte

- **Repositório**: https://github.com/jepasa/files-manager
- **Issues**: https://github.com/jepasa/files-manager/issues
- **Email**: suporte@example.com

---

**Files Manager** - © 2026 Todos os direitos reservados
