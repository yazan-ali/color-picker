import sizes from './sizes';

const styles= {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-7.5px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [sizes.down("xs")]: {
            width: "100%"
        },
        [sizes.down("md")]: {
            width: "50%"
        },
        [sizes.down("lg")]: {
            width: "25%"
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
        display: "flex",
        justifyContent: "space-between"
    },
    delete: {
        color: "rgba(0,0,0,0.7)",
        transition: "all 0.3s ease-in-out" 
    }
};

export default styles