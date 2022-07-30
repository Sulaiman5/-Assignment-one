import React from 'react'

export default function TestComponent({sandData}) {
const myFunction = () => {
  
alert(sandData.name+",  "+sandData.age+",  "+sandData.country);

console.log(sandData);

  return <h2>I am a { sandData.name }!</h2>;
}
  return (
    <div>
      <h2> Name: { sandData.name}, Age: { sandData.age}, Country: { sandData.country}!</h2>
      <button onClick={myFunction}>Click me</button>
    </div>
   
  )
}
