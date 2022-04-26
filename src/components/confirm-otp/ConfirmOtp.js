
import './ConfirmOtp.css';
import React, { Component } from 'react';
import WebFont from 'webfontloader';
const ConfirmOtp = function () {
    WebFont.load(
        {
            google: {
                families: ['Inter']
            }
        }
    )
    return (
        <div className="wrapper">
            <div className="confirm-section">
                <div className="header">
                    <div className="logo"></div>
                    <div className="heading">
                        <h2>Xác nhận mã OTP</h2>
                        <p>Chúng tôi đã gửi mã OTP đến số điện thoại của bạn. Vui lòng kiểm tra điện thoại của bạn.</p>
                    </div>
                </div>
                <div className="content">
                    <label className="confirm-label" htmlFor="confirm-otp"></label>
                    <input className="otp-field" type="text" id="confirm-otp" placeholder='Mã OTP' required />
                    <button className="confirm-btn">Xác nhận</button>
                </div>
                <div className="footer">
                    <p className='otp-question'>Chưa nhận được mã OTP? </p>
                    <a href="#"> Gửi lại</a>
                </div>
            </div>
        </div>
    )
}
export default ConfirmOtp; // Don’t forget to use export default!