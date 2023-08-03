import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../Component/Navbar'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import UpdatedNewletter from '../Component/UpdatedNewletter';
import Footer from '../Component/Footer';
import { LgMobile, Mobile, Tablet } from '../Component/Responsive';
import { useLocation } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
const Container = styled.div``
const Wrapper = styled.div`
display: flex;
padding: 50px;
${Mobile({flexDirection: "column",padding: "25px 20px"})}
${LgMobile({flexDirection: "column",padding: "35px 20px"})}
${Tablet({flexDirection: "column",padding: "35px 20px"})}
`
const ImageContainer = styled.div`
flex: 1;
`
const Img = styled.img`

width: 100%;
height: 90vh;
object-fit: cover;
${Mobile({height: "40vh"})}
${LgMobile({height: "70vh"})}
`
const InfoContainer =styled.div`
flex: 1;
padding: 0 50px;



`
const Title =styled.h1`
font-weight: 200;

`
const Desc =styled.p`
margin: 20px 0;
`
const Price =styled.div`
font-size: 40px;
font-weight: 100px;

`
const FilterContainer =styled.div`
display: flex;
width: 70%;
justify-content: space-between;
margin: 30px 0;
${Mobile({width: "100%",margin: "10px -20px"})}

`
const Filter =styled.div`
display: flex;
align-items: center;
`
const FilterTitle =styled.h1`
font-size: 20px;
font-weight: normal;
margin-right: 10px;
`
const FilterColor =styled.span`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0 8px;
${Mobile({width:"20px",height:"20px",margin:"0 4px"})}
`
const FilterSize =styled.select`
padding:5px;
margin-left: 10px;

`
const FilterSizeOption =styled.option`

`
const AddContainer =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 70%;
${Mobile({width:"100%"})}
`
const AmountContainer =styled.div`
display: flex;
align-items: center;
font-weight: 700;
cursor: pointer;
`
const Amount =styled.div`
margin:0 10px;
width: 30px;
height: 30px;
border: 1px solid teal;
margin: 0px 5px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const Button =styled.button`

padding: 10px;
background-color: teal;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`
const ProductList = () => {
  let {state}  = useLocation();
  const {cartItem,increase,decrease,CartItemQuantity}=useShoppingCart()
  return (
    <Container>
      <Navbar/>
      <Wrapper key={state.data.id}>
        <ImageContainer>
            <Img src={state.data.img}/>
        </ImageContainer>
        <InfoContainer>
        <Title>{state.data.title}</Title>
          <Desc>
          {state.data.details}
          </Desc>
          <Price>$ {state.data.price}</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
           
                    <FilterColor color="red"/>
                    <FilterColor color ="blue"/>
                    <FilterColor color ="black"/>
               
            </Filter>
          
            <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
              
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
                <RemoveIcon onClick={()=>decrease(state.data.id)}/>
                <Amount>{CartItemQuantity(state.data.id)}</Amount>
                <AddIcon onClick={()=>increase(state.data.id)}/>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <UpdatedNewletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList
