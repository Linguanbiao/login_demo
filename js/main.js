import { loginComplete } from "./login.js";
import { login_btn } from "./dom.js";     //ES Module 规范在导入模块时 .js 不能省 
login_btn.onclick= function(e){
    e.preventDefault(); 
    loginComplete();
}
// 正确的用户名和密码 ： username  123123