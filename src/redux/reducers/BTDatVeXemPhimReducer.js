import { CHON_GHE, HUY_GHE } from "../actions/types/BTDatVeType";

const stateDefault = {
  arrGheDangDat: [],
};

export const BTDatVeXemPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CHON_GHE:
      let indexGheChon = state.arrGheDangDat.findIndex(
        (ghe) => ghe.soGhe === action.ghe.soGhe
      );
      if (indexGheChon === -1) {
        state.arrGheDangDat = [...state.arrGheDangDat, action.ghe];
      } else {
        state.arrGheDangDat = state.arrGheDangDat.filter(
          (ghe) => ghe.soGhe !== action.ghe.soGhe
        );
      }
      return { ...state };
    case HUY_GHE:
      state.arrGheDangDat = state.arrGheDangDat.filter(
        (ghe) => ghe.soGhe !== action.ghe.soGhe
      );
      return { ...state };
    default:
      return { ...state };
  }
};

export default BTDatVeXemPhimReducer;
