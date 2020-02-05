import React from 'react';
function Math(props) {
    let val;
    switch (props.op) {
        case '+': val = props.num1+props.num2;break;
        case '-': val = props.num1-props.num2;break;
        case '*': val = props.num1*props.num2;break;
        case '/': val = props.num1/props.num2;break;
        default: val = NaN;
    }
    return <span style={{ fontSize: val }}>{val}</span>;
}
export default Math;