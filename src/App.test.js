import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Suspense>
      <App />{" "}
    </Suspense>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
