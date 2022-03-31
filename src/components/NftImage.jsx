import styled from "styled-components"
import nftImage from '../img/image-equilibrium.jpg'

export default function NftImage() {
  return (
    <>
        <Image src={nftImage} alt='nft-image' />
    </>
  )
}

const Image = styled.img`
    max-width: 280px;
    margin: 1.2rem auto;
    
    border-radius: 0.5rem;
`
