
import './SignUp.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import WebFont from 'webfontloader';
import ConfirmOtp from '../confirm-otp/ConfirmOtp';
import App from '../../App';
const SignUp = function () {
    WebFont.load(
        {
            google: {
                families: ['Inter']
            }
        }
    );
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`The name you entered was: ${name}`)
        // alert(`The name you entered was:`);
        return (
            <App>
                <div className="App">
                    {/* <SignUp /> */}
                    <ConfirmOtp />
                </div>
            </App>
        );
    };

    return (
        <div className="wrapper">
            <div className="signup-section">
                <div className="header-nav">

                </div>

                <div className="container">
                    <h2>Đăng ký cửa hàng</h2>
                    <form onSubmit={handleSubmit} className="register-form">
                        <label className="signup-label name-label" htmlFor="store-name">Tên cửa hàng*</label>
                        <input type="text" id="store-name" placeholder='Nhập tên cửa hàng' required />
                        <label className="signup-label phone-label" htmlFor="phone-number">Số điện thoại*</label>
                        <input type="number" id="store-name" placeholder='Nhập số điện thoại' required />
                        <label className="signup-label password-label" htmlFor="password">Mật khẩu*</label>
                        <input type="password" id="store-name" placeholder='Nhập mật khẩu' required />
                        <p>Mật khẩu phải có ít nhất 8 kí tự.</p>
                        <label className="signup-label confirm-label" htmlFor="store-name">Xác nhận mật khẩu</label>
                        <input type="password" id="store-name" placeholder='Xác nhận lại mật khẩu' required />
                        <button className="signup-btn" >Đăng ký</button>
                    </form>

                    <div className="detail-info">
                        <span>Đã có tài khoản?</span>
                        <a href="#">Đăng nhập</a>
                    </div>
                </div>

                <div className="footer">

                </div>
            </div>
            <div className="image-section">
                <div className="image-show"></div>
            </div>
        </div>
    )
}
export default SignUp; // Don’t forget to use export default!