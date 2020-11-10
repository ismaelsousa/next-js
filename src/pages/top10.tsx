import { GetStaticProps } from 'next';
import React from 'react';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id:string;
  title:string
}
interface Top10Props{
  products: IProduct[]
}
const Top10: React.FC = ({products}: Top10Props) => {
  return (
    <div >
      <Title>Top10</Title>
      <ul>
        {products.map(recommendedProduct=>{
          return (
            <li key={recommendedProduct.id}>
              {recommendedProduct.title}
            </li>
          )
        })}
      </ul>
  </div>)
}

export default Top10;

export const getStaticProps : GetStaticProps<Top10Props> = async (context)=>{
  const response = await fetch('http://localhost:3333/products') 
  const products = await response.json()
  return { 
    props:{
      products
    },
    revalidate:5
  }

}