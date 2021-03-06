import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import PaletteMetaForm from './paletteMetaForm';
import styles from './styles/paletteFormNavStyles';

class PaletteFormNav extends Component{

    constructor(props){
        super(props);
        this.state={
            formShowing: false
        }
    this.showForm=this.showForm.bind(this);
    this.hideForm=this.hideForm.bind(this);
    }

      showForm(){
        this.setState({ formShowing: true });
      };

      hideForm(){
        this.setState({ formShowing: false });
      }

    render(){
        const { classes, open, palettes, handleSubmit } = this.props;
        const { newPaletteName } = this.state;
        return(
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color="default"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={ this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Create New Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to="/" >
            <Button className={classes.button} variant="contained" color="secondary" >Go Back</Button>
            </Link>
            <Button  className={classes.button} variant="contained" color="primary" onClick={this.showForm}>
              Save Palette
            </Button>
            </div>
        </AppBar>
        { this.state.formShowing && (
        <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm}
         />)}
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);