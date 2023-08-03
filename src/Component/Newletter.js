import React, { useState } from 'react'
import {popularProducts} from "../data"
import { styled } from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

const XLink =styled(Link)`
color: blue;
`
const Container =styled.div`
padding: 10px;
    display: flex;
 
    justify-content: space-between;
    `
const Wrapper =styled.div`

flex-wrap: wrap;
 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;

`
const Box =styled.div`
flex: 1;
  margin: 5px;
 min-width: 280px;
  height: 350px;
  position: relative;

`
const Img =styled.img`
width: 100%;
height: 100%;
`
const Info =styled.div`
position:absolute;
top: 0;
left:0;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color:  rgba(0, 0, 0, 0.3);
opacity: 0;
transition: all .5s ease-in-out;
&:hover{
    opacity: 1;
}
`

const Icon =styled.div`
width: 40px;
height: 40px;
cursor: pointer;
border-radius: 50%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
margin: 0 5px;
transition: all .3s ease;
&:hover{
   transform: scale(1.2);
}

`


const Newletter = () => {
  const [detail,setDetail]=useState(null)

  const handleDate=(data)=>{
  setDetail(data)
  
  }

  const {cartItem,increase,decrease}=useShoppingCart()
  
  return (
    <Container>
      <Wrapper>
        {
            popularProducts.map((item)=>{
              
                return(
                <Box key={item.id}>
                    <Img src={`${item.img}`}/>
          
                        <Info>
                            <Icon>
                             
                              <ShoppingCartIcon onClick={()=>increase(item.id)}/>
                             
                              
                            </Icon>
                            <Icon>
                                <FavoriteBorderIcon/>
                            </Icon>
                            <Icon>
                              <XLink
                               to="ProductList" state={{data:item}}>
                              <RemoveRedEyeIcon onClick={()=>handleDate(item)}/>
                              </XLink>
                                
                            </Icon>
                            
                        </Info>
                </Box>
                        
                )
            })
        }
      </Wrapper>
    </Container>
  )
}

export default Newletter
