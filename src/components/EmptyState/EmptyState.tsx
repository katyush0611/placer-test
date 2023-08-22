import * as React from "react";
import classes from './EmptyState.module.scss';

interface OwnProps {
}

type AllProps = OwnProps;

const EmptyState: React.FC<AllProps> = (props: AllProps) => {
    return <div className={classes.Wrapper}>
        WELCOME
    </div>
};

export default EmptyState;
