import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from "./styles/colorBoxStyles";
import { withStyles } from '@material-ui/styles';


class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state = { copied:false }
        this.ChangeCopyState = this.ChangeCopyState.bind(this);
    }

    ChangeCopyState(){
        this.setState({copied:true}, () =>{
          setTimeout( () => this.setState({copied:false}),1500);
        });
    }

    render(){
        const {name, color, moreUrl, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        return(
        <CopyToClipboard text={color} onCopy={this.ChangeCopyState}>
        <div style={{background:color}} className={classes.ColorBox}>
            <div style={{background:color}} className={`${classes.copyOverLay} ${copied && classes.showOverLay}`}></div>
            <div className={`${classes.copyMsg} ${copied && classes.showCopyMsg}`}>
                <h1>copied</h1>
                <p className={classes.copyText}> {color} </p>
            </div>
          <div>
              <div className={classes.boxContent}>
                <span className={classes.colorName} >{name}</span>
              </div>
              <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()} >
          <span className={classes.seeMore}>MORE</span>
          </Link>
          )}
        </div>
        </CopyToClipboard>
        );
    }
}
export default withStyles(styles)(ColorBox);