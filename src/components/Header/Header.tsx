import * as React from "react";
import FilterInput from "../FilterInput/FilterInput";
import {FilterType} from "../../models/filter-type.enum";
import {
    HeaderWrapper,
    FiltersWrapper,
    TitleWrapper, Title,
    MeteorIcon,
    LogoIcon
} from './header-styled-components';

interface OwnProps {
    filteredYear: string;
    filteredMass: string;
    onChangeFilter: (type: FilterType, val: string) => void;
}

type AllProps = OwnProps;

const Header: React.FC<AllProps> = (props: AllProps) => {
    const {filteredYear, filteredMass, onChangeFilter} = props;
    return <HeaderWrapper>
        <LogoIcon
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
            alt="NasaLogo"/>
        <TitleWrapper>
            <Title>Meteor Investigation</Title>
            <MeteorIcon
                src="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-06-512.png"
                alt="MeteorIcon"/>
        </TitleWrapper>
        <FiltersWrapper>
            <FilterInput
                value={filteredYear}
                title={'Filter by year'}
                onChange={(value: string) => onChangeFilter(FilterType.YEAR, value)}/>
            <FilterInput
                value={filteredMass}
                title={'Filter by mass'}
                onChange={(value: string) => onChangeFilter(FilterType.MASS, value)}/>
        </FiltersWrapper>
    </HeaderWrapper>
};

export default Header;
