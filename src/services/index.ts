import { API } from '../constants';
import { User } from '../interfaces/user.interface';

export const getUser = async (userId: string) => {
  const user = fetch(API).then<User>((u) => u.json());

  return user;
};
