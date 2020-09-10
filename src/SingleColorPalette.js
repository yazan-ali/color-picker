import React, { Component } from 'react';
import ColorBox from './colorBox';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import styles from './styles/paletteStyle';
import { withStyles } from '@material-ui/styles';
import PaletteFooter from './paletteFooter';


class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this.state={ format: "hex" }
        this.changeColorFormat = this.changeColorFormat.bind(this);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }
    gatherShades(palette, colorFilterBy){
        let shades = [];
        let allColors = palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorFilterBy)
            );
        }
        return shades.slice(1);
    }
    changeColorFormat(val){
        this.setState({format: val});
      }
    render(){
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} color={color[this.state.format]} showingFullPalette={false} />
        ))
        return(
        <div className={classes.Palette}>
             <Navbar handleFormatChange={this.changeColorFormat} showSlider={false} />
           <div className={classes.PaletteColors}>
             {colorBoxes}
             <div className={classes.goBack}>
                 <Link to={`/palette/${id}`} >GO BACK</Link>
             </div>
           </div>
           <PaletteFooter paletteName={paletteName} emoji={emoji} />
        </div>

        );
    }
}
export default withStyles(styles)(SingleColorPalette);