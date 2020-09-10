import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component{

    constructor(props){
        super(props);
        this.state={
            stage: "form",
            newPaletteName: ""
        };
        this.handleChange=this.handleChange.bind(this);
        this.showEmojiPicker=this.showEmojiPicker.bind(this);
        this.savePalette=this.savePalette.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
        this.props.palettes.every(
          ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
        )
      );
      }
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      handleChange(evt){
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }

      showEmojiPicker(){
          this.setState({ stage: "emoji" });
      }

      savePalette(emoji){
          const newPalette = {paletteName: this.state.newPaletteName, emoji: emoji.native}
          this.props.handleSubmit(newPalette);
      }
    
      render() {
          const { newPaletteName } = this.state;
          const { handleSubmit, hideForm } = this.props;
        return (
            <div>
            <Dialog open={ this.state.stage === "emoji" } onClose={hideForm}>
                <DialogTitle>Choose palette emoji</DialogTitle>
               <Picker onSelect={ this.savePalette } />
            </Dialog>
            <Dialog
              open={ this.state.stage === "form" }
              onClose={hideForm}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Choose a palette name</DialogTitle>
              <ValidatorForm onSubmit={ this.showEmojiPicker }  ref="form">
              <DialogContent>
                <DialogContentText>
                  Please enter a name for your new palette
                </DialogContentText>
            <TextValidator 
            label="Palette Name" 
            value={this.state.newPaletteName} 
            name="newPaletteName" 
            fullWidth
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={"Enter Name Palette", "Palette name already taken"}
            />
              </DialogContent>
              <DialogActions>
                <Button onClick={hideForm} color="primary">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">Save Palette</Button>
              </DialogActions>
              </ValidatorForm>
            </Dialog>
            </div>
        );
      }

}

export default PaletteMetaForm;