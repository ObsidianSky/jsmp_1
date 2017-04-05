import _ from 'lodash';

console.log('contacts');

export default (t) => {
  if(t) {
    return 't';
  } else {
    return 'f';
  }
};