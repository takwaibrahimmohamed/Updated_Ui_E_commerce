import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import { LgMobile, Mobile } from './Responsive';
import { Link } from 'react-router-dom';
import Cart from '../pages/Cart';
import { useShoppingCart } from '../context/ShoppingCartContext';
const Container=styled.div`
height:60px;

${Mobile({height:"30px"})}
    `
const Wrapper=styled.div`
padding:0px 20px;
display: flex;
justify-content: space-between;
align-items: center;
${Mobile({padding: "0px"})}
margin-top: 20px;
`
const  Left=styled.div`
flex:1;
display: flex;
align-items: center;

`

const Language=styled.span`
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
${Mobile({display: "none"})}
${LgMobile({display: "none"})}
`
const SearchContainer=styled.div`
border: 1px solid lightgray;
display: flex;

align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input=styled.input`
border: none;
${Mobile({width:"50px"})}
${LgMobile({width:"80px"})}
`
const Center=styled.div`
flex:1;
text-align: center;
justify-content: center;
`
const Logo=styled.h1`
font-weight: bold;
${Mobile({fontSize: "24px"})}
`
const  Right=styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
text-transform: uppercase;
${Mobile({flex:"2",justifyContent:"center"})}
`
const MenuItem=styled.div`
margin-left: 25px;
font-size: 14px;
cursor: pointer;
${Mobile({fontSize: "12px",marginLeft: "10px"})}
`
const XLink =styled(Link)`
color: black;
text-decoration: none;
`
const Navbar = () => {
  const {CartQuantity}=useShoppingCart()
  const name=JSON.parse(localStorage.getItem("name"))
  const loginEx =localStorage.getItem("login")
  const [loginEx2,setloginEx]=useState(loginEx)
  const logOut=()=>{
    localStorage.clear()
  localStorage.setItem("login",false)
  setloginEx(false)
  console.log(loginEx2)
  }
  

  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>en</Language>
            <SearchContainer>
                <Input/>
                <SearchIcon/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo to="/">
              <XLink to="/">
                PRAND.
              </XLink>
                
            </Logo>
        </Center>
        <Right>
          {
            loginEx2 ? (<>
            <MenuItem>{name}</MenuItem>
            
            <MenuItem onClick={logOut}>logut</MenuItem>
            
           
            
            </>):(
              <>
              <XLink to="/regester">
                <MenuItem>Regester</MenuItem>
                </XLink>
                <XLink to="/login">
                <MenuItem>SignIn</MenuItem>
           </XLink>
           </>
            )
          }
          
            
            <MenuItem>
            <Badge  badgeContent={CartQuantity} color="primary">
              <XLink to="/cart">
                <ShoppingCartOutlinedIcon/>
              </XLink>
            
            </Badge>
            
            </MenuItem>

        </Right>
        
      </Wrapper>
    </Container>
  )
}

export default Navbar
