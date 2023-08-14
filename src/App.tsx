import React, {useEffect, useState} from "react"
import Table from "./components/Table/Table";
import {Meteor} from "./models/meteor";
import FilterInput from "./components/FilterInput/FilterInput";
import './App.module.scss';
import classes from './App.module.scss';

function App() {
    const [meteors, setMeteors] = useState<Meteor[]>([]);
    const [filteredMeteors, setFilteredMeteors] = useState<Meteor[]>([]);
    const [filteredYear, setFilteredYear] = useState<string>('');

    useEffect(() => {
        const url = "https://data.nasa.gov/resource/y77d-th95.json";
        fetchData(url);
    }, []);

    const fetchData = async (url: string) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            const withFormattedYear = json.map((m: any) => {
                m.year = new Date(m.year).getFullYear();
                return m;
            })
            setMeteors(withFormattedYear);
            setFilteredMeteors(withFormattedYear);
        } catch (error) {
            console.log("error", error);
        }
    };

    const filterByYear = (year: string): void => {
        setFilteredYear(year);
        if (!year.length) {
            setFilteredMeteors(meteors);
            return;
        }
        const filteredMeteors: Meteor[] = meteors.filter((meteor: Meteor) => meteor.year.toString() === year);
        setFilteredMeteors(filteredMeteors);
    };

    const filterByMass = (mass: string): void => {
        if (!mass.length) {
            filteredYear ? filterByYear(filteredYear) : setFilteredMeteors(meteors);
            return;
        }

        const filteredMeteors: Meteor[] = meteors.filter((meteor: Meteor) => {
            if (filteredYear) {
                return +meteor.mass >= +mass && meteor.year.toString() === filteredYear.toString();
            }
            return +meteor.mass >= +mass;
        });
        if (!filteredMeteors.length) {
            const closestMeteor: Meteor | undefined = meteors.find((meteor: Meteor) => meteor.mass && meteor.mass.toString() === mass.toString());
            closestMeteor ? setFilteredMeteors([closestMeteor]) : setFilteredMeteors([]);
            return;
        }
        setFilteredMeteors(filteredMeteors);
    };

  return (
    <div className={classes.App}>
        <div className={classes.FiltersRow}>
            <FilterInput
                title={'Filter by year'}
                onChange={filterByYear}/>
            <FilterInput
                title={'Filter by mass'}
                onChange={filterByMass}/>
        </div>
        {
            filteredMeteors.length ? <Table data={filteredMeteors}/>
                : 'No Data to show'
        }
    </div>
  );
}

export default App;
