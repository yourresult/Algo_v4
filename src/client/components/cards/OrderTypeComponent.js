import React from 'react';
var defaultStyle = {
        /* Font & Text */
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "10px",
        fontStyle: "normal",
        letterSpacing: "0.5px",
        textAlign: "center",
        textTransform: "uppercase",
    
        /* Color & Background */
        // backgroundColor: "rgba(65, 132, 243, 0.1)",
        // color: "rgb(65, 132, 243)",
    
        /* Box */
        height: "20px",
        // width: "45px",
        padding: "2px 12px",
    
        /* Positioning */
        display: "inline-block",
        zIndex: "auto",
        borderRadius: "2px"
}

const type = (props) => {
  return (
    <b><span className={"text-label "+props.class} style={defaultStyle}>{props.massage}</span></b>
  );
};
export default type;