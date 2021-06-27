import axios from 'axios';
import { GITHUB_BASE_URL } from '../constants/urls';

export const getUserInfo = async (nickname) => {
  const user = await axios.get(`${GITHUB_BASE_URL}/${nickname}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
    },
  });

  return user.data;
};
