import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Paper, 
  Grid 
} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  border: `1px solid ${theme.palette.divider}`,
}));

const UnauthorizedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(2),
  textTransform: 'none',
  fontWeight: 'bold',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  }
}));

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  if (!token || !allowedRoles.includes(role)) {
    return (
      <Container maxWidth="sm">
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          <StyledPaper elevation={3}>
            <Grid container spacing={2} direction="column" alignItems="center">
              <Grid item>
                <LockIcon 
                  sx={{ 
                    fontSize: 80, 
                    color: 'error.main',
                    mb: 2 
                  }} 
                />
              </Grid>
              
              <Grid item>
                <Typography 
                  variant="h4" 
                  color="primary" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 2
                  }}
                >
                  Unauthorized Access
                </Typography>
              </Grid>
              
              <Grid item>
                <Typography 
                  variant="subtitle1" 
                  color="textSecondary" 
                  sx={{ 
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  You do not have permission to access this page. 
                  Please log in with the appropriate credentials.
                </Typography>
              </Grid>
              
              <Grid item>
                <UnauthorizedButton
                  variant="contained"
                  color="error"
                  startIcon={<ArrowBackIcon />}
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("role");
                    navigate("/");
                  }}
                >
                  Back to Login
                </UnauthorizedButton>
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>
      </Container>
    );
  }

  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoute;
//export default ProtectedRoute;