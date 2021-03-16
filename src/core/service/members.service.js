import { getMember } from '../member-factory/member-create';

class MembersService {
  getAllMembers() {
    this.data = getMember();
    return this.data;
  }
}

export const membersService = new MembersService();
