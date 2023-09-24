import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LandscapeIcon from "@mui/icons-material/Landscape";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
export const navData = [
  {
    id: 0,
    icon: <HomeIcon />,
    text: "Home",
    link: "/",
  },
  {
    id: 1,
    icon: <LandscapeIcon />,
    text: "Transfer steps",
    link: "data",
  },
  {
    id: 2,
    icon: <AssignmentTurnedInIcon />,
    text: "Checklist",
    link: "list",
  },
  {
    id: 3,
    icon: <CircleNotificationsIcon />,
    text: "Notifications",
    link: "settings",
  },
];