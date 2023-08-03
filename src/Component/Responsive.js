import { css } from "styled-components"

export const Mobile=(props) =>{
return css`

@media  only screen and (max-width: 380px){
    ${props}
}


`
}
export const LgMobile=(props) =>{
return css`

@media (min-width: 382px) and (max-width: 615px)
{
    ${props}
}


`
}
export const Tablet=(props) =>{
return css`
@media (min-width: 620px) and (max-width: 942px){
    ${props}
}

`
}