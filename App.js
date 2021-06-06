
import './App.css';
import React,{useState} from 'react';
import Products from './Products';
//import Products from './Products';
//import Pdata from './Pdata';
function App(props) {
  const PAGE_PRODUCTS = "products";
  const PAGE_CART = "cart";
  const [page,setPage] = useState(PAGE_PRODUCTS);
  const [cart,setCart]=useState([]);
  //const[pdata,setPdata] = useState([]); 
 // const {p1} = Pdata;
  //console.log("p1"+ p1)
  function getProductData(pdataarg)
  {
   // setPdata(pdataarg);
    console.log("product selected " + pdataarg.pname);
    addToCart(pdataarg);
  }
  // const [products]=useState([
  //   {
  //        pname:'AA Battery',
  //        pcost:'$2.99',
  //        pimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5rXu58kJrAMT3EUZf9QwcyO5Q_uTjYVRtIw&usqp=CAU'
  //   },
  //   {
  //     pname:'Blanket',
  //     pcost:'$19.99',
  //     pimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmVWGv8WYzsRWADrTjjvYi2b4ABMEjooZ4g&usqp=CAU'
//
  //   }
  // ]);
 
  // const removeFromCart = (producttobeRemoved) =>
  // {
  //   console.log("remove from cart");
  //   setCart(
  //     cart.filter(product => product !==producttobeRemoved )
  //   );
  // }
//   const renderProduct = () =>
//  {  
//    return(
//   <>
//   <h1>Products</h1>  
//   {products.map((product,idx)=>(
//     <div className="productS" key={idx}>
//     <h3>{product.pname}</h3>
//     <h4>{product.pcost}</h4>
//     <img src={product.pimg} alt={product.pname}/>  
//     <button onClick={()=>addToCart(product)}>Add to Cart </button> 
//   </div>

//   ))};
//   </> )
//  };
  const renderCart = () =>{
   return(
    <>
     <h1>Cart</h1>  
     {cart.map((product,idx)=>(
       <div className="productS" key={idx}>
       <h3>{product.pname}</h3>
       <h4>{product.pcost}</h4>
       <img src={product.pimg} alt={product.pname}/>  
    { /*  <button onClick={()=>removeFromCart(product)}>Remove</button> */}
     </div>
  
     ))};
     </> )

  }

 const navigateTo=(nextPage)=>
 {
    console.log('next'+nextPage);
     setPage(nextPage);
 };
  const addToCart=(product)=>{
    console.log("before addtocart"+product.pimg+product.pname);
    setCart([...cart,{...product}]);
    console.log("after cart"+JSON.stringify(cart));
  };
  console.log("page" , page);
  return (
    <div className="App">
      <header className="header1">        
      <button onClick={()=>navigateTo(PAGE_CART)}> Go To Cart {cart.length}</button>
      <button onClick={()=>navigateTo(PAGE_PRODUCTS)}> View Products </button>
      </header>
    {console.log("page",page)}
    {page === PAGE_PRODUCTS && <Products getProductData={getProductData}/>}
    {page === PAGE_CART &&  renderCart()}





    
                {/* {(()=>{
        if(page==="products"){return renderProduct()}
        else{
          return renderCart();
        }
      })()}
      {/* <h1>Products</h1> */}
      {/*products.map((product,idx)=>(
      <div className="productS" key={idx}>
      <h3>{product.pname}</h3>
      <h4>{product.pcost}</h4>
      <img src={product.pimg} alt={product.pname}/>  
      <button onClick={()=>addToCart(product)}>Add to Cart </button> 
    </div>

      ))} */}
    </div>
  );
}

export default App;
