/**
 * 登录模块
 * @type {{signIn: account.signIn, signOut: account.signOut, signUp: account.signUp}}
 */
var account = {
    /**
     * 登录
     */
    signIn: function () {
        var putName=document.getElementById("myName").value;
        var putPass=document.getElementById("myPass").value;
        var m=localStorage.getItem("Name");
        var n=localStorage.getItem("Word");
        if(putName !== m){
            alert("此用户不存在！");
        }
        else if(putPass !==n){
            alert("密码输入错误！");

        }
        else{
            alert("登陆成功！"+"\n"+"账户:"+putName+"\n"+"密码:"+putPass);
        }
    },
    /**
     * 登出
     */
    signOut: function () {

    },
    /**
     * 注册
     */
    signUp: function () {
        var x=document.getElementById("uName").value;
        var y=document.getElementById("uPass").value;
        localStorage.setItem("Name",x);
        localStorage.setItem("Word",y);
        var userName=localStorage.getItem("Name");
        var userPass=localStorage.getItem("Word");

        userName=userName?userName:'不存在';
        userPass =userPass?userPass:'不存在';
        alert("账号:"+userName+"\n"+"密码:"+ userPass);
        if(userName.length==null){
            alert("请输入账户名！");
            //theForm.x.focus();
            return false;
        }
        if(userPass.length<6){
            alert("密码不少于6个字符");
        }
        else{
            alert("注册成功！");
            window.location.href = 'denlu.html';
        }
    }
};
