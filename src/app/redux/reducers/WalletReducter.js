import { GET_WALLET_TITLE } from "../actions/WalletAction";

export default function (state = null, action) {
  switch (action.type) {
    case GET_WALLET_TITLE:
      return state;
    default:
      return state;
  }
}
