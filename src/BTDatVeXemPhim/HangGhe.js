import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {  chonGheAction } from "../redux/actions/BTDatVeAction";

class HangGhe extends Component {
  renderHangGhe = () => {
    if (this.props.hangGhe.hang) {
      return (
        <Fragment>
          <span className="firstChar">{this.props.hangGhe.hang}</span>{" "}
          {this.renderGhe()}
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <span className="d-inline-block" style={{ width: "35px" }}></span>{" "}
          {this.props.hangGhe.hang} {this.renderSoGhe()}
        </Fragment>
      );
    }
  };

  renderSoGhe = () => {
    if (!this.props.hangGhe.hang) {
      return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
        return <span className="rowNumber text-center">{ghe.soGhe}</span>;
      });
    }
  };

  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.arrGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
          onClick={() => {
            this.props.dispatch(chonGheAction(ghe));
          }}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  render() {
    return (
      <div className="text-left d-flex align-items-center justify-content-center mt-3">
        {this.renderHangGhe()}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    arrGheDangDat: rootReducer.BTDatVeXemPhimReducer.arrGheDangDat,
  };
};

export default connect(mapStateToProps)(HangGhe);
