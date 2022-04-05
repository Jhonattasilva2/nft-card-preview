import styled from 'styled-components'
import NftImage from './components/NftImage';
import NftTitle from './components/NftTitle';
import NftText from './components/NftText';
import NftInfo from './components/NftInfo';
import Line from './components/Line';
import NftPerson from './components/NftPerson';

function App() {
  return (
    <Container>
      <MainDiv>
        <NftImage />
        <NftTitle />
        <NftText/>
        <NftInfo/>
        <Line/>
        <NftPerson/>
      </MainDiv>
    </Container>
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: hsl(217, 54%, 11%);
`

const MainDiv = styled.div `
max-height: 80%;
max-width: 300px;
display: flex;
flex-direction: column;
border-radius: 1rem;
background-color: hsl(216, 50%, 16%);
box-shadow: 1px 15px 20px 8px #000820;
overflow: hidden;
padding: 1.3rem;

`


export default App;
