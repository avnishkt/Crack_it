//import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyManagement from "./CompanyManagement";
import CommunicationMethodManagement from "./CommunicationManagement";
import { 
  Button, 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper,
  Divider
} from "@mui/material";

import { styled } from "@mui/material/styles";
import LogoutIcon from '@mui/icons-material/Logout';
//import { useThemeContext } from '../context/ThemeContext';
import DashboardIcon from '@mui/icons-material/Dashboard';

// Custom styled components
const CleanPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: theme.spacing(3),
  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
  border: `1px solid ${theme.palette.divider}`,
  transition: 'box-shadow 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 15px rgba(0,0,0,0.12)',
  }
}));

const StyledLogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  }
}));

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ 
        backgroundColor: 'background.default',
        borderRadius: 3,
        p: 4,
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        {/* Header Section */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 4,
          pb: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <DashboardIcon color="primary" fontSize="large" />
            <Typography variant="h4" fontWeight="600" color="primary">
              Admin Dashboard
            </Typography>
          </Box>

          <StyledLogoutButton 
            variant="contained" 
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </StyledLogoutButton>
        </Box>

        <Divider sx={{ mb: 4 }} />

        {/* Management Sections */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CleanPaper elevation={0}>
              <Typography 
                variant="h6" 
                color="primary" 
                sx={{ mb: 2, fontWeight: 600 }}
              >
                Company Management
              </Typography>
              <CompanyManagement />
            </CleanPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <CleanPaper elevation={0}>
              <Typography 
                variant="h6" 
                color="primary" 
                sx={{ mb: 2, fontWeight: 600 }}
              >
                Communication Management
              </Typography>
              <CommunicationMethodManagement />
            </CleanPaper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;