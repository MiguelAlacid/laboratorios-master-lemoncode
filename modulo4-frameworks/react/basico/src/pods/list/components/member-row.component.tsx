import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../list.vm";

interface Props {
  member: MemberEntity;
  onSelect: () => void;
}

export const MemberRow: React.FC<Props> = ({ member, onSelect }) => {
  return (
    <>
      <img src={member.avatarUrl} />
      <span>{member.id}</span>
      <span onClick={onSelect}>{member.login}</span>
    </>
  );
};
