import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, loadTasks } from "../store/tasks";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = () => {

    const { tasks, loading } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (task) => () => {
      const currentIndex = checked.indexOf(task);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(task);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      setChecked(newChecked);
    };

    function removeTask(task){
        console.log(task);
        dispatch(deleteTask({ task: task }));
    }

   

    useEffect(() => {
        dispatch(loadTasks());
    }, []);
    // return (
    //     <>
    //         {loading ? (
    //             <p>Loading...</p>
    //         ) : (
    //             <div>
    //                 {tasks.map((task) => (
    //                     <p key={task.id}>{task.task}</p>
    //                 ))}
    //             </div>
    //         )}
    //     </>
    // );
    return (
        <>
         {loading ? (
                 <p>Loading...</p>
            ) : (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {tasks.map((task) => {
            const labelId = `checkbox-list-label-${task.id}`;
    
            return (
              <ListItem
                key={task.id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments" onClick={()=>removeTask(task)}>
                    {/* <CommentIcon /> */}
                    < DeleteIcon/>
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} onClick={handleToggle(task.task)} dense>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(task) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ 'aria-labelledby': labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${task.task}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
        )}
        </>
      );
};

export default Tasks;
