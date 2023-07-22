'use client'
import { useEffect, useState } from 'react';
import { Row } from '@/components';
import http from '../../services/http';
import { PageContainer, SideBar } from '@/components';

const David = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => { getData() }, []);

  const getData = async () => {
    setLoading(true);
    const res = await http.get("/api01",);
    setData(res.data);
    setLoading(false);
  }

  return (

    <Row>

      <PageContainer>
        <h1>Calling mongoDB</h1>
        {loading ? <p>Calling mongoDB...</p> : <p>Done:</p>}
        {data.map((item, index) => <div key={index}><p>{item.name} - {item.price}</p> </div>)}
        <br />
        <h1>Inserting data</h1>
        <p>Name: </p><input type="text" onChange={(e) => setName(e.target.value)} />
        <p>Price: </p><input type="number" onChange={(e) => setPrice(e.target.value)} />
        <button onClick={async () => {
          const res = await http.post("/api01", { name, price });
          console.log(res);
          getData();
        }}>Insert</button>
        
      </PageContainer>
    </Row>

  );
}

export default David;
