import React from 'react';
import styles from './styles/paletteFooterStyles';
import { withStyles } from '@material-ui/styles';



function paletteFooter(props){
    const {paletteName, emoji, classes} = props;
    return (
        <footer className={classes.PaletteFooter}>
          {paletteName}
          <span className={classes.emoji}> {emoji} </span>
        </footer>
    )
}

export default withStyles(styles)(paletteFooter);
