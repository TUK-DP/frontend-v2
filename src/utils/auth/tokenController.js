const ACCESS_TOKEN = "AccessToken";
const REFRESH_TOKEN = "RefreshToken";

export const getTokenInLocalStorage = () => {
  return {
    [ACCESS_TOKEN]: localStorage.getItem(ACCESS_TOKEN),
    [REFRESH_TOKEN]: localStorage.getItem(REFRESH_TOKEN),
  };
};

export const setTokenInLocalStorage = ({ AccessToken, RefreshToken }) => {
  localStorage.setItem(ACCESS_TOKEN, AccessToken);
  localStorage.setItem(REFRESH_TOKEN, RefreshToken);
};

export const removeTokenInLocalStorage = () => {
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};
