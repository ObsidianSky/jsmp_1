import './componentA.scss';
import tpl from './componentA.html';

const str = 'String';
const [s, t] = str;

const array = [1, 2, 3, 3];
const idn = array.includes(1);
const pow = 2 ** 2;

export default () => ({
    s,
    t,
    idn,
    pow,
    tpl
});