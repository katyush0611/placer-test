import * as React from "react";
import classes from './FilterInput.module.scss';

interface OwnProps {
    value?: string;
    title: string;
    onChange: (year: string) => void;
}

type AllProps = OwnProps;

const FilterInput: React.FC<AllProps> = (props: AllProps) => {
    const {value, title, onChange} = props;

    return <div className={classes.FilterInput}>
        <div>{title}: </div>
        <input
            className={classes.Input}
            value={value}
            type="text"
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
};

export default FilterInput;
