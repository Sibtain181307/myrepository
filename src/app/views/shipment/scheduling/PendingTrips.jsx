import React from "react";
import { Table, Button, Card } from "react-bootstrap";

import { default as t } from "../../../../translations";

const PendingTrips = () => {
  const celldata = [
    "#",
    t("fromWarehouse"),
    t("creationTime"),
    t("driver"),
    t("vehicle"),
    t("pickups"),
    t("deliveries"),
    t("action"),
  ];

  return (
    <div>
      <h2>{t("pendingTrips")}</h2>

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
            <td>
              {" "}
              <Button variant="success" className="m-1 text-capitalize">
                {t("active")}
              </Button>
            </td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default PendingTrips;
