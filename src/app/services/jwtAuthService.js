import axios from "axios";
import localStorageService from "./localStorageService";
import History from "@history";
class JwtAuthService {
  user = {
    token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
    userName: "abcd",
    password: "abcd",
    role: "ADMIN",
    userId: "1",
  };

  loginWithEmailAndPassword = (userName, password) => {
    const data = {
      userName,
      password,
    };

    console.log("loginwithemailandpassword");
    console.log(userName, password);
    console.log(this.user);
    axios
      .post("http://15.235.141.168:70/user/login", data)
      .then(async (res) => {
        console.log(res);

        if (res.data.message === "Valid Credentials") {
          console.log("credentials are valid");
          this.user.role = res.data.data.role;
          this.user.userId = res.data.data.id;
          this.user.userName = res.data.data.userName;
          this.user.password = res.data.data.password;
          if (res.role === "ADMIN") {
            History.push({
              pathname: "/dashboard/v1",
            });
          } else if ("role === CUST-BIZ") {
            History.push({
              pathname: "/dashboard/shipper",
            });
          }
          localStorage.setItem("user", JSON.stringify(res.data.data));
          console.log(JSON.parse(localStorage.user));
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(this.user);
            }, 1000);
          }).then((data) => {
            console.log("Setting Data");
            this.setSession(data);
            this.setUser(data);
            return data;
          });
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 100);
    }).then((data) => {
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  logout = () => {
    this.setSession(null);
    this.removeUser();
  };

  setSession = (token) => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  setUser = (user) => {
    localStorageService.setItem("auth_user", user);
  };
  removeUser = () => {
    localStorage.removeItem("auth_user");
    localStorage.removeItem("user");
  };
}

export default new JwtAuthService();
