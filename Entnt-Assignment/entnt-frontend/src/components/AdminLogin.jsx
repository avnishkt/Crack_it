
import { useState } from "react";
import { 
  TextField,
   Button, 
   Box, 
   Typography, 
   Paper,
   InputAdornment,
  IconButton,
  useTheme 
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  //EmailOutlined,
  LockOutlined,
  DarkMode,
  LightMode
} from '@mui/icons-material';

import { useNavigate } from "react-router-dom";
import { useThemeContext } from '../context/ThemeContext';
import axios from "axios";
//import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const colorMode = useThemeContext();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `https://entnt-backend-3.onrender.com/api/login`,
        formData
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      navigate("/admin-dashboard");
    } catch (error) {
      alert("Error logging in: " + error.response.data.error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #ff512f, #dd2476)",
        padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 400,
          width: "100%",
          padding: 4,
          borderRadius: 3,
        }}
      >
        <IconButton
          onClick={colorMode.toggleColorMode}
          sx={{ position: 'absolute', right: 16, top: 16 }}
        >
          {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>

        <Typography
          variant="h4"
          color="primary"
          textAlign="center"
          sx={{
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          Admin Login
        </Typography>
        <Box component="form" noValidate>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            name="password"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleLogin}
            sx={{
              marginTop: 2,
              padding: 1,
              fontWeight: "bold",
              textTransform: "none",
              background: "linear-gradient(to right, #ff512f, #dd2476)",
              "&:hover": {
                background: "linear-gradient(to left, #ff512f, #dd2476)",
              },
            }}
          >
            Login
          </Button>
        </Box>

        <Typography
          variant="body2"
          textAlign="center"
          sx={{ marginTop: 3, color: "gray" }}
        >
          Are you a user?{" "}
          <Button
            onClick={() => navigate("/")}
            sx={{
              textTransform: "none",
              fontWeight: "bold",
              color: "secondary.main",
            }}
          >
           Switch to User Login
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default AdminLogin;