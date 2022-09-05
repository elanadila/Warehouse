
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import Page from '../components/Page';

const ContentStyle = styled('div')(() => ({
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));


const columns = [
  { field: 'WarehouseID', headerName: 'Warehouse ID', width: 150, renderCell: (params) => {
    return <Link component={RouterLink} to={`/dashboard/products/${params.value}`}>{params.value}</Link>
  } },
  { field: 'Branch', headerName: 'Branch', width: 150 },
  { field: 'Active', headerName: 'Active', width: 150 },
  { field: 'Description', headerName: 'Description', width: 150 },
  { field: 'LastSync', headerName: 'Last Sync', width: 150 },
];

const User = () => {

  const [WarehouseReps, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.belajartableau.com/api/WarehouseReps')
      .then((response) => response.json())
      .then((json) => setUsers(json))

  }, []);

  console.log(WarehouseReps)

  
  return (
    <Page title="Warehouse">
      <Container>
        <ContentStyle sx={{ textAlign: 'left', alignItems: 'left' }}>
          <Typography variant="h4" paragraph>
            Warehouse
          </Typography>

          <DataGrid 
          rows={WarehouseReps}
          columns={columns}
          getRowId={(row) => row.WarehouseID}
          loading={!WarehouseReps.length}
        /> 
        </ContentStyle>
      </Container>
    </Page>

          
    
  );
};

export default User
