# 📱 iPhone 17 Pro — React + Tailwind

<h1 align="center">📱 iPhone 17 Pro — React + Tailwind</h1>
<p align="center">Um projeto moderno inspirado no site oficial da Apple</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TailwindCSS-0F172A?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8" />
  <img src="https://img.shields.io/badge/Vite-563D7C?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/LeandroSimplicio/Iphone-17?style=social" />
</p>

---

## **🚀 Tecnologias usadas**

- **React.js**  
- **Vite**  
- **TailwindCSS**  
- **JavaScript**  
- **React Hooks (useState, useEffect)**  

---

## **📸 Demonstração**

*(Adicione prints ou GIFs aqui)*  
Sugestão:  
- `<img src="/public/screenshot-home.png"> `
- `<img src="/public/colors-preview.gif"> `
---

## **🎯 Funcionalidades**

- Layout inspirado no estilo Apple  
- Troca de imagem dinâmica conforme a cor selecionada  
- Specs renderizados com `.map()`  
- Animações suaves  
- Responsivo  
- Estilização com TailwindCSS  

---

## **📂 Estrutura do Projeto**

```
Iphone-17/
│
├── public/
│   └── imagens do projeto
│
├── src/
│   ├── components/
│   │   ├── Color.jsx
│   │   ├── Footer.jsx
│   │   └── Hero.jsx
│   │   └── Highlights.jsx
│   │   └── Intro.jsx
│   │   └── NavBar.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── tailwind.config.js
```

---

## **⚙ Como executar o projeto**

### **1. Clone o repositório**
```bash
git clone https://github.com/LeandroSimplicio/Iphone-17
```

### **2. Entre no diretório**
```bash
cd Iphone-17
```

### **3. Instale as dependências**
```bash
npm install
```

### **4. Inicie o servidor**
```bash
npm run dev
```

O projeto estará disponível em:

```
http://localhost:5173
```

---

## **🧩 Como funciona o seletor de cores**

```jsx
const colors = [
  { id: "blue", hex: "#1e40af" },
  { id: "black", hex: "#000000" },
  { id: "white", hex: "#ffffff" }
];
```

Renderização dinâmica da imagem:

```jsx
<img src={`/images/iphone-${selectedColor}.png`} />
```

---

## **📝 Melhorias futuras**

- Animações de scroll  
- Galeria de imagens  
- Comparação entre modelos  
- Light/Dark Mode  
- API fictícia para preços  

---

## **📄 Licença**

Projeto sob licença **MIT**.  
Sinta-se à vontade para usar e modificar.  

---
