import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 0 20px;
`;

export const Counter = styled.div`
  margin-bottom: 15px;
`;

export const StyledTable = styled.table`
  border: solid 1px #DDEEEE;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: cursive;
`;

export const StyledTh = styled.table`
  background-color: #e6270b;
  border: solid 1px #DDEEEE;
  color: #fff;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 200;
`;

export const StyledTd = styled.table`
  border: solid 1px #DDEEEE;
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: 100;
  text-shadow: -1px 1px 1px #ee0808;
`;

export const ScrollBody = styled.tbody`
  overflow: scroll;
`;
