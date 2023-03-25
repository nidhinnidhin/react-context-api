import React, { useContext } from 'react'
import "./Styles.css"
import faker from 'faker';
import { useState } from 'react';
import SingleProduct from './SingleProduct';

faker.seed(100)

function Home() {

    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
    }))

    console.log(productsArray);
    const [products] = useState(productsArray)
    
  return (
    <div className="productContainer">
        {
            products.map((prod => (
                <SingleProduct prod={prod} key={prod.id}/>
            )))
        }
    </div>
  )
}

export default Home