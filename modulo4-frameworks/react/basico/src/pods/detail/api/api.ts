import { MemberDetailEntity } from "./api.model";

export const getMemberDetail = async (
  id: string,
): Promise<MemberDetailEntity> => {
  return fetch(`https://api.github.com/users/${id}`).then((response) =>
    response.json(),
  );
};
