import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import CircularProgress from "@mui/material/CircularProgress";

export const GraphicData = (props) => {
  const [todo, setTodo] = useState(0)
  const [done, setDone] = useState(0)

  useEffect(() => {
    if(props.data.length > 0) {
      calculateProgress()
    }
  }, [props.data])

  const calculateProgress = () => {
    const numbersToDo = props.data.length
    const porcentTodo = Math.round((props.countToDo/numbersToDo) * 100)
    const porcentDone = Math.round((props.countDone/numbersToDo) * 100)

    setTodo(porcentTodo)
    setDone(porcentDone)
  }

  const devices = [
    {
      title: "To Do",
      value: todo,
      icon: WatchLaterIcon,
      color: "#E53935",
    },
    {
      title: "Done",
      value: done,
      icon: DoneAllIcon,
      color: "#3F51B5",
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title="Status of Learning" />
      <Divider />
      <CardContent>
          <Box sx={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
            <CircularProgress variant="determinate" size={100} value={todo} color="error" />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {todo}%
            </Box>
          </Box>
          <Box sx={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <CircularProgress variant="determinate" size={100} value={done} color="success" />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {done}%
            </Box>
          </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
