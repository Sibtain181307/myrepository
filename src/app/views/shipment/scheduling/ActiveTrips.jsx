import React from "react";
import { Table, Button, Card } from "react-bootstrap";

import { default as t } from "../../../../translations";

const ActiveTrips = () => {
  const celldata = [
    "#",
    t("fromWarehouse"),
    t("creationTime"),
    t("dispatchTime"),
    t("lastUpdate"),
    t("pickups"),
    t("deliveries"),
    t("collectedCod"),
    t("action"),
  ];

  return (
    <div>
      <h2>{t("activeTrips")}</h2>
      <Card elevation={6} className="w-100 overflow-auto">
        <Table style={{ minWidth: 750 }}>
          <thead>
            <tr>
              {celldata.map((item) => (
                <>
                  <th>{item}</th>
                </>
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
            <td>
              {" "}
              <Button variant="success" className="m-1 text-capitalize">
                {t("complete")}
              </Button>
            </td>
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default ActiveTrips;
