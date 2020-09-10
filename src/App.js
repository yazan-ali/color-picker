import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import seedColors from './seedColor';
import { generatePalette } from './colorHelpers';
import Palette from './palette';
import SingleColorPalette from './SingleColorPalette';
import PaletteList from './paletteList';
import NewPaletteForm from './newPaletteForm';

class App extends Component{

  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palette"));
    this.state={ palette: savedPalettes || seedColors }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  findPalette(id){
   return this.state.palette.find(function(palette){
    return palette.id === id
    });
  };

  deletePalette(id){
    this.setState(st => ({palette: st.palette.filter(palette => palette.id !== id)}),
    this.syncLocalStorge
    );
  }

  savePalette(newPalette){
    this.setState({palette: [...this.state.palette, newPalette] }, this.syncLocalStorge);
  };

  syncLocalStorge(){
    window.localStorage.setItem("palette", JSON.stringify(this.state.palette));
  };

  render(){
    return(
      <Switch>
      <Route exact path="/" render={(routeProps) => <PaletteList palette={this.state.palette} deletePalette={this.deletePalette} {...routeProps} />} />
      <Route exact path="/palette/new"  render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} palettes={this.state.palette} {...routeProps} /> }/>
      <Route exact path="/palette/:id" render={(routeProps) => 
      <Palette 
      palette={generatePalette(this.findPalette(routeProps.match.params.id)
        )} 
      /> 
      }  
      />
      <Route exact path="/palette/:paletteId/:colorId" render={(routeProps) => 
      <SingleColorPalette  
      palette={generatePalette(this.findPalette(routeProps.match.params.paletteId)
        )} 
        colorId={routeProps.match.params.colorId}
      /> 
      }/>
      </Switch>
    );
  }
}

export default App;
