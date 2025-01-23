import Cookies from 'js-cookie';

export const logout = () => {
    Cookies.remove('session');
    window.location.href = '/welcome';
};
