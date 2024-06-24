// Gallery Components

// Component Profile

// Función del componente Profile()
function Profile() {
return (
  <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

/* 

Este componente será reutilizado dentro del marcado de la función Profile()

*/


// Component Gallery

// export defaul - sirve para exportar un componente
// function Gallery() - Es la función que creas para el componente "Gallery"
export default function Gallery() {
  return(
    <section>
      <h1>Cientificos increibles</h1>
      <Profile/> 
      <Profile/>
      <Profile/>
    </section>
  );
}

/* 

<section>      
  <h1>Cientificos increibles</h1>
  <Profile/> 
  <Profile/>
  <Profile/>
</section> 
  
Lo anterior es una etiqueta que se parece a HTML, pero en realidad es js, con una sintaxis especial, JSX, que permite ingresar marcado dentro de js. 

El marcado debe estar en la misma linea que el "return", de no ser asi, deberás colocarlo dentro de parentesis.

*/

// Lo que ve el navegador

/* 

<section>
  <h1>Científicos increíbles</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>

La diferencia principal del tipado en la sintaxis JSX, es que las etiquetas se escriben en minusculas, ademas de que las etiquetas Profile se reemplazaron por las etiquetas img, ya que el componente Profile nos retorna una etiqueta img.
*/  

// Componentes anidados

/*

export default function Gallery() {
  // 🔴 ¡Nunca definas un componente dentro de otro componente!
  function Profile() {
    // ...
  }
  // ...
}

Los componentes anidados no funcionan, la forma correcta sería la siguiente.

export default function Gallery() {
  // ...
}

// ✅ Declara los componentes en el primer nivel
function Profile() {
  // ...
}

*/