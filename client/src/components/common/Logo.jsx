import { Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Logo = () => {
  const theme = useTheme();
   const navigate = useNavigate();
  return (
    <Typography fontWeight="700" fontSize="1.7rem" sx={{ cursor: "pointer" }} onClick ={() => navigate("/")}>
      Movie<span style={{ color: theme.palette.primary.main }}>Verse</span>
    </Typography>
  );
};

export default Logo;