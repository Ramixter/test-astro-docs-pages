---
title: Example Guide
description: A guide in my new Starlight docs site.
# template: splash
# tableOfContents:
#   minHeadingLevel: 2
#   maxHeadingLevel: 2
# tableOfContents: false
---

Esta página describe cómo utilizar Markdown en Starlight.

## Estilos en línea

## Encabezados

## Introducción

Puedo enlazar a [mi conclusión](#conclusión) más abajo en la misma página.

## Conclusión

:::note
Starlight es un conjunto de herramientas para sitios de documentación construido con [Astro](https://astro.build/). Puedes comenzar con este comando:

```sh
npm run create astro@latest --template starlight
```

:::

:::tip[¿Sabías esto?]
Astro te ayuda a construir sitios web más rápidos con la[“Arquitectura de Islas”](https://docs.astro.build/es/concepts/islands/).
:::


> Esto es una cita en bloque, que se utiliza comúnmente para citar a otra persona o documento.
>
> Las citas en bloque se indican con un `>` al inicio de cada línea.

```js
// Código JavaScript con resaltado de sintaxis.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l);
  return true;
};
```


```js {2-3}
function demo() {
  // Esta línea (#2) y la siguiente están resaltadas
  return 'Esta es la línea #3 de este fragmento';
}
```

```js "Términos individuales" /También.*compatibles/
// Términos individuales también pueden ser resaltados
function demo() {
  return 'También las expresiones regulares son compatibles';
}
```

```js "return true;" ins="insertados" del="eliminados"
function demo() {
  console.log('Estos son tipos de marcadores insertados y eliminados');
  // La declaración de retorno utiliza el tipo de marcador predeterminado
  return true;
}
```

```diff lang="js"
  function thisIsJavaScript() {
    // ¡El bloque completo se resalta como JavaScript,
    // y aún podemos añadir marcadores de diferencias a él!
-   console.log('Old code to be removed')
+   console.log('New and shiny code!')
  }
```

```js
// mi-archivo-de-prueba.js
console.log('¡Hola mundo!');
```

```bash title="Instalando dependencias…"
npm install
```

```bash frame="none"
echo "Esto no se renderiza como una terminal a pesar de usar el lenguaje bash"
```

`https://mi-sitio.com/page1/#introduction` navega directamente a mi Introducción.

El texto puede estar **en negrita**, _en cursiva_, o ~~tachado~~.

Puedes resaltar `código en línea` con comillas invertidas.

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
