import './App.css'

function Hola () {
  const JSX = <h1>Hello JSX</h1>;
  const ContenJSX = <div>
    <p className='color: red'>Esto es un párrafo creado con JSX</p>
      <ul>
        <li>Uno</li>
        <li>Dos</li>
        <li>Tres</li>
      </ul>
  </div>
  {/*Aquí termina este div que guarda la constante ContenJSX*/}
  return (
    <>
      {JSX}
      {ContenJSX}
    </>
  )
}

export default Hola
