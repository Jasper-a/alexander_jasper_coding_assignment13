import React,{FC} from 'react';
import styled from 'styled-components';

import {TableProps} from "./Table.types"

const StyledTable = styled.table<TableProps>`
    border-collapse: collapse;
    background-color: ${props => props.backgroundColor};
    cursor: ${props => props.disabled ? "not-allowed" : "cursor"};
    opacity: ${props => props.disabled ? 0.5 : 1};
  border: 1px solid #dddddd;
  padding: 8px;
`;

const StyledRow = styled.tr<TableProps>``;

const StyledHeader = styled.th<TableProps>`
    border: 1px solid #dddddd;
    padding: 8px;
`;

const StyledCell = styled.td<TableProps>`
    border: 1px solid #dddddd;
    padding: 8px;
`;

const StyledFooter = styled.td<TableProps>`
    border: 1px solid #dddddd;
    padding: 8px;
`;

const Table: FC<TableProps> = ({disabled, backgroundColor,
                                header1, header2, header3,
                                cell_11, cell_12, cell_13,
                                cell_21, cell_22, cell_23,
                                cell_31, cell_32, cell_33,
                                footer1, footer2, footer3,
                                ...props}) => {
    return (
        <StyledTable disabled={disabled} backgroundColor={backgroundColor} {...props}>
            <thead>
                <StyledRow>
                    <StyledHeader>{header1}</StyledHeader>
                    <StyledHeader>{header2}</StyledHeader>
                    <StyledHeader>{header3}</StyledHeader>
                </StyledRow>
            </thead>
            <tbody>
                <StyledRow>
                    <StyledCell>{cell_11}</StyledCell>
                    <StyledCell>{cell_12}</StyledCell>
                    <StyledCell>{cell_13}</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>{cell_21}</StyledCell>
                    <StyledCell>{cell_22}</StyledCell>
                    <StyledCell>{cell_23}</StyledCell>
                </StyledRow>
                <StyledRow>
                    <StyledCell>{cell_31}</StyledCell>
                    <StyledCell>{cell_32}</StyledCell>
                    <StyledCell>{cell_33}</StyledCell>
                </StyledRow>
            </tbody>
            <tfoot>
                <StyledRow>
                    <StyledFooter>{footer1}</StyledFooter>
                    <StyledFooter>{footer2}</StyledFooter>
                    <StyledFooter>{footer3}</StyledFooter>
                </StyledRow>
            </tfoot>
        </StyledTable>
    )
};

export default Table;