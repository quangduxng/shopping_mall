import React, { useEffect, useState } from 'react'
import useFetch from '../../service'
import Item from './Item';

function ListProducts() {

    const  {data}  = useFetch( '/products' );

  return (
    <div className='container_products'>
        {data?.map((product,index) => (
            <Item key={index} image={product?.image} title= {product?.title} price={product?.price} id_item={product?.id} />
        ))}
    </div>
  )
}

export default ListProducts