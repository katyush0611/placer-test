import * as React from "react";
import styled from "styled-components";

interface OwnProps {
}

type AllProps = OwnProps;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const EmptyState: React.FC<AllProps> = (props: AllProps) => {
    return <Wrapper>
        WELCOME
    </Wrapper>
};

export default EmptyState;
