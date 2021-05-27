import React from 'react';


const Hello = (props) =>{
  const born = ()=>{
    const YearNow = new Date().getFullYear()
    return YearNow - props.age
  }
  return(
    <div>
      <p>hello {props.name}, you are {props.age} years old!!</p>
      <p> So you born in {born()} </p>
    </div>
  )
}

const App = () => {
  const name = 'Hana';
  const age = 23;
  
  return(
    <div>
      <h1>Greeting</h1>
      <Hello name="Ben Slimene " age={15 + 8} />
      <Hello name={name} age={age} />

    </div>
  )
}
export default App;
