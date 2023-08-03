import React from 'react'
import { styled } from 'styled-components'
import Product from './Product'
import {categories} from '../data'
import { Mobile, Tablet } from './Responsive'
const Container=styled.div`
display: flex;
padding: 10px;
justify-content: space-between;
${Mobile({flexDirection: "column",marginTop: "20px"})}

`
const Category = () => {
  return (
    <Container>
        {
            categories.map((item)=>{
                return(
                    
                    <Product item={item}/>
                )
            })
        }
    
    </Container>
  )
}

export default Category
