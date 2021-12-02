import React, { Component, Fragment } from "react";
import "./BTDatVeXemPhim.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BTDatVeXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} />
        </Fragment>
      );
    });
  };

  render() {
    return (
      <div className="bookingMovie">
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <h1 className="display-4 text-warning">
                ĐẶT VÉ XEM PHIM CYBERSOFT
              </h1>
              <h3 className="text-white mt-4">Màn hình</h3>
              <div className="d-flex justify-content-center">
                <div className="screen"></div>
              </div>
              <div className="text-center">
                <div>
              {this.renderHangGhe()}
                </div>
              </div>
            </div>
            <div className="col-4">
              <h2
                className="text-white text-center mt-5"
                style={{ fontSize: 40 }}
              >
                DANH SÁCH GHẾ BẠN CHỌN
              </h2>
              <ThongTinDatGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
