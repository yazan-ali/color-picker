import chroma from 'chroma-js';
import sizes from './sizes';

export default {
    ColorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5.5px",
        "&:hover button": {
            opacity: "1"
        },
        [sizes.down("xs")]: {
            width: "100%"
        },
        [sizes.down("md")]: {
            width: "50%"
        },
        [sizes.down("lg")]: {
            width: "20%"
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0",
        bottom: "0",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
    },
    copyOverLay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverLay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyText: {
        color: props => chroma(props.color).luminance() >= 0.07 ? "black" : "white" 
    },
    colorName: {
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "black" 
    },
    seeMore: {
        color: props => chroma(props.color).luminance() >= 0.07 ? "rgba(0,0,0,0.7)" : "white" ,
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "80px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    copyButton: {
        color: props => chroma(props.color).luminance() >= 0.07 ? "black" : "white" ,
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            [sizes.down("xs")]: {
                fontSize: "5rem"
            }
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100",
        }
    },
    showCopyMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
    }
}