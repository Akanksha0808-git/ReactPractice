import React from 'react';
import { useParams } from 'react-router-dom';
import IDCompo from './IDCompo';

const DynamicComponent = () => {
  const data = useParams( IDCompo);

  return <div>This is the Dynamic Component with ID: {data.id}</div>;
};

export default DynamicComponent;
