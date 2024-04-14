import React, { useState, useEffect } from "react";
import "./Login.css";
import {
  Layout,
  Menu,
  Row,
  Col,
  Modal,
  Form,
  Input,
  Divider,
  Button,
} from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { STATUS_CODE } from "../../../utils/constant/statusCode.js";
import { UserOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

const LayoutCinema = () => {
  const { Header, Content, Footer } = Layout;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const navigate = useNavigate();
  let { status } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
    error: "",
    url: "/homepage",
  });

  const handleOnChange = (event) => {
    let { name, value } = event.target;
    let changeValues = { ...user, [name]: value };
    setUser({
      ...user,
      username: changeValues.username,
      password: changeValues.password,
    });
  };

  const handleStatus = () => {
    if (status === "GUEST") {
      navigate("/homepage", { replace: true });
      setIsLoginModalOpen(false);
      console.log(status);
    } else if (status === STATUS_CODE.CLIENT_ERROR) {
      console.log(status);
      setUser({
        ...user,
        error: "Username hoặc Password bị sai!",
      });
    }
  };

  const submitForm = (event) => {
    dispatch({
      type: "LOGIN_USER",
      userLogin: {
        username: user.username,
        password: user.password,
      },
    });
    handleStatus();
  };

  return (
    <Layout className="layout" style={{ width: "100%" }}>
      <Header
        className="header"
        style={{
          width: "100%",
          height: "85px",
          position: "sticky",
          top: "0",
          zIndex: "1",
          padding: "0",
        }}
      >
        <div className="logo"></div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Row
            justify="center"
            align="middle"
            style={{ width: "100%", height: "85px" }}
          >
            <Col span={5}>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Cinema
              </p>
            </Col>
            <Col span={14}>
              <Row justify="center" align="middle">
                <Col
                  span={8}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="https://www.galaxycine.vn/_next/static/media/btn-ticket.42d72c96.webp"
                    alt="Ticket"
                    style={{ height: "36px", width: "50%" }}
                  />
                </Col>
                <Col span={4} style={{ height: "85x" }}>
                  <p style={{ fontSize: ".875rem", margin: "0" }}>
                    <Menu>
                      <NavLink
                        className="nav-link"
                        to="/homepage"
                        style={{ color: "black" }}
                      >
                        Trang chủ
                      </NavLink>
                    </Menu>
                  </p>
                </Col>
                <Col span={4} style={{ height: "85x" }}>
                  <p style={{ fontSize: ".875rem", margin: "0" }}>
                    <Menu>Phim</Menu>
                  </p>
                </Col>
                <Col span={4} style={{ height: "85x" }}>
                  <p style={{ fontSize: ".875rem", margin: "0" }}>
                    <Menu>Góc điện ảnh</Menu>
                  </p>
                </Col>
                <Col span={4} style={{ height: "85x" }}>
                  <p style={{ fontSize: ".875rem", margin: "0" }}>
                    <Menu style={{ borderRight: "1px solid white" }}>Rạp</Menu>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col span={3}> Username</Col>
            <Col span={2}>
              <Menu.SubMenu
                theme="light"
                icon=<UserOutlined
                  onClick={() => setIsLoginModalOpen(true)}
                  style={{ fontSize: "25px", marginLeft: "40px" }}
                />
              >
                {/* <Menu.Item
                //   style={{
                //     fontSize: "15px",
                //     fontWeight: "500",
                //     color: "#303f9f",
                //     paddingTop: "5px",
                //     paddingLeft: "31px",
                //     boxSizing: "border-box",
                //   }}
                // >
                //   Đăng xuất
              // </Menu.Item> */}
              </Menu.SubMenu>
            </Col>
          </Row>
        </Menu>
      </Header>

      <Content
        className="site-layout"
        style={{
          marginTop: 0,
          minHeight: 580,
          backgroundColor: "rgba(255,255,255,0.7)",
        }}
      >
        <Outlet />
        {/* Login Modal */}
        <Modal
          open={isLoginModalOpen}
          title={
            <div className="login-icon mb-3 text-center">
              <img
                src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
                alt="logo-icon"
              />
              <h3 style={{ textAlign: "center" }}> Đăng nhập tài khoản </h3>
            </div>
          }
          onCancel={() => setIsLoginModalOpen(false)}
          footer={null}
        >
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Form
              name="basic"
              layout="vertical"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 24 }}
              style={{
                maxWidth: 500,
                minWidth: 400,
                marginTop: "20px",
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={(values) => {
                submitForm(values);
              }}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  id="username"
                  name="username"
                  onChange={(event) => {
                    handleOnChange(event);
                  }}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  id="password"
                  name="password"
                  onChange={(event) => {
                    handleOnChange(event);
                  }}
                />
              </Form.Item>
              <Form.Item>
                <div style={{ height: "30px", marginTop: "-20px" }}>
                  <span style={{ color: "red" }}>{user.error}</span>
                </div>
              </Form.Item>
              <Form.Item>
                {/** <div
                  className="text-center pt-1 mb-5"
                  style={{ display: "flex", justifyContent: "center" }}
                >
               <button
                  className="btn btn-primary btn-block fa-lg gradient-custom-2"
                  style={{
                    width: "100%",
                    fontSize: "16px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    marginBottom: "6px",
                    border: "none",
                    color: "white",
                  }}
                  htmlType="submit"
                >
                  Đăng nhập
                </button>
                </div> */}
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <Divider />
              <Form.Item>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="mb-0 me-4" style={{ fontSize: "13px" }}>
                    Bạn chưa có tài khoản?
                  </p>
                  <button
                    type="button"
                    style={{ fontSize: "14px" }}
                    className="ml-4 btn btn btn-light btn-outline-info"
                    onClick={() => {
                      setIsLoginModalOpen(false);
                      setIsRegisterModalOpen(true);
                    }}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>
        {/**Register Modal */}
        <Modal
          open={isRegisterModalOpen}
          title={
            <div className="login-icon mb-3 text-center">
              <img
                src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
                alt="logo-icon"
              />
              <h3 style={{ textAlign: "center" }}> Đăng ký tài khoản </h3>
            </div>
          }
          onCancel={() => {
            setIsRegisterModalOpen(false);
          }}
          footer={null}
        >
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Form
              name="basic"
              layout="vertical"
              labelCol={{ span: 12 }}
              wrapperCol={{ span: 24 }}
              style={{
                maxWidth: 500,
                minWidth: 400,
                marginTop: "20px",
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={() => setIsLoginModalOpen(false)}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <div
                  className="text-center pt-1 mb-5"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <button
                    className="btn btn-primary btn-block fa-lg gradient-custom-2"
                    style={{
                      width: "100%",
                      fontSize: "16px",
                      paddingTop: "12px",
                      paddingBottom: "12px",
                      marginBottom: "6px",
                      border: "none",
                      color: "white",
                    }}
                    htmlType="submit"
                  >
                    Hoàn thành
                  </button>
                </div>
              </Form.Item>
              <Divider />
              <Form.Item>
                <div className="d-flex align-items-center justify-content-center">
                  <p className="mb-0 me-4" style={{ fontSize: "13px" }}>
                    Bạn đã có tài khoản?
                  </p>
                  <button
                    type="button"
                    style={{ fontSize: "14px" }}
                    className="ml-4 btn btn btn-light btn-outline-info"
                    onClick={() => {
                      setIsRegisterModalOpen(false);
                      setIsLoginModalOpen(true);
                    }}
                  >
                    Đăng nhập
                  </button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          padding: 0,
          margin: 0,
        }}
      >
        <div>
          <div>
            <Row style={{ height: "200px" }}>
              <Col span={6}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Logo_Hust.png"
                  alt="icon_layout"
                  style={{ width: "93px", height: "130px", marginTop: "30px" }}
                />
              </Col>
              <Col span={16} style={{ textAlign: "left", paddingTop: "20px" }}>
                <h4 style={{ color: "#b71c1c", fontWeight: "600" }}>
                  TRƯỜNG ĐẠI HỌC BÁCH KHOA HÀ NỘI
                </h4>
                <p style={{ marginTop: "40px" }}>
                  Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội
                </p>
                <p style={{ marginTop: "-5px" }}>
                  Điện thoại: (84-24) 3869 2243, Email: tvtqb@hust.edu.vn
                </p>
              </Col>
            </Row>
          </div>
          <div
            style={{
              color: "grey",
              backgroundColor: "black",
              height: "50px",
              paddingTop: "15px",
            }}
          >
            Bản quyền © 2024, Thư viện Tạ Quang Bửu - Trường Đại học Bách khoa
            Hà Nội.
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default LayoutCinema;
