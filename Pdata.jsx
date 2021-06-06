
export default function Pdata ()
{
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(cdata=>console.log(cdata));

        
        }
