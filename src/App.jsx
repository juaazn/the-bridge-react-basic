import './App.css'
import Header from './Components/Header'
import Home from './Components/Home';
import Person from './Components/Person'
import HeaderClass from './Components/HeaderClass'
import HomeClass from './Components/HomeClass'

function Hola () {
  const JSX = <h1>Hello JSX</h1>;
  const ContenJSX = <div>
    <p className='color: red'>Esto es un párrafo creado con JSX</p>
    <br />
      <ul>
        <li>Uno</li>
        <li>Dos</li>
        <li>Tres</li>
      </ul>
  </div>
  {/*Aquí termina este div que guarda la constante ContenJSX*/}
  return (
    <>
    <Header />
    <Home />
      {JSX}
      {ContenJSX}
      <Person 
        name="Juan Diego"
        surname="Acosta Liscano"
        age={18}
      />
      <Person 
        name="David"
        surname="Liscano"
        age={18}
      />
      <Person 
        name="Uxue"
        surname="Acosta"
        age={18}
      />
      <HeaderClass />
      <HomeClass />
    </>
  )
}

export default Hola
