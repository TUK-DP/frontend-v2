import { Api } from "./common.controller";

/**
 * @typedef {Object} User
 * @property {number} id
 * @property {string} accountId
 * @property {string} username
 * @property {string} createdAt
 * @property {string} updatedAt
 *
 *
 * @typedef {{
 *     user : User,
 *     token : {
 *       AccessToken : string,
 *       RefreshToken : string
 *     }
 *   }} LoginResponse
 */

class UserController extends Api {
  // 회원가입
  /**
   * 회원 가입
   * @return {Promise<AxiosResponse<ApiResponse<User>>>}
   * */
  signUp = async ({ accountId, password, username }) => {
    return await this.post("/users/signup", { accountId, password, username });
  };

  // 로그인
  /**
   * 로그인
   * @return {Promise<AxiosResponse<ApiResponse<LoginResponse>>>}
   * */
  signIn = async ({ accountId, password }) => {
    return await this.post("/users/login", { accountId, password });
  };

  /**
   * @return {Promise<AxiosResponse<ApiResponse>>}
   */
  checkAccountId = async ({ accountId }) => {
    return await this.post(`/users/validate/accountId`, { accountId });
  };

  // 자동 로그인
  /**
   * 자동 로그인
   * @return {Promise<AxiosResponse<ApiResponse<LoginResponse>>>}
   */
  autoLogin = async ({ userId, AccessToken, RefreshToken }) => {
    return await this.get(
      `/users/${userId}/auto/login`,
      {},
      {
        headers: {
          AccessToken,
          RefreshToken,
        },
      }
    );
  };

  // 회원 정보 수정
  /**
   * @return {Promise<AxiosResponse<ApiResponse<User>>>}
   */
  updateUser = async ({
    id,
    username,
    email,
    password,
    birth,
    accessToken,
    refreshToken,
  }) => {
    return await this.put(
      "/users",
      { id, username, email, password, birth, accessToken, refreshToken },
      {
        headers: {
          AccessToken: `${accessToken}`,
          RefreshToken: `${refreshToken}`,
        },
      }
    );
  };
}

export default new UserController();
