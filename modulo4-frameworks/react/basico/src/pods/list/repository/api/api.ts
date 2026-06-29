import { MemberEntity } from "./api.model";

export const getMembers = async (
  company: string,
): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${company}/members`)
  .then((response) => (response.ok ? response.json(): []));
};

function then() {
  throw new Error("Function not implemented.");
}
