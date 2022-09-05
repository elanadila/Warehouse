
import React, { useEffect, useState } from 'react';
import  { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Typography, Container } from '@mui/material';
import Page from '../components/Page';

const ContentStyle = styled('div')(() => ({
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));


const User = ()  => {

  const [WarehouseReps, setUser] = useState([]);
  

  useEffect(() => {
    fetch(`https://api.belajartableau.com/api/WarehouseReps/${id}`)
      .then((response) => response.json())
      .then((json) => setUser(json))

  }, []);

  const {id} = useParams()

  console.log(WarehouseReps)
  
  return (
    <Page title="Detail">
      <Container>
        <ContentStyle sx={{ textAlign: 'left', alignItems: 'left' }}>
          <Typography variant="h4" paragraph>
            Detail Location Warehouse - Retail
          </Typography>

          <Typography sx={{ color: 'text.primary' }}>
            Warehouse ID : {WarehouseReps.WarehouseID}
          </Typography>

          <Typography sx={{ color: 'text.primary' }}>
            Last Sync : {WarehouseReps.LastSync}
          </Typography>

          <Typography sx={{ color: 'text.primary' }}>
            Branch : {WarehouseReps.Branch}
          </Typography>

          <Typography sx={{ color: 'text.primary' }}>
            Last Modified Date Time : {WarehouseReps.LastModifiedDateTime}
          </Typography>

        </ContentStyle>
      </Container>
    </Page>
  
    
  );
};

export default User
