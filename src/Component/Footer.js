import React from 'react'
import { styled } from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { LgMobile, Mobile, Tablet } from './Responsive';
const Container=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
${Mobile({flexDirection: "column"})}
${Tablet({flexWrap:"wrap"})}
${LgMobile({flexDirection:"column",alignItems:"flex-start"})}


`
const Left=styled.div`
flex:1;

`
const Logo=styled.h1``

const Dusc=styled.p``
const IconContainer=styled.div`
display: flex;


`
const SocialIcon=styled.div`
margin: 0 10px;
font-size: 20px;
background-color:#${props=>props.color} ;
width: 40px;
height: 40px;
color: white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;

`
const Center=styled.div`

flex:1;
${Mobile({display: "none"})}
${Tablet({display: "none"})}

`
const Title=styled.h1``
const Ul=styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
margin: 0;
padding: 0;
`
const Li=styled.li`
width: 50%;
margin-bottom: 10px;
`
const Right=styled.div`
flex:1;
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment=styled.img``

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PRAND.</Logo>
        <Dusc> There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Dusc>
        <IconContainer>
        <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </IconContainer>
      </Left>
      <Center>
      <Title>useful links</Title>
      <Ul>
        <Li>home</Li>
        <Li>man fashion</Li>
        <Li>accessories</Li>
        <Li>order tracking</Li>
        <Li>wishlist</Li>
        <Li>cart</Li>
        <Li>woman fashion</Li>
        <Li>my account</Li>
        <Li>wishlist</Li>
        <Li>terms</Li>
      </Ul>
      </Center>
      <Right>
      <Title>contact</Title>
      <ContactItem>
        <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
      </ContactItem>
      <ContactItem>
        <PhoneIcon style={{marginRight:"10px"}}/> +1234 56 78
      </ContactItem>
      <ContactItem>
        <MailOutlineIcon style={{marginRight:"10px"}}/> contact@prand.com
      </ContactItem>
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
