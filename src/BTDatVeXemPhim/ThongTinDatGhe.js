import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BTDatVeAction";

class ThongTinDatGhe extends Component {
  tinhTongTien = () => {
    let tongTien = 0;
    for (let ghe of this.props.arrGheDangDat) {
      tongTien += ghe.gia;
    }
    return tongTien;
  };
  render() {
    return (
      <div className="mt-4">
        <button className="gheDuocChon"></button>
        <span className="text-white ml-2" style={{ fontSize: "32px" }}>
          Ghế đã chọn
        </span>
        <br />
        <button className="gheDangChon"></button>
        <span className="text-white ml-2" style={{ fontSize: "32px" }}>
          Ghế đang chọn
        </span>
        <br />
        <button className="ghe ml-0"></button>
        <span className="text-white ml-2" style={{ fontSize: "32px" }}>
          Ghế chưa đặt
        </span>

        <div className="mt-3">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "20px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              {this.props.arrGheDangDat.map((ghe, index) => {
                return (
                  <tr key={index} className="text-warning">
                    <td>{ghe.soGhe}</td>
                    <td>{ghe.gia.toLocaleString()}</td>
                    <td>
                      <button
                        className="btn text-danger p-0"
                        style={{ fontSize: 24, lineHeight: 1 }}
                        onClick={() => {
                          this.props.dispatch(huyGheAction(ghe));
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-light" style={{ fontSize: "20px" }}>
                <td>Tổng tiền</td>
                <td className="text-warning">
                  {this.props.arrGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    arrGheDangDat: rootReducer.BTDatVeXemPhimReducer.arrGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
