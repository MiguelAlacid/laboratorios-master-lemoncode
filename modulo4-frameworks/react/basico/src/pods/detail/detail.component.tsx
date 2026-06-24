import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import { routes } from "@/router";
import { Link } from "react-router-dom";

interface Props {
  member: MemberDetailEntity;
}

export const MemberDetail: React.FC<Props> = ({ member }) => {
  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {member.id}</h3>
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <p> bio: {member.bio}</p>
      <Link to={routes.list}>Back to list page</Link>
    </>
  );
};
