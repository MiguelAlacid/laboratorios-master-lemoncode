import React from "react";

export const UserName: React.FC<{ name: string }> = ({ name }) => {
  return <p>{name}</p>;
};
