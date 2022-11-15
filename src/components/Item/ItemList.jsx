import React from 'react';
import Item from './Item';
import products from "../../data/data";
 
function ItemList() {
  return (
    <div className='cuerpoCards'>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            img={product.img}
            tittle={product.name}
            price={product.price}
            descripcion={product.descripcion}
            stock={product.stock} />
        )
      }
      )}

    </div>
  )
}

export default ItemList;