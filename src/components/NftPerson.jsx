import styled from "styled-components";
import avatar from "../img/image-avatar.png";

export default function NftPerson() {
  return (
    <Div>
      <Image src={avatar} alt="avatar" />
      <Paragraph>
        Creation of <Span>Jules Wyvern</Span>
      </Paragraph>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 2rem;
  max-height: 2rem;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Paragraph = styled.p`
  color: hsl(215, 51%, 70%);
`;

const Span = styled.span`
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: hsl(178, 100%, 50%);
  }
`;
