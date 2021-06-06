import React,{useState,useEffect} from 'react';
 function Products({getProductData})
{
  const x=[{
    id:'AA Battery',
    price:'$2.99',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rXu58kJrAMT3EUZf9QwcyO5Q_uTjYVRtIw&usqp=CAU'
},
{
 id:'BBlanket',
 price:'$18.99',
 image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmVWGv8WYzsRWADrTjjvYi2b4ABMEjooZ4g&usqp=CAU'

}
];
const y=[];
  const [products,setProducts]=useState(y);

             useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(res=>{setProducts(res)})
      .catch({})
       },[products]);
    console.log("props"+JSON.stringify());
    return(<>
    <h1>Products</h1>  
    {products.map((product,idx)=>(
    <div className="productS" key={idx}>
    <h3>{product.id}</h3>
     <h4>{product.price}</h4>
     <img src={product.image} alt={product.id}/> 
     {<button onClick={()=> getProductData(product)}>Add to Cart </button>  }
     </div> 
    ))};
    {/*{products.map((product,idx)=>(
     <div className="productS" key={idx}>
    <h3>{product.pname}</h3>
     <h4>{product.pcost}</h4>
     <img src={product.pimg} alt={product.pname}/>  
    
    {<button onClick={()=> getProductData(product)}>Add to Cart </button>  }
   </div>
    ))}; */}
  
    </>);

    };
export default Products ;