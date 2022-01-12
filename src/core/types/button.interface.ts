import React from "react";

export interface ButtonProps {
    style?: React.CSSProperties;
    value: string;
    hover?: boolean;
    type?: any;
     
    size?: string;
    onClick?: any;
    disabled?: boolean;
    outline?: boolean;

}