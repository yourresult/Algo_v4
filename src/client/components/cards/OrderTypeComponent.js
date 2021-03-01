import React from 'react';
var defaultStyle = {
        /* Font & Text */
        fontFamily: "'Open Sans', sans-serif",
        fontSize: "10px",
        fontStyle: "normal",
        letterSpacing: "0.5px",
        textAlign: "center",
        textTransform: "uppercase",
    
        /* Box */
        height: "20px",
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