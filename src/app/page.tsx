import Image from "next/image";


const user = {
      name: 'Ruan Pablo',
      imageUrl: '/eu.jpg',
      imageSize: 90,
};

let content: string= 'hello';
let valor = false
if (valor) {
  content = <Casa/>
} else {
  content = <Mansao/>
}

function Casa() {
  return(
    <h1>eu sou uma o ruan</h1>
  )
}
function Mansao() {
  return(
    <h1>eu sou um super heroi</h1>
  )
}

function MyButton() {
  return(
    <button className="avatar">I'm button</button>
  )
}

export default function Home() {
  return (
      <div className="bg-white p-6">
        <h2 className="text-black">{user.name}</h2>
        <img
        className="avatar " 
        src={user.imageUrl} 
        alt={'Photo of '+ user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
        />
      
      <div className="text-black">
        {content}

      </div>
     
      </div>

  );
}
