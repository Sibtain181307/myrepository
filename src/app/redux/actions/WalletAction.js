export const GET_WALLET_TITLE = "GET_WALLET_TITLE";

export function getWallet() {
  return (dispatch) => {
    dispatch({
      type: GET_WALLET_TITLE,
    });
  };
}
