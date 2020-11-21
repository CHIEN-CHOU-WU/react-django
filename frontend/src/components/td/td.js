import React, { useEffect, useState, setState } from "react";

import axios from "axios";

function TdAmeritrade() {
  const [state, setResult] = useState({
    GOOG: [],
  });

  const click = () => {
    axios
      .get(
        "https://api.tdameritrade.com/v1/marketdata/GOOG/quotes?apikey=NPJBMUYTIITL7A46GN6GNB2FXVEPMMQL"
      )
      .then(res => {
        //setResult({ GOOG: res.data.GOOG});
        // setResult(res.data);
        console.log(res.data.GOOG);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <p>TdAmeritrade</p>
      <button onClick={click}>Click</button>
    </React.Fragment>
  );
}

export default TdAmeritrade;
