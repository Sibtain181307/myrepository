import axios from "axios";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAIL = "POST_FAIL";

export const getSchedules = (Date) => async (dispatch) => {
  // const config = {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // };

  const body = JSON.stringify({ Date });
  try {
    const res = await axios.post("http://127.0.0.1:8000/getsh/", body);
    console.log("response is", res.data["Response"]);
    dispatch({
      type: POST_SUCCESS,
      payload: res.data["Response"],
    });
  } catch (err) {
    dispatch({
      type: POST_FAIL,
    });
  }
};
