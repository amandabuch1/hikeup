import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function signup(user) {

  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })

  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })

  .then(({ token }) => {
    tokenService.setToken(token);
  });
  // the above could have been written as
  //.then((token) => token.token);
}
export default {
  signup
};