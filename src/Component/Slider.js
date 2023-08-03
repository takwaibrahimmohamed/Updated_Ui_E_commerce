
import React, { useState } from 'react'
import {sliderItems} from "../data"
import { styled } from 'styled-components'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { LgMobile, Mobile, Tablet } from './Responsive';
const Container =styled.div`
width: 100%;
height: 100vh;
margin-top: 20px;
position: relative;
overflow: hidden;
display: flex;
${Mobile({display: "none"})}
${LgMobile({display: "none"})}


`
const Arrow=styled.div`
font-size: 20px;
width: 40px;
height: 40px;
cursor: pointer;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
left: ${props=>props.dirextion==="left"&&"10px"};
right: ${props=>props.dirextion==="right"&&"10px"};
margin: auto;
top: 0;
bottom: 0;
z-index: 44;
`
const Wraper=styled.div`
height: 100%;
display: flex;
transition: all .5s ease;
transform: translateX(${(props)=>props.slideIndex * -100}vw);
`

const Slide=styled.div`

width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props)=>props.bg};
`
const Image =styled.div`
height: 100%;
flex: 1;
${Tablet({height:"70%"})}
`
const Img =styled.img`
height: 100%;

`
const SlideInfo =styled.div`
flex: 1;
padding: 50px;
`
const Title =styled.h2`
font-size: 70px;
${Tablet({fontSize:"50px"})}
`
const Dusc =styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`

const Slider = () => {
   const [slideIndex,setSlideIndex]=useState(0)
    const handleDirection=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
            
        }
        else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
        }
  return (
    <Container>
      <Arrow dirextion="left" onClick={()=>handleDirection("left")}>
       <ArrowLeftIcon/>
      </Arrow>
  
      <Wraper slideIndex={slideIndex}>
        {
            sliderItems.map((item)=>{
               return (
               <Slide key={item.id} bg={item.bg}>

                <Image>
                    <Img src={`${item.img}`} alt={item.title}/>
                </Image>
                <SlideInfo>
                    <Title>{item.title}</Title>
                    <Dusc>{item.desc}</Dusc>
                </SlideInfo>
            </Slide>)
            })
        }
        
      </Wraper>
      <Arrow dirextion="right" onClick={()=>handleDirection("right")}>
       <ArrowRightIcon/>
      </Arrow>
    </Container>
  )
}

export default Slider
