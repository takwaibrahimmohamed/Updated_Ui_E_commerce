import React, { useState } from 'react'
import { keyframes, styled } from 'styled-components'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { LgMobile, Mobile, Tablet } from '../Component/Responsive';
import { useLocation, useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import {popularProducts} from '../data'
import DeleteIcon from '@mui/icons-material/Delete';
const Container =styled.div``
const Wrabber =styled.div`
padding: 20px;
${Mobile({padding: "10px"})}

`

const Title =styled.h1`
font-weight: 300;
text-align: center;
`
const Top =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const TopTexts =styled.div`
display: flex;
justify-content: space-between;
${Mobile({display: "none"})}
`
const TopText =styled.div`
margin:0 10px;
cursor: pointer;
text-decoration: underline;

`
const TopButton =styled.div`

padding: 20px;
font-weight: 600;
cursor: pointer;

${Mobile({fontSize:"10px",})}
${LgMobile({fontSize:"10px",})}
${Tablet({fontSize:"10px",})}

border: ${(props)=>props.type==="filled"?"none":"1px solid black"};
background-color: ${(props)=>

props.type==="filled"?"black":"transparent"


};
color:${(props)=>props.type==="filled"&&"white"};
`
const Bottom =styled.div`
display: flex;
justify-content: space-between;
align-items: center;


${Mobile({flexDirection: "column"})}
${LgMobile({flexDirection: "column",alignItems: "flex-start"})}
${Tablet({flexDirection: "column",alignItems: "flex-start"})}
`

const Info =styled.div` 
/* flex: 1; */
margin-right: 30PX;

`
const Product =styled.div`
display: flex;

justify-content: space-between;
margin-bottom: 20px;
${Mobile({flexDirection: "column"})}
`
const ProductDetails =styled.div`
flex: 2;
display: flex;
${Mobile({flexDirection: "column"})}
`

const Image =styled.img`
width:300px;

`
const Details=styled.div`
display: flex;
flex-direction: column;
padding: 20px;
margin-right: 80px;

justify-content: space-around;
${Mobile({padding:"0px",alignItems:"flex-start",marginLeft: "-8px"})}
`
const ProTitle=styled.span`
${Mobile({padding:"10px 0"})}
`
const ProductId =styled.span`
${Mobile({padding:"10px 0"})}
`
const ProductColor =styled.div`

width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize =styled.span`
${Mobile({padding:"10px 0"})}
`
const Hr=styled.hr`

`
const ProductAmount =styled.div`
margin-top: 35px;
margin-left: 40px;
${Mobile({marginTop:"10px",marginLeft:"0px"})}
`
const AmountContainer =styled.div`
display:flex;
align-items: center;
margin-bottom: 20px;
${Mobile({marginBottom:"0px"})}
cursor: pointer;
`
const Amount =styled.div`
font-size: 20px;
margin: 5px;
`
const Price =styled.div`
font-size: 30px;
font-weight: 300;
${Mobile({paddingBottom:"10px",paddingTop: "-10px;"})}

`
const XXX=styled.div`
position: relative;
`
const Summery =styled.div`
border: 1px solid lightgray;
flex: 1;
border-radius: 5px;
padding: 20px;
min-height: 50vh;
display: flex;
flex-direction: column;
justify-content: center;
text-transform: capitalize;
position: fixed;
right:0;
top: 45%;
background-color: white;
${Mobile({position:"relative"})}
${LgMobile({position:"relative"})}
${Tablet({position:"relative"})}
`
const SummTitle=styled.h1`
font-weight: 700;
font-size: 30px;
text-align: center;
`
const SummeryItem =styled.div`
margin: 30px 20px;
display: flex;
justify-content: space-between;
font-weight: bold;
font-size: 20px;
`
const Subtotal =styled.span`

`

const SubtotalPrice =styled.span``
const Button =styled.button`
width: 100%;
padding: 10px;
background-color: black;
color:white;
font-weight: 500;
`
// 


// 
const Cart = () => {
const {cartItem,CartQuantity,increase,decrease,CartItemQuantity,remove}=useShoppingCart()
const cartId=cartItem.map((item)=>({...item}))
const cartData= cartItem.map((item)=>{
    return popularProducts.find((i) => i.id=== item.id);

})

const cartqnt=cartItem.map(item=>item.quantity)

const item=popularProducts.find((it)=>it.id)



// console.log(id,quantity)
  return (
    <Container>
      <Navbar/>
      <Wrabber>
        <Title>Your Bag</Title>
        <Top>
            <TopButton >CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                {
                    cartData.map((item)=>{
                     return (
                        <Product key={item.id}>
                    
                        <ProductDetails>
                        <Image src={item.img} />
                       <Details>
                       
                       <ProTitle><b>Product:</b> {item.title}</ProTitle>
                        <ProductId>
                        <b>ID:</b> {item.id}
                        </ProductId>
                        <ProductColor color="black"/>
                     
                        <ProductSize><b>size</b> {item.size}</ProductSize></Details>
                        </ProductDetails>
                        <ProductAmount>
                            <AmountContainer>
                                 <RemoveIcon onClick={()=>decrease(item.id)}/>
                                <Amount>{CartItemQuantity(item.id)}</Amount>
                                 <AddIcon onClick={()=>increase(item.id)}/>
                            </AmountContainer>
                            <Price>$ {item.price}</Price>
                            <DeleteIcon onClick={()=>remove(item.id)} style={{color:"red",fontSize:"35px",cursor:"pointer"}}/>
                        </ProductAmount>
                    </Product>
                     )
                    })
                }
                {/* <Product>
                    
                    <ProductDetails>
                    <Image src={""} />
                   <Details>
                   
                   <ProTitle><b>Product:</b> JESSIE THUNDER SHOES</ProTitle>
                    <ProductId>
                    <b>ID:</b> 93813718293
                    </ProductId>
                    <ProductColor color="black"/>
                    <ProductSize><b>size</b> 33</ProductSize></Details>
                    </ProductDetails>
                    <ProductAmount>
                        <AmountContainer>
                             <RemoveIcon onClick={()=>decrease(cartId)}/>
                            <Amount>{CartItemQuantity(item.id)}</Amount>
                             <AddIcon onClick={()=>increase(cartId)}/>
                        </AmountContainer>
                        <Price>$ 40</Price>
                    </ProductAmount>
                </Product> */}
                <Hr/>
            </Info>
            <XXX>
            <Summery>
                <SummTitle>ORDER SUMMERY</SummTitle>
                {/* <SummeryItem>
                    <Subtotal>Subtotl</Subtotal>
                    <SubtotalPrice>$ {item.price}</SubtotalPrice>
                </SummeryItem> */}
                {/* <SummeryItem>
                    <Subtotal>Estimated Shipping</Subtotal>
                    <SubtotalPrice>$ 5.80</SubtotalPrice>
                </SummeryItem>
                <SummeryItem>
                    <Subtotal>Shipping Discount</Subtotal>
                    <SubtotalPrice>$ -5</SubtotalPrice>
                </SummeryItem> */}
                <SummeryItem>
                    <Subtotal>totle</Subtotal>
                    <SubtotalPrice>$ {cartItem.reduce((total,cart)=>{
                        const item=popularProducts.find((i)=>i.id===cart.id)
                        return total +(item?.price||0)*cart.quantity
                    },0)}</SubtotalPrice>
                </SummeryItem>
                <Button>CHECKOUT NOW</Button>
            </Summery>
            </XXX>
            
        </Bottom>
      </Wrabber>
      <Footer/>
    </Container>
  )
}

export default Cart
