'use client'
import { useEffect, useState } from 'react';
import { Row } from '@/components';
import http from '../../services/http';
import { PageContainer, SideBar } from '@/components';
import Link from 'next/link';

const David = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await http.get("/api01");
    setData(res.data);
  }, []);

  return (
    
    <Row>
      <SideBar background='#ffaaaa'>
        <Link href="/">Home</Link>
        <Link href="/david">Mongo test</Link>
      </SideBar>

      <PageContainer>
        <h1>Hi2</h1>
        <p>Calling mongoDB...</p>
        {data && data.map((item, index) => <div key={index}><p>{item.name} - {item.price}</p> </div>)}
      </PageContainer>
    </Row>
    
  );
}

export default David;