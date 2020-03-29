/**
 * Created by 高顿 on 2018/2/22.
 */
function GetObj(objName){
    if(document.getElementById){
        return eval('document.getElementById("' + objName + '")');
    }
}

if(GetObj("huoqi")){
    var rateDemand = GetObj("huoqi").innerHTML;}//活期利率(%)


//整存整取==========
if(GetObj("zczq3")){
    var rate3  = GetObj("zczq3").innerHTML;}//3个月
if(GetObj("zczq6")){
    var rate6  = GetObj("zczq6").innerHTML;}//6个月
if(GetObj("zczq12")){
    var rate12 = GetObj("zczq12").innerHTML;}//一年利率
if(GetObj("zczq24")){
    var rate24 = GetObj("zczq24").innerHTML;}//2年利率
if(GetObj("zczq36")){
    var rate36 = GetObj("zczq36").innerHTML;}//3年利率
if(GetObj("zczq60")){
    var rate60 = GetObj("zczq60").innerHTML;}//5年利率

//零存整取=======存本取息========整存零取
if(GetObj("lczq12")){
    var rateLZ12 = GetObj("lczq12").innerHTML;}//1年利率
if(GetObj("lczq36")){
    var rateLZ36 = GetObj("lczq36").innerHTML;}//3年利率
if(GetObj("lczq60")){
    var rateLZ60 = GetObj("lczq60").innerHTML;}//5年利率



//直接判断是否空内容
function CheckEp(curObj, msg){
    if(msg==null) msg="";
    if(curObj.value==''){
        alert(msg + "不可为空");
        curObj.focus();
        curObj.select();
        return false;
    }
    return true;
}

//空数据公共函数
function CheckEmpty(curObj, msg){
    var re = /[^0-9|\.]/;
    if(msg==null) msg="";
    if(curObj.value==''){
        alert(msg + "不可为空");
        curObj.focus();
        curObj.select();
        return true;
    }
    else if(re.test(curObj.value)){
        alert(msg + "不是数字");
        curObj.focus();
        curObj.select();
        return true;
    }
}


//输入为正数
function CheckElem(curObj, msg){
    if (CheckEmpty(curObj, msg)) return false;
    var re = /^([1-9]\d*((.\d+)*))|^(0\.\d*[1-9]\d*)/;
    if (!re.test(curObj.value))
    {
        alert(msg + "必须为正数");
        curObj.focus();
        curObj.select();
        return false;
    }
    return true;
}
//1输入为非负数
function CheckElem1(curObj, msg){
    if (CheckEmpty(curObj, msg)) return false;
    var re = /^\d+(\.\d+)?$/;
    if (!re.test(curObj.value))
    {
        alert(msg + "必须为非负数");
        curObj.focus();
        curObj.select();
        return false;
    }
    return true;
}
//2输入正整数
function CheckElem2(curObj, msg){
    if (CheckEmpty(curObj, msg)) return false;
    var re = /^[0-9]*[1-9][0-9]*$/;
    if (!re.test(curObj.value))
    {
        alert(msg + "必须为正整数");
        curObj.focus();
        curObj.select();
        return false;
    }
    return true;
}

//3输入非负整数
function CheckElem3(curObj, msg){
    if (CheckEmpty(curObj, msg)) return false;
    var re = /^[1-9]d*|0$/;
    if (!re.test(curObj.value))
    {
        alert(msg + "必须为非负整数");
        curObj.focus();
        curObj.select();
        return false;
    }
    return true;
}


//输出保留两位小数
function Format(myFloat){
  var num = Math.round(myFloat*Math.pow(10,2))/Math.pow(10,2);
  return   num = num.toFixed(2);
}

/****功能： 校验一个合法的且在规定范围内的浮点数
 入口参数：
 CheckCtl: 要校验的输入框
 Min:  下限
 Max:  上限
 Msg: 出错显示的信息  ****/
function CheckFloatRange(CheckCtl,Min, Max,Msg)
{
    v=parseFloat(CheckCtl.value.replace(/^\s*/,'').replace(/\s*$/,''));
    if  ( (v<Min) || (v>Max) )
    {
        alert(Msg);
        CheckCtl.select();
        CheckCtl.focus();
        return false;
    }
    return true;
}
