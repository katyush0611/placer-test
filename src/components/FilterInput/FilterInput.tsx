import * as React from "react";
import { memo } from "react";
import {FilterInputWrapper, Input} from './filter-input-styled-components';

interface OwnProps {
    value?: string;
    title: string;
    onChange: (year: string) => void;
}

type AllProps = OwnProps;

const FilterInput: React.FC<AllProps> = (props: AllProps) => {
    const {value, title, onChange} = props;

    return <FilterInputWrapper>
        <div>{title}: </div>
        <Input
            value={value}
            type="text"
            onChange={(e) => onChange(e.target.value)}
        />
    </FilterInputWrapper>
};

export default memo(FilterInput);
