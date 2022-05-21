import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const TasksCount = (props) => {

  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="overline">
              {props.title}
            </Typography>
            <Typography color="textPrimary" variant="h1">
              {props.data}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor:`${props.color}`,
                height: 56,
                width: 56,
              }}
            >
              {props.icon}
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
