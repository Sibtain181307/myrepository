import React from "react";
import { Table, Card } from "react-bootstrap";

import { default as t } from "../../../../translations";

const CompletedTrips = () => {
  const celldata = [
    "#",
    t("fromWarehouse"),
    t("creationTime"),
    t("dispatchTime"),
    t("checkInTime"),
    t("pickups"),
    t("deliveries"),
    t("codCollection"),
    t("action"),
  ];

  return (
    <div>
      <h2>{t("completedTrips")}</h2>

      <Card elevation={6} className="w-100 overflow-auto">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              {celldata.map((item) => (
                <th className="pl-sm-24">{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};
export default CompletedTrips;
