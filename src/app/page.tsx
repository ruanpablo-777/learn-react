
const products = [
  { title:'apple', isFruit: false, id:1},
  { title:'orange', isFruit: false, id:2},
  { title:'banana', isFruit: true, id:3},
]




export default function Home() {
  const listItems = products.map(product => 
    <li 
    key={product.id}
    style={{
      color: product.isFruit ? 'green' : 'red'
    }}
    >
        {product.title}
    </li>
  
  )
  return (
      <div className="bg-white w-20 h-50 p-10 avatar" >
        {listItems}
      </div>
  );
}
