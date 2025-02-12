
"use client"
function MyButton() {
  function handleClick() {
    alert('you clicked me!')
  
    
  }
  return (
  <button onClick={handleClick}>Click me!</button>
  
  )
}

export default function Home() {

  return (
    <div>
      <MyButton/>
    </div>
  );
}
