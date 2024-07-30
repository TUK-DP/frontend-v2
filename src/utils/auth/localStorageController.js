const ACCESS_TOKEN = "AccessToken";
const REFRESH_TOKEN = "RefreshToken";

export const getUserInLocalStorage = () => ({
  userId: localStorage.getItem("userId"),
  [ACCESS_TOKEN]: localStorage.getItem(ACCESS_TOKEN),
  [REFRESH_TOKEN]: localStorage.getItem(REFRESH_TOKEN),
});

export const setUserInLocalStorage = ({
  userId,
  AccessToken,
  RefreshToken,
}) => {
  localStorage.setItem("userId", userId);
  localStorage.setItem(ACCESS_TOKEN, AccessToken);
  localStorage.setItem(REFRESH_TOKEN, RefreshToken);
};

export const removeUserInLocalStorage = () => {
  localStorage.removeItem("userId");
  localStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};
