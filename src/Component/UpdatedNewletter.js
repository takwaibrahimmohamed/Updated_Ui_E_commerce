import React from 'react'
import { styled } from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { Mobile } from './Responsive';
const Container=styled.div`
background-color: #fcf5f5;
margin-top: -20px;
height: 60vh;
text-align: center;

flex-direction:column;
display: flex;
justify-content: center;
align-items: center;
`

const Header=styled.h1`
font-size: 60px;
margin-bottom: 0px;
`
const Title=styled.p`
font-size: 20px;
margin-top: 10px;
font-weight: 300;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${Mobile({width: "100%"})}
`
const Input=styled.input`
flex: 8;
border: none;
padding-left: 20px;
&:focus{
    outline: none;
  }
`
const Button=styled.button`
flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
 

`

const UpdatedNewletter = () => {
  return (
    <Container>
       
            <Header>NewsLetter</Header>
            <Title>git timely from your favorite products</Title>
           <InputContainer>
           <Input placeholder='Your email'/>
           <Button>
           <SendIcon/>
           </Button>
            
           </InputContainer>
       
    </Container>
  )
}

export default UpdatedNewletter
