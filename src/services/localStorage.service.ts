import { UserModel } from '@app/domain/UserModel';
const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

const testUser = {
  id: 1,
  firstName: 'Abdoulaye',
  lastName: 'FALL',
  imgUrl: avatarImg,
  userName: 'abdoulaye.fall',
  email: {
    name: 'abdoulaye.fall@kajou.io',
    verified: true,
  },
  phone: {
    number: '+221778300440',
    verified: true,
  },
  sex: 'male',
  birthday: '26/12/1993',
  lang: 'fr',
  country: 'SN',
  city: 'Dakar',
  address1: '',
  zipcode: 5211,
  website: 'kajou.io',
  socials: {
    twitter: '@abduulaay',
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/',
  },
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
