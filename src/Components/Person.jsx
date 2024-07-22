function Person (props) {
  return (
    <>
      <h3>Person:</h3>
      <p>Name: {props.name}</p>
      <p>Surename: {props.surname}</p>
      <p>Age: {props.age}</p>
    </>
  )
}

export default Person
