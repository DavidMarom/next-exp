import { Fragment, useEffect, useState } from 'react';
import http from '../../services/http';

function David() {

const [data, setData] = useState([]);

  useEffect(() => {
    http.get("/api01").then((response) => {
      setData(response.data.items);
    });
  }, []);


  return (
    <Fragment>
      <h1>Hi</h1>
      {data && data.map((item, index) => <p key={index}>{item.item}</p>)}
    </Fragment>
  );
}

export default David;
