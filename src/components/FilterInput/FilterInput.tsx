import * as React from "react";
import classes from './FilterInput.module.scss';

interface OwnProps {
    title: string;
    onChange: (year: string) => void;
}

type AllProps = OwnProps;

const FilterInput: React.FC<AllProps> = (props: AllProps) => {
    const {title, onChange} = props;

    return <div className={classes.FilterInput}>
        <div>{title}:</div>
        <input
            type="text"
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
};

export default FilterInput;
