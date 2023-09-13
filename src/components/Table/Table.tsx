import * as React from "react";
import {Meteor} from "../../models/meteor";
import {
    TableWrapper,
    StyledTable,
    Counter,
    ScrollBody,
    StyledTh,
    StyledTd
} from './table-styled-components';
interface OwnProps {
    data: Meteor[];
}

type AllProps = OwnProps;

const Table: React.FC<AllProps> = (props: AllProps) => {
    const {data} = props;

    return <TableWrapper>
        <Counter>{ `Count: ${data.length}`  }</Counter>
        <StyledTable>
            <thead>
                <tr>
                    <StyledTh>Fall</StyledTh>
                    <StyledTh>ID</StyledTh>
                    <StyledTh>Mass</StyledTh>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>NameType</StyledTh>
                    <StyledTh>recclass</StyledTh>
                    <StyledTh>reclat</StyledTh>
                    <StyledTh>reclong</StyledTh>
                    <StyledTh>year</StyledTh>
                </tr>
            </thead>
            <ScrollBody>
            {
                data && data.map((meteor: Meteor) => <tr key={meteor.id}>
                    <StyledTd>{meteor.fall}</StyledTd>
                    <StyledTd>{meteor.id}</StyledTd>
                    <StyledTd>{meteor.mass}</StyledTd>
                    <StyledTd>{meteor.name}</StyledTd>
                    <StyledTd>{meteor.nametype}</StyledTd>
                    <StyledTd>{meteor.recclass}</StyledTd>
                    <StyledTd>{meteor.reclat}</StyledTd>
                    <StyledTd>{meteor.reclong}</StyledTd>
                    <StyledTd>{meteor.year}</StyledTd>
                </tr>)
            }
            </ScrollBody>
        </StyledTable>
    </TableWrapper>
};

export default Table;
