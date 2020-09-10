import React, { Component } from 'react';
import ColorBox from './colorBox';
import Navbar from './navbar';
import styles from './styles/paletteStyle';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from './paletteFooter';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state={level: 500, format: "hex"};
        this.changeLevel=this.changeLevel.bind(this);
        this.changeColorFormat=this.changeColorFormat.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level: newLevel});
    }

    changeColorFormat(val){
      this.setState({format: val});
    }

    render(){
        const {colors, paletteName, emoji, id} = this.props.palette;
        const {classes} = this.props;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox color={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id}  moreUrl={`/palette/${id}/${color.id}`}
            showingFullPalette={true}  />
        ))
        return(
        <div className={classes.Palette}>
            <Navbar level={level} changeLevel={this.changeLevel} handleFormatChange={this.changeColorFormat} showSlider={true} />
            <div className={classes.PaletteColors}>
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>
        );
    }
}
export default withStyles(styles)(Palette);