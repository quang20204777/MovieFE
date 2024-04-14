import { LOGIN, CHECK_USERNAME_REDUCER } from "../type/UserType.js";
const userLoginData = {
  dataLogin: {},
  //status cho biết trạng thái đăng nhập
  status: 400,
  getAllUsers: [],
  //valueRegisterAdmin cho biết dữ liệu điền vào form đăng ký admin
  valueRegisterAdmin: {},
  //statusRegisterAdmin cho biết status trả về khi đăng ký admin
  statusRegisterAdmin: null,
  //valueChangePasswordAdmin cho biết dữ liệu điền vào form đổi mật khẩu của admin
  valueChangePasswordAdmin: {},
  //statusRegisterAdmin cho biết status trả về khi đăng ký admin
  statusChangePasswordAdmin: null,
  //check username
  checkUserName: null,
};

const userReducer = (state = userLoginData, action) => {
  switch (action.type) {
    case LOGIN: {
      state.status = action.data.statusLogin;
      state.dataLogin = { ...action.data.dataLogin };
      return { ...state };
    }
    case CHECK_USERNAME_REDUCER: {
      state.checkUserName = action.data;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default userReducer;
