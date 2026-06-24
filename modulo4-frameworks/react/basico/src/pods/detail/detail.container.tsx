import { routes } from "@/router";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { MemberDetailEntity } from "./detail.vm";
import { getMemberDetail } from "./api/api";
import { mapMemberDetailEntityToVM } from "./detail.mappers";

interface Props {
  login: string;
}

export const DetailContainer: React.FC<Props> = ({ login }) => {
  const [member, setMember] = React.useState<MemberDetailEntity>();

  console.log("login:", login);
  React.useEffect(() => {
    getMemberDetail(login).then(mapMemberDetailEntityToVM).then(setMember);
  }, [login]);

  return (
    member && (
      <>
        <h2>Hello from Detail page</h2>
        <h3>User Id: {login}</h3>
        <p> id: {member.id}</p>
        <p> login: {member.login}</p>
        <p> name: {member.name}</p>
        <p> company: {member.company}</p>
        <p> bio: {member.bio}</p>
        <Link to={routes.list}>Back to list page</Link>
      </>
    )
  );
};
