import * as React from 'react';
import { useParams } from 'react-router-dom';
import { AppLayout } from '#layouts';
import { DetailContainer } from '#pods/detail';

export const DetailScene = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <AppLayout>
      <DetailContainer id={id} />
    </AppLayout>
  );
};
