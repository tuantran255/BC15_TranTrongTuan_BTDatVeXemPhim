import { CHON_GHE, HUY_GHE } from "./types/BTDatVeType";

export const chonGheAction = (ghe) => {
  return {
    type: CHON_GHE,
    ghe,
  };
};

export const huyGheAction = (ghe) => {
  return {
    type: HUY_GHE,
    ghe,
  };
};
