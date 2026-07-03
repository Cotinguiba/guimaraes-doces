---
name: "Guimares Doces"
vibe: "Playful, colorful, magical, sweet"
mode: "Light mode only (for now, to maintain the bright candy store feel)"
---

# Design Spec: Guimares Doces

## Rationale
O design da "Guimares Doces" adota a **Opção A (Mundo Mágico)**, utilizando uma paleta de cores personalizada: Marrom, Rosa, Bege e Branco. 
O bege serve como um fundo quente e acolhedor (lembrando baunilha/massa), o marrom atua como contraste principal para tipografia e estruturação (trazendo a ideia de chocolate), enquanto o rosa é usado pontualmente para ações e destaques, injetando energia, diversão e a sensação de "doce" no visual.
A tipografia combina uma fonte display divertida (`DynaPuff`) para os títulos com uma sans-serif amigável (`Outfit`) para o corpo de texto. O layout incorpora muito negative space, animações flutuantes (via framer-motion) e formas levemente arredondadas para transmitir o aspecto lúdico.

## Tokens

### Colors
- `color-brown`: `#5D4037` (Chocolate - Textos, rodapé, contrastes fortes)
- `color-brown-dark`: `#3E2723` (Títulos pesados)
- `color-pink`: `#FF4081` (Destaque principal, botões primários, ícones flutuantes)
- `color-pink-light`: `#FF80AB` (Hover states, detalhes secundários)
- `color-beige`: `#F5F5DC` (Background da aplicação, cor quente e acolhedora)
- `color-beige-dark`: `#E6E2C3` (Fundos de seções alternadas)
- `color-white`: `#FFFFFF` (Cards, destaques internos, botões fantasma)

### Typography
- `font-display`: `'DynaPuff', cursive` (H1, H2, H3 - Lúdica, volumosa, remete a balas/chicletes)
- `font-body`: `'Outfit', sans-serif` (Parágrafos, botões, UI - Limpa, legível, moderna)

### Shapes & Radii
- `radius-sm`: `8px`
- `radius-md`: `16px` (Cards padrão)
- `radius-lg`: `24px`
- `radius-pill`: `9999px` (Botões de ação primária)

### Spacing
- Layout fluido focado no centro, utilizando flexbox para garantir `gap-4` a `gap-8` na maioria dos espaçamentos entre itens, e grandes paddings (`py-16`, `py-24`) separando as seções para a "Opção A" respirar adequadamente.
