import {Meteor} from "../models/meteor";

const useFilterMeteors = (meteors: Meteor[], year?: string, mass?: string, setFilteredYear?: any) => {
    // if (!year && !mass) {
    //     return meteors;
    // }

    const filterMeteors = (): Meteor[] => {
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
    }

    return {filterMeteors}
}

export default useFilterMeteors;
