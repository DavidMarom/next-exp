'use client'
import { Row, useEffect, useState } from 'react';
import http from '../../services/http';
import { PageContainer, SideBar } from '@/components';
import Link from 'next/link';

const David = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await http.get("/api01");
    console.log(res.data);
    setData(res.data);
  }, []);

  return (
    <Row>
      {/* <SideBar background='#ffaaaa'>
        <Link href="/david">Mongo test</Link>
      </SideBar> */}

      <PageContainer>
        <h1>Hi2</h1>
        <p>Calling mongoDB...</p>
        {data && data.map((item, index) => <div key={index}><p>{item.name} - {item.price}</p> </div>)}
      </PageContainer>
    </Row>
  );
}

export default David;
