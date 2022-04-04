import styled from "styled-components";
import EthereumIcon from "../img/icon-ethereum.svg";
import clock from "../img/icon-clock.svg";

export default function NftInfo() {
  return (
    <Div>
      <Div>
        <Icon src={EthereumIcon} alt="ethereum-icon" />
        <Span>0.041 ETH</Span>
      </Div>
      <Div>
        <Icon src={clock} alt="clock" />
        <SpanTime>3 days left</SpanTime>
      </Div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  color: hsl(178, 100%, 50%);
  display: inline-block;
  font-weight: 600;
`;

const Icon = styled.img`
  margin-right: 0.5rem;
`;

const SpanTime = styled(Span)`
  color: hsl(215, 51%, 70%);
  font-weight: 400;
`;
