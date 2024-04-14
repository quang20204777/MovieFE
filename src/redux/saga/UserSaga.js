import { takeLatest, put, call } from "redux-saga/effects";
import { loginGuest } from "../../services/UserService.js";
import { LOGIN } from "../type/UserType.js";
import { TOKEN_GUEST } from "../../utils/constant/data.js";
import { STATUS_CODE } from "../../utils/constant/statusCode.js";

function* loginSaga(action) {
  try {
    // Thực hiện đăng nhập cho tài khoản user
    console.log(action);
    const userResponse = yield call(
      loginGuest,
      action.userLogin.username,
      action.userLogin.password
    );

    if (userResponse) {
      localStorage.setItem(TOKEN_GUEST, userResponse.data.token);
      yield put({
        type: LOGIN,
        data: {
          statusLogin: "GUEST",
          dataLogin: {
            token: userResponse.data.token,
          },
        },
      });
      return; // Kết thúc hàm nếu đăng nhập là user thành công
    }
  } catch (error) {
    // Xử lý lỗi khi đăng nhập là user
    console.error("Error logging in as user:", error);
  }

  // Nếu không đăng nhập được với bất kỳ vai trò nào, xóa local storage và gửi action LOGIN với trạng thái lỗi
  localStorage.clear();
  yield put({
    type: LOGIN,
    data: {
      statusLogin: STATUS_CODE.CLIENT_ERROR,
    },
  });
}

export function* getUserSaga() {
  yield takeLatest("LOGIN_USER", loginSaga);
}
