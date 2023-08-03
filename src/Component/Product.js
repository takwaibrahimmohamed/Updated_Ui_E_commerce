import React from 'react'
import { styled } from 'styled-components'
import { LgMobile, Tablet } from './Responsive'
const Container=styled.div`
height: 70vh;
flex: 1;
position: relative;
margin: 3px;
${Tablet({height:"60vh"})}
${LgMobile({height:"50vh"})}
`


const Img=styled.img`
width: 100%;
height: 100%;

`
const Info=styled.div`
position: absolute;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100%;

`
const Title=styled.h1`
color: #bfc3b1;
${Tablet({fontSize:"20px"})}
${LgMobile({fontSize:"15px"})}
`
const Button=styled.button`
padding:10px 20px;
font-size: 15px;
text-transform: uppercase;
font-weight: 500;
cursor: pointer;
color: #94968c;

`
const Product = ({item}) => {
    
  return (
    <Container>
            <Img src={`${item.img}`}/>
          
          <Info>
            <Title>
                {item.title}
            </Title>
            <Button>shop now</Button>
          </Info>
        
      
    </Container>
  )
}

export default Product
