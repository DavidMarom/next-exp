'use client'
import { useEffect, useState } from 'react';
import { Row } from '@/components';
import http from '../../services/http';
import { PageContainer, SideBar } from '@/components';

const David = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { getData() }, []);

  const getData = async () => {
    setLoading(true);
    const res = await http.get("/api01",);
    setData(res.data);
    setLoading(false);
  }

  return (

    <Row>
      <SideBar />

      <PageContainer>
        <h1>Calling mongoDB</h1>
        {loading ? <p>Calling mongoDB...</p> : <p>Done:</p>}
        {data.map((item, index) => <div key={index}><p>{item.name} - {item.price}</p> </div>)}
      </PageContainer>
    </Row>

  );
}

export default David;
