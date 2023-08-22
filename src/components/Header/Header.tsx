import * as React from "react";
import classes from './Header.module.scss';
import FilterInput from "../FilterInput/FilterInput";
import {FilterType} from "../../models/filter-type.enum";

interface OwnProps {
    filteredYear: string;
    filteredMass: string;
    onChangeFilter: (type: FilterType, val: string) => void;
}

type AllProps = OwnProps;

const Header: React.FC<AllProps> = (props: AllProps) => {
    const {filteredYear, filteredMass, onChangeFilter} = props;
    return <div className={classes.Header}>
        <img
            className={classes.Logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
            alt="NasaLogo"/>
        <div className={classes.TitleWrapper}>
            <div className={classes.Title}>
                Meteor Investigation
            </div>
            <img
                className={classes.MeteorIcon}
                src="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-06-512.png"
                alt="MeteorIcon"/>
        </div>
        <div className={classes.Filters}>
            <FilterInput
                value={filteredYear}
                title={'Filter by year'}
                onChange={(value: string) => onChangeFilter(FilterType.YEAR, value)}/>
            <FilterInput
                value={filteredMass}
                title={'Filter by mass'}
                onChange={(value: string) => onChangeFilter(FilterType.MASS, value)}/>
        </div>
    </div>
};

export default Header;
