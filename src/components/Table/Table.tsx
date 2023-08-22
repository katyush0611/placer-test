import * as React from "react";
import classes from './Table.module.scss';
import {Meteor} from "../../models/meteor";

interface OwnProps {
    data: Meteor[];
}

type AllProps = OwnProps;

const Table: React.FC<AllProps> = (props: AllProps) => {
    const {data} = props;

    return <div className={classes.TableWrapper}>
        <div className={classes.Counter}>
            { `Count: ${data.length}`  }
        </div>
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th>Fall</th>
                    <th>ID</th>
                    <th>Mass</th>
                    <th>Name</th>
                    <th>NameType</th>
                    <th>recclass</th>
                    <th>reclat</th>
                    <th>reclong</th>
                    <th>year</th>
                </tr>
            </thead>
            <tbody className={classes.ScrollBody}>
            {
                data && data.map((meteor: Meteor) => <tr key={meteor.id}>
                    <td>{meteor.fall}</td>
                    <td>{meteor.id}</td>
                    <td>{meteor.mass}</td>
                    <td>{meteor.name}</td>
                    <td>{meteor.nametype}</td>
                    <td>{meteor.recclass}</td>
                    <td>{meteor.reclat}</td>
                    <td>{meteor.reclong}</td>
                    <td>{meteor.year}</td>
                </tr>)
            }
            </tbody>
        </table>
    </div>
};

export default Table;
