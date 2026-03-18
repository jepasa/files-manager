# Button Icons

Ícones SVG do [Bootstrap Icons](https://icons.getbootstrap.com/) v1.11.3 para uso em botões e interface do Files Manager.

## Mapeamento de Ícones

| Emoji | Ícone Bootstrap | Arquivo | Uso |
|-------|----------------|---------|-----|
| 📤 | upload | `upload.svg` | Botão de upload de arquivos |
| 📁 | folder | `folder.svg` | Pasta fechada |
| 📂 | folder2-open | `folder-open.svg` | Pasta aberta |
| 📁+ | folder-plus | `folder-plus.svg` | Criar nova pasta |
| ✏️ | pencil | `pencil.svg` | Renomear arquivo/pasta |
| 💾 | download | `download.svg` | Download de arquivo |
| 👁️ | eye | `eye.svg` | Visualizar/Preview |
| 🗑️ | trash | `trash.svg` | Excluir arquivo |
| ↩️ | arrow-counterclockwise | `arrow-counterclockwise.svg` | Restaurar da lixeira |
| ❌ | x-lg | `x-lg.svg` | Cancelar/Fechar |
| ✅ | check-lg | `check-lg.svg` | Confirmar ação |
| ⏳ | hourglass-split | `hourglass-split.svg` | Loading/Processando |
| 🔄 | arrow-clockwise | `arrow-clockwise.svg` | Atualizar/Refresh |
| ⬆️ | arrow-up | `arrow-up.svg` | Subir um nível |
| ⊞ | grid-3x3-gap | `grid-3x3-gap.svg` | Visualização em grade |
| ☰ | list-ul | `list-ul.svg` | Visualização em lista |
| 🏠 | house | `house.svg` | Home/Raiz |
| ⚠️ | exclamation-triangle | `exclamation-triangle.svg` | Aviso/Warning |

## Licença

Bootstrap Icons: MIT License  
Copyright (c) 2019-2024 The Bootstrap Authors

## Como usar

```javascript
// Substituir emoji por SVG inline
<span class="um-icon">
    <svg>...</svg>
</span>

// Ou via background-image no CSS
.um-icon-upload {
    background-image: url('images/button-icons/upload.svg');
}
```

## Atualização

Para atualizar os ícones:
```bash
cd src/images/button-icons
curl -s https://raw.githubusercontent.com/twbs/icons/main/icons/ICON_NAME.svg -o ICON_NAME.svg
```
