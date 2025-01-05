import { useState } from "react";
import { 
  TextField, 
  Button, 
  Box, 
  Typography, 
  Container, 
  Paper, 
  IconButton, 
  InputAdornment,
  useTheme,
} from "@mui/material";
import { 
  Visibility, 
  VisibilityOff, 
  PersonAdd, 
  EmailOutlined, 
  LockOutlined ,
  DarkMode,
  LightMode,
} from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../context/ThemeContext';
import { styled } from "@mui/material/styles";

const BackgroundBox = styled(Box)({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(3),
  width: '100%',
  maxWidth: 450,
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
}));

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useThemeContext();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post(`https://entnt-backend-3.onrender.com/api/register`, formData);
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      alert("Error registering user: " + error.response.data.error);
    }
  };

  return (
    <BackgroundBox>
      <Container maxWidth="xs">
        <StyledPaper elevation={3}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 3 
          }}
          >
            <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
            <PersonAdd 
              sx={{ 
                fontSize: 60, 
                color: 'primary.main', 
                mb: 2 
              }} 
            />
            <Typography 
              component="h1" 
              variant="h4" 
              sx={{ 
                fontWeight: 'bold', 
                color: 'primary.main' 
              }}
            >
              Create Account
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              sx={{ mt: 1 }}
            >
              Sign up to get started
            </Typography>
          </Box>

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlined color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{ 
              mt: 3, 
              py: 1.5, 
              borderRadius: 2,
              fontWeight: 'bold',
              textTransform: 'none'
            }}
            onClick={handleRegister}
          >
            Register
          </Button>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            mt: 3 
          }}>
            <Typography variant="body2" color="textSecondary">
              Already have an account?
            </Typography>
            <Button
              color="primary"
              sx={{ ml: 1, textTransform: 'none' }}
              onClick={() => navigate("/")}
            >
              Login here
            </Button>
          </Box>
        </StyledPaper>
      </Container>
    </BackgroundBox>
  );
};

export default Register;