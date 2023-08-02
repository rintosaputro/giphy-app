import React from "react";

interface HeaderTextProps {
  children: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ children }) => {
  return <h1 className="font-bold text-4xl text-center">{children}</h1>;
};

export default HeaderText;
