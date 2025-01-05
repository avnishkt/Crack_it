
import { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Typography,
  Box,
  Card,
  Tooltip,
  Chip,
  IconButton,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import CommunicationModal from "../components/CommunicationModal";
import CommunicationCalendar from "../components/CommunicationCalendar";
import { useNavigate } from "react-router-dom";
import { DarkMode, LightMode } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';
import axios from "axios";
//import '../App.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[10],
  },
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4],
  background: theme.palette.background.Box,
}));

const UserDashboard = () => {
  const [username, setUsername] = useState("");
  const [communications, setCommunications] = useState([]);
  const [over, setOver] = useState([]);
  const [today, setToday] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState([]);
  const [selected, setSelected] = useState(false);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useThemeContext();

  const handleEdit = (communication) => {
    console.log("Editing:", communication);
    // Implement edit functionality (e.g., open a modal for editing)
  };

  const handleDelete = (id) => {
    console.log("Deleting communication with id:", id);
    setCommunications((prev) =>
      prev.filter((comm) => comm.id !== id)
    );
  };

  



  
  const handleCommunicationPerformed = () => {
    const selectedCompanies = rowSelectionModel.map((selectedId) => {
      const selectedRow = communications.find((row) => row._id === selectedId);
      return { name: selectedRow.company.name };
    });
  
    setSelectedCompanyId(selectedCompanies);
    setOpenModal(true);
  };
  

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  

  const handleLogCommunication = async (data) => {
    try {
      // Update local state
      data.company.forEach((el) => {
        setCommunications((prev) => [
          ...prev,
          {
            company: { name: el.name },
            date: data.date,
            type: { name: data.type },
            notes: data.notes,
          },
        ]);
      });
  
      // Prepare payload for backend
      const payload = data.company.map((el) => ({
        companyName: el.name,
        date: data.date,
        type: data.type,
        notes: data.notes,
      }));
  
      // Send data to backend
      await axios.post(
        `https://entnt-backend-3.onrender.com/api/save-communication`,
        { communications: payload }
      );
    } catch (error) {
      console.error("Error saving communication data:", error);
    }
  };
  

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedName = localStorage.getItem("username");
        if (storedName) {
          setUsername(storedName);
        } else {
          const response = await axios.get(
            `https://entnt-backend-3.onrender.com/api/user-info`
          );
          setUsername(response.data.username); // Adjust based on your API response
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const communicationsData = await axios.get(
          `https://entnt-backend-3.onrender.com/api/communications-user`
        );
        setCommunications(communicationsData.data);

        const notifications = await axios.get(
          `https://entnt-backend-3.onrender.com/api/notifications`
        );
        setOver(notifications.data.filter((n) => n.type === "overdue"));
        setToday(notifications.data.filter((n) => n.type === "due today"));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const columns = [
    {
      field: "name",
      headerName: "Company Name",
      width: 200,
      renderCell: (params) => (
        <Box>
          <Typography>{params.row.company.name}</Typography>
        </Box>
      ),
    },
    {
      field: "lastCommunications",
      headerName: "Last 5 Communications",
      width: 300,
      renderCell: (params) => (
        <Box>
          <Tooltip title={params.row.notes}>
            <Typography>{`${params.row.type} - ${new Date(
              params.row.date
            ).toLocaleDateString()}`}</Typography>
          </Tooltip>
        </Box>
      ),
    },
    {
      field: "nextCommunication",
      headerName: "Next Scheduled Communication",
      width: 300,
      renderCell: (params) => {
        const nextDate = new Date(params.row.date);
        nextDate.setDate(nextDate.getDate() + 5);
        return <Typography>{nextDate.toLocaleDateString()}</Typography>;
      },
    },
  ];

  return (
    
    
      <Box
          p={3}
          sx={{
            background: "linear-gradient(135deg, #f0f4f8, #e7efff)",
            minHeight: "100vh",
            color: "#2c3e50",
          }}
      >
          <Box display="flex" justifyContent="flex-end" mb={2}>

          
            <Button
              onClick={handleLogout}
              sx={{
                background: "linear-gradient(90deg, #1fd1f9, #b621fe)",
                color: "white",
                borderRadius: "5px",
                padding: "0.5rem 1.5rem",
                fontWeight: "bold",
                fontSize: "16px",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)",
                  zIndex: -1,
                  transition: "all 0.3s ease",
                },
                "&:hover": {
                  boxShadow:
                    "4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3)",
                },
                "&:hover:after": {
                  transform: "scale(2) rotate(180deg)",
                },
              }}
            >
              Logout
            </Button>


              <IconButton
                onClick={colorMode.toggleColorMode}
                  sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    '&:hover': {
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    }
                  }}
              >
                  {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
                </IconButton>

        </Box>



      {/* Dashboard Header */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Welcome back {username || "User"}!
      </Typography>
      
      {/* Notifications */}
      <Box mb={4}>
      <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              display="flex"
              alignItems="center"
              color="text.primary"
            >
            <NotificationsActiveIcon sx={{ mr: 2, color: "warning.main" }} />
              Notifications
            </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <StyledCard>
                  <Box p={3}  sx={{   borderRadius: "15px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/006/868/934/non_2x/abstract-purple-fluid-wave-background-free-vector.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            color: "white",
                           }}
                  
                  >
                    <Typography variant="h6" fontWeight="bold" color="error.main" gutterBottom>
                      Overdue Communications
                      <Chip
                        label={over.length}
                        color="error"
                        size="small"
                        sx={{ ml: 2,  }}
                      />
                    </Typography>
                    {over.length > 0 ? (
                      over.map((x, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          color="white"
                          sx={{ mb: 1, 
                           }}
                        >
                          {x.company.name} - {x.message}
                        </Typography>
                      ))
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        No overdue communications
                      </Typography>
                    )}
                  </Box>
                </StyledCard>
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledCard >
                  <Box p={3}  sx={{   borderRadius: "15px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/006/868/934/non_2x/abstract-purple-fluid-wave-background-free-vector.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            color: "white",
                           }}
                  
                  >
                    <Typography variant="h6" fontWeight="bold" color="primary.main" gutterBottom>
                      Today&apos;s Communications
                      <Chip
                        label={today.length}
                        color="primary"
                        size="small"
                        sx={{ ml: 2 }}
                      />
                    </Typography>
                    {today.length > 0 ? (
                      today.map((x, idx) => (
                        <Typography
                          key={idx}
                          variant="body2"
                          color="white"
                          sx={{ mb: 1,  }}
                        >
                          {x.company.name} - {x.message}
                        </Typography>
                      ))
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        No communications due today
                      </Typography>
                    )}
                  </Box>
                </StyledCard>
              </Grid>
            </Grid>
          
      </Box>
      
      

            <Box
              p={2}
              display="flex"
              alignItems="center"
              borderBottom={1}
              borderColor="divider"
            >
              <EventIcon sx={{ mr: 2, color: "success.main" }} />
              <Typography variant="h5" fontWeight="bold" color="text.primary">
                Communication History
              </Typography>
            </Box>


            {/* Communication History */}

      <Box mb={3}>
      <DataGrid
  rows={communications}
  getRowId={(row) => row._id || `${row.company?.name}-${row.date}-${row.type?.name}`}
  columns={columns}
  pageSize={5}
  checkboxSelection
  disableSelectionOnClick
  onRowSelectionModelChange={(newSelection) => {
    setRowSelectionModel(newSelection);
    setSelected(newSelection.length > 0);
  }}
  // sx={{
  //   background: "#fff",
  //   borderRadius: "10px",
  //   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  // }}
  rowSelectionModel={rowSelectionModel}
              sx={{
                border: 'none',
                '& .MuiDataGrid-cell': {
                  borderColor: theme.palette.divider,
                },
                '& .MuiDataGrid-columnHeaders': {
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  borderBottom: `1px solid ${theme.palette.divider}`,
                },
                '& .MuiDataGrid-row:hover': {
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                }
              }}
/>

    
      </Box>
      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          onClick={() => setShowCalendar((prev) => !prev)}
          // sx={{
          //   borderRadius: "30px",
          //   background: "linear-gradient(90deg, #8e44ad, #9b59b6)",
          //   color: "white",
          //   padding: "0.5rem 2rem",
          //   "&:hover": {
          //     background: "linear-gradient(90deg, #732d91, #8e44ad)",
          //  
          disabled={!selected}
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            px: 3,
            py: 1.5,
            boxShadow: theme.shadows[4],
            '&:hover': {
              boxShadow: theme.shadows[8],
            },
          }}
        >
          See Communication Calendar
        </Button>
      </Box>
      {showCalendar && (
        
          
           <Box mt={4} textAlign="center" p-={3}  borderRadius={4} > 
           <Button
            variant="contained"
            color="primary"
            onClick=  {handleCommunicationPerformed}
              disabled={!selected}
              sx={{
                borderRadius: "8px",
                textTransform: "none",
                px: 3,
                py: 1.5,
                boxShadow: theme.shadows[4],
                '&:hover': {
                  boxShadow: theme.shadows[8],
                }
              }}
            
            
            
          >
             Log Communication 
          </Button>
          <CommunicationCalendar communications={communications} />
        </Box>
      )}
       <CommunicationModal
            open={openModal}
            onClose={handleCloseModal}
            onSubmit={handleLogCommunication}
            company={selectedCompanyId}
          />

<CommunicationCalendar
      communications={communications}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
    </Box>
  );
};

export default UserDashboard;