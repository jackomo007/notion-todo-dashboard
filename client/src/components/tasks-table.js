import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

export const TasksTable = (props) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if(props.data.length > 0) {
      formatTasks()
    }
  }, [props.data])

  const formatTasks = () => {
    const todo = []
    const doing = []
    const done = []
    const final = []

    props.data.forEach(item => {
      if (item.label.Status.select.id === '1' ) {
        todo.push(item.label.Name.title[0].plain_text)
      }
      if (item.label.Status.select.id === '2' ) {
        doing.push(item.label.Name.title[0].plain_text)
      }
      if (item.label.Status.select.id === '3' ) {
        done.push(item.label.Name.title[0].plain_text)
      }
    })

    for (let index = 0; index < props.data.length; index++) {
      if(todo[index] !== undefined || doing[index] !== undefined || done[index] !== undefined) {
        final.push({active: todo[index] || '', doing: doing[index] || '', done: done[index] || ''}) 
      }
    }
    setTasks(final)
  }
  return (
    <Card {...props}>
      <CardHeader title="Things To Learn" />
      <Box sx={{ minWidth: 750 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>To do</TableCell>
              <TableCell>Doing</TableCell>
              <TableCell>Done</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow hover key={index}>
                <TableCell>{task.active}</TableCell>
                <TableCell>{task.doing}</TableCell>
                <TableCell>{task.done}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  );
};
