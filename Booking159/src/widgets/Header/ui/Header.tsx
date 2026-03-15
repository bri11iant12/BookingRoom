import React from "react";
import { HeaderProps } from "../model/types";

export const Header = ({ logo, actions}: HeaderProps) => {
    return (
        <header className="header">
            <div className="header-logo">
                {logo}
            </div>
            <div className="header-action">
                {actions}
            </div>
        </header>
    )
}