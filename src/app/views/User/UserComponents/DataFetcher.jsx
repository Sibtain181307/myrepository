import React, { useState, useEffect } from "react";

import axios from "axios";

const DataFetcher = (props) => {
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get(props.url, {
          headers: {
            SessionKey: "123",
            Event: props.event,
            id: props.idsetter,
          },
        })
        .then((res) => {
          props.Data(res.data.data);
          if (res.status === 200) {
            return res;
          } else {
            throw new Error(res);
          }
        })
        .catch((err) => {
          throw err;
        });
    };
    fetch();
  }, []);

  return null;
};
export default DataFetcher;
