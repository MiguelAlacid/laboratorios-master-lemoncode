import * as api from "./api/api";
import * as mappers from "./list.mappers";

export const getMembers = async (company: string) =>
  api.getMembers(company).then(mappers.mapMembersEntityToVM);
