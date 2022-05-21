import { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

export const TasksProgress = (props) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if(props.data.length > 0) {
      calculateProgress()
    }
  }, [props.data])

  const calculateProgress = () => {
    const numbersToDo = props.data.length
    const numbersDone = props.countDone
    const porcent = Math.round((numbersDone/numbersToDo) * 100)
    setProgress(porcent)
  }

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              TASKS PROGRESS
            </Typography>
            <Typography color="textPrimary" variant="h3">
              {progress}%
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "warning.main",
                height: 56,
                width: 56,
              }}
            >
              <PublishedWithChangesIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3 }}>
          <LinearProgress value={progress} variant="determinate" />
        </Box>
      </CardContent>
    </Card>
  );
};
