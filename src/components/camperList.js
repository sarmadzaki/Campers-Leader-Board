import React from "react";
import CamperListItem from "./camperListItem";
const CamperList = ({campers}) => {
    const Items = campers.map(() => {
        return <CamperListItem />
    });
    return (
        <table className="table table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Last 30 Days</th>
                    <th>All time points</th>
                </tr>
            </thead>
            <tbody>
                {/*{Items}*/}
            </tbody>
        </table>
    );
}
export default CamperList;