import React, {useEffect, useMemo, useState} from "react"
import Table from "./components/Table/Table";
import {Meteor} from "./models/meteor";
import './App.module.scss';
import classes from './App.module.scss';
import useFetchData from "./hooks/useFetchData";
import useFilterMeteors from "./hooks/useFilterMeteors";
import EmptyState from "./components/EmptyState/EmptyState";
import Header from "./components/Header/Header";
import {FilterType} from "./models/filter-type.enum";

const URL: string = "https://data.nasa.gov/resource/y77d-th95.json";
function App() {
    const [meteors, setMeteors] = useState<Meteor[]>([]);
    const [filteredYear, setFilteredYear] = useState<string>('');
    const [filteredMass, setFilteredMass] = useState<string>('');
    const { data, error } = useFetchData(URL);
    const {filterMeteors} = useFilterMeteors(meteors, filteredYear, filteredMass, setFilteredYear);

    useEffect(() => {
        if (data) {
            const withFormattedYear = data.map((m: any) => {
                m.year = new Date(m.year).getFullYear();
                return m;
            });
            setMeteors(withFormattedYear);
        }
    }, [data]);

    const filteredMeteorsArr = useMemo(() => !filteredYear && !filteredMass ? meteors : filterMeteors(), [filteredYear, filteredMass]);

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
export default App;
