import * as am from "./api/api.model";
import * as vm from "../list.vm";

export const mapMemberEntityToVM = (
  member: am.MemberEntity,
): vm.MemberEntity => ({
  id: member.id,
  login: member.login,
  avatarUrl: member.avatar_url,
});

export const mapMembersEntityToVM = (
  members: am.MemberEntity[] ,
): vm.MemberEntity[] => members.length !== 0 ? members.map(mapMemberEntityToVM): [];
 
