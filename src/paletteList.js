import React, { Component } from 'react';
import styles from './styles/paletteListStyles';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './miniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component{
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    render(){
        const { classes ,palette, deletePalette } =this.props;
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                      <h1>React Colors</h1>
                      <Link to="/palette/new">Create new palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                       {palette.map(palette => (
                       <MiniPalette {...palette}
                       key={palette.id}
                       id={palette.id}
                       handleClick={() => this.goToPalette(palette.id)}
                       handleDelete={deletePalette}
                       />
                       ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);