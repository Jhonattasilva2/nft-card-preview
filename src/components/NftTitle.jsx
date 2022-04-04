import styled from "styled-components"

export default function NftTitle() {
  return (
    <Title>Equilibrium #3429</Title>
  )
}

const Title = styled.h3`
font-size: 1.1rem;
color: #FFF;
margin: 1.4rem 0;
cursor: pointer;
transition: 0.2s;

&:hover {
  color: hsl(178, 100%, 50%);
}
`
