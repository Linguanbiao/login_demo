import * as doms from "./dom.js"
import {login} from "./api/user.js"
/**
 * 导出一个函数，调用该函数，会自动获取文本框的值完成登录
 */
let isLogining = false; // 设置登录状态 ， 如果是正在登录中， 就不进行登录了

export async function loginComplete() {
    if (isLogining) {
        return;
    }
    isLogining = true;
    doms.login_btn.value = "登录中...";
    const usename = doms.username_input.value;
    const pwd = doms.pwd_input.value;
    if (!usename) {
        alert('用户名不能为空！');
        isLogining = false;
        doms.login_btn.value = '登录';
        return;
    }
    if (!pwd) {
        alert("密码不能为空！");
        isLogining = false;
        doms.login_btn.value = '登录';
        return
    }
    const resp = await login(usename, pwd);
    if (resp) {
        alert(`登录成功，欢迎你! ${resp.nickname}`);
    } else {
        alert(`登录失败！`)
    }
    isLogining = false;
    doms.login_btn.value = '登录';
}
