import { useState, useEffect } from "react";
import { Box, Container, Grid } from '@mui/material';
import { TasksCount } from '../components/tasks-count';
import { GraphicData } from '../components/graphic-data';
import { TasksTable } from '../components/tasks-table';
import { TasksProgress } from '../components/tasks-progress';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DoneIcon from '@mui/icons-material/Done';

export const Dashboard = () => {
  const [thingsToLearn, setThingsToLearn] = useState([]);
  const [countToDo, setCountToDo] = useState(0)
  const [countDoing, setCountDoing] = useState(0)
  const [countDone, setCountDone] = useState(0)

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((payload) => {
        if (payload.length > 0) {
          countTasks(payload)
          setThingsToLearn(payload)
        }
      });
  }, [])

  const countTasks = (tasks) => {
    let numbersToDo = 0
    let numbersDoing = 0
    let numbersDone = 0

    tasks.forEach(item => {
      if (item.label.Status.select.id === '1') {
        numbersToDo++
      }
      if (item.label.Status.select.id === '2') {
        numbersDoing++
      }
      if (item.label.Status.select.id === '3') {
        numbersDone++
      }
    })

    setCountToDo(numbersToDo)
    setCountDoing(numbersDoing)
    setCountDone(numbersDone)
  }

  return (<Box
    component="main"
  >
    <Container >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <TasksCount title="TO DO" color="error.main" icon={<WatchLaterIcon color="#121828"/>} data={countToDo} />
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <TasksCount title="DOING" color="warning.main" icon={<DoneIcon />} data={countDoing} sx={{ height: '100%' }} />
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <TasksCount title="DONE" color="success.main" icon={<DoneAllIcon />} data={countDone} sx={{ height: '100%' }} />
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          sm={6}
          xs={12}
        >
          <TasksProgress data={thingsToLearn} countDone={countDone} />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={12}
        >
          <TasksTable data={thingsToLearn} />
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xl={3}
          xs={12}
        >
          <GraphicData data={thingsToLearn} countToDo={countToDo} countDoing={countDoing} countDone={countDone}/>
        </Grid>
      </Grid>
    </Container>
  </Box>)
}