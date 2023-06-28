'use client'
import { useEffect, useState } from 'react';
import { Row } from '@/components';
import http from '../../services/http';
import cleanup from '../../services/http';
import { PageContainer, SideBar } from '@/components';

const Catalog = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await http.get("/api01");
    setData(res.data);
  }, []);

  return (

    <Row>
      <SideBars />

      <PageContainer>
        <h1>Catalog</h1>
        <p>Calling mongoDB...</p>
        {data && data.map((item, index) => <div key={index}><p>{item.name} - {item.price}</p> </div>)}
      </PageContainer>
    </Row>

  );
}

export default Catalog;
