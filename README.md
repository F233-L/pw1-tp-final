# TP FINAL - Programación Web 1

Este proyecto fue desarrollado con ❤️ por F233-L en Linux (Bazzite), y ahora te toca a vos correrlo en tu máquina con Windows sin destruir nada en el proceso.  
Suerte, soldado.

---

## 🧾 Requisitos

Asegurate de tener lo siguiente instalado en tu compu:

- [Node.js (versión 18 o superior)](https://nodejs.org/)
- Un editor de código, como [Visual Studio Code](https://code.visualstudio.com/)
- Una terminal (sí, la de Windows sirve, pero recomiendo PowerShell o Git Bash para menos drama)
- Git (si querés clonar el repo directamente)

---

## 🛠️ Instalación paso a paso

### 📦 1. Cloná el repositorio

Abrí tu terminal y escribí:

```bash
git clone https://github.com/F233-L/pw1-tp-final.git
```

Luego entrá a la carpeta:

```bash
cd pw1-tp-final
```

> Si no querés usar Git, podés ir a este link  
> 👉 [https://github.com/F233-L/pw1-tp-final](https://github.com/F233-L/pw1-tp-final)  
> y hacer clic en el botón verde `Code` → `Download ZIP`. Luego descomprimilo.

---

### 📁 2. Instalá las dependencias

Una vez dentro de la carpeta del proyecto, ejecutá:

```bash
npm install
```

Eso va a descargar todos los paquetes necesarios. Si ves mil líneas de texto moverse: ¡todo bien!  
Si explota: pasá captura.

---

### 🚀 3. Corré el proyecto

En la misma terminal, ejecutá:

```bash
npm run dev
```

> 🔁 *Si ese comando no funciona, probá con*:
> ```bash
> npm start
> ```

Esto va a abrir el navegador automáticamente (si todo salió bien) con tu página web corriendo en `http://localhost:3000` o similar.

---

## ❓ Preguntas comunes

**🧨 “Me tira error con react-dom”**  
→ Borrá la carpeta `node_modules` y el archivo `package-lock.json`, y después hacé `npm install` de nuevo.

**🧟 “npm no se reconoce como comando interno”**  
→ No instalaste Node.js o no reiniciaste la terminal después de instalarlo.

**🧽 “Me aparece una pantalla blanca y nada carga”**  
→ Asegurate de estar en la carpeta correcta (`src`, `public`, etc.), y que no borraste `index.html`.

---

## 🧙 Bonus: comandos útiles

- `npm run build` → genera el proyecto para producción
- `npm install <paquete>` → agrega un paquete nuevo
- `npm run lint` (si existe) → revisa errores de formato o código feo

---

## 🧼 Créditos

Creado por [F233-L](https://github.com/F233-L) con odio, cafeína y webpack.  
**Probado en Linux Bazzite. Ejecutado en modo supervivencia.**

---
