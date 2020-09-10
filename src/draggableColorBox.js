import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/draggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
    const { classes, name, color, handleClick } = props;
    return(
        <div className={classes.root} style={{backgroundColor: color}}>
            <div className={classes.boxContent}>
            <span>{name}</span>
            <DeleteIcon className={classes.delete} onClick={handleClick} />
            </div>
        </div>
    );
})

export default withStyles(styles)(DraggableColorBox);