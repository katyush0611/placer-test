import React, {useEffect, useMemo, useState} from "react"
import Table from "./components/Table/Table";
import {Meteor} from "./models/meteor";
import './App.module.scss';
import classes from './App.module.scss';
import useFetchData from "./hooks/useFetchData";
import EmptyState from "./components/EmptyState/EmptyState";
import Header from "./components/Header/Header";
import {FilterType} from "./models/filter-type.enum";

const URL: string = "https://data.nasa.gov/resource/y77d-th95.json";
function App() {
    const { data, error } = useFetchData(URL);

    const [meteors, setMeteors] = useState<Meteor[]>([]);
    const [filteredYear, setFilteredYear] = useState<string>('');
    const [filteredMass, setFilteredMass] = useState<string>('');

    useEffect(() => {
        if (data) {
            const withFormattedYear = data.map((m: any) => {
                m.year = new Date(m.year).getFullYear();
                return m;
            });
            setMeteors(withFormattedYear);
        }
    }, [data]);

    const filteredMeteorsArr = useMemo(() => FilterMeteors(meteors, filteredYear, filteredMass, setFilteredYear), [filteredYear, filteredMass]);

    const filterChanged = (type: FilterType, val: string): void => {
        switch (type) {
            case FilterType.YEAR:
                setFilteredYear(val);
                return;
            case FilterType.MASS:
                setFilteredMass(val);
                return;
            default: return;
        }
    }

  return (
    <div className={classes.App}>
        <Header
            filteredYear={filteredYear}
            filteredMass={filteredMass}
            onChangeFilter={filterChanged} />
        {
            filteredMeteorsArr && filteredMeteorsArr.length ?
                <Table data={filteredMeteorsArr ? filteredMeteorsArr : []}/> :
                <EmptyState/>
        }
    </div>
  );
}

const FilterMeteors = (meteors: Meteor[], year?: string, mass?: string, setFilteredYear?: any) => {
    if (!year && !mass) {
        return meteors;
    }

    const filteredMeteors: Meteor[] = meteors.filter((meteor: Meteor) => {
        const byYear = meteor.year.toString() === year;
        const byMass = mass && +meteor.mass >= +mass;
        const byYearAndMass = byYear && byMass;

        if (year && !mass) {
            return byYear;
        }
        if (!year && mass) {
            return byMass;
        }
        if (year && mass) {
            return byYearAndMass;
        }
        return false;
    });

    if (mass && year && !filteredMeteors.length) {
        const closestMeteor: Meteor | undefined = meteors.find((meteor: Meteor) => meteor.mass && +meteor.mass >= +mass);
        if (closestMeteor) {
            setFilteredYear(closestMeteor.year);
            return [closestMeteor];
        }
        return [];
    }
    return filteredMeteors;
};

export default App;
