import { Fragment, useEffect, useState } from 'react';
import http from '../../services/http';

function David() {

const [data, setData] = useState([]);

  useEffect(() => {
    http.get("/api01").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Fragment>
      <h1>Hi2</h1>
      {data && data.map((item, index) => <div key={index}><p>{item.name} - {item.price}</p> </div>    )}
    </Fragment>
  );
}

export default David;
