import React, { useState, useRef } from "react";
import { default as t } from "../../../../translations";
import { Row } from "react-bootstrap";
import {
  ToForm,
  FromForm,
  ShipmentDetailsForm,
  AdditionalDetailsForm,
  ItemDetails,
} from "./form-components/FormComponents";
const CustomerToShipper = () => {
  const ref1 = useRef(null);

  const scroll1 = () => ref1.current.scrollIntoView();

  const [form1, setForm1] = useState(false);
  const [form2, setForm2] = useState(false);
  const [form3, setForm3] = useState(false);
  const [form4, setForm4] = useState(false);

  const handleForm1 = (e) => {
    e.preventDefault();
    setForm1(true);
  };

  const handleForm2 = (e) => {
    e.preventDefault();
    setForm2(true);
  };

  const handleForm3 = (e) => {
    e.preventDefault();
    setForm3(true);
  };

  const handleForm4 = (e) => {
    e.preventDefault();
    setForm4(true);
  };

  return (
    <>
      <h2 className="fw-bold">{t("customerToShipper")}</h2>

      <section>
        <Row className="my-2">
          <FromForm
            title={t("from")}
            action={handleForm1}
            buttonaction={scroll1}
          />
        </Row>
      </section>

      <section>
        <div ref={ref1}></div>
        <Row className={form1 ? "my-2" : "d-none"}>
          <ToForm title={t("to")} action={handleForm2} />
        </Row>
      </section>

      <section>
        <Row className={form2 ? "my-2" : "d-none"}>
          <ShipmentDetailsForm action={handleForm3} />
        </Row>
      </section>

      <section>
        <Row className={form3 ? "my-2" : "d-none"}>
          <AdditionalDetailsForm action={handleForm4} />
        </Row>
      </section>

      <section>
        <Row className={form4 ? "my-2" : "d-none"}>
          <ItemDetails />
        </Row>
      </section>
    </>
  );
};

export default CustomerToShipper;
