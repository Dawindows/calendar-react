import { getMembers } from '../service/server.service';
import { factory } from './member-factory';

export const getMember = () => {
  const content = getMembers();

  const data = content.map((element) =>
    factory.create(
      JSON.parse(element.data).name,
      JSON.parse(element.data).isAdmin
    )
  );

  return data;
};
