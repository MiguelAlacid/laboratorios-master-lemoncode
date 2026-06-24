import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapMemberDetailEntityToVM = (
  member: am.MemberDetailEntity,
): vm.MemberDetailEntity => ({
  id: member.id,
  login: member.login,
  name: member.name,
  company: member.company,
  bio: member.bio,
});
