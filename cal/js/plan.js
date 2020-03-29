/**
 * Created by 高顿 on 2018/2/22.
 */
function goldsendprice(formObj) {
    if (!CheckElem(formObj.price1, "买入价格")) return false;
    if (!CheckElem(formObj.price2, "卖出价格")) return false;
    if (!CheckElem(formObj.num, "数量")) return false;
    var result = Format(parseFloat(formObj.num.value) * (parseFloat(formObj.price2.value) - parseFloat(formObj.price1.value)));
    formObj.moneyNumTo.value = result; //显示金额
}


function Asset(formObj) {
    if (!CheckElem(formObj.a, "流动性资产总值")) return false;
    if (!CheckElem(formObj.b, "短期负债")) return false;
    if (!CheckElem(formObj.c, "投资性资产总值")) return false;
    if (!CheckElem(formObj.dd, "长期借贷总值")) return false;

    var a = parseFloat(formObj.a.value);
    var b = parseFloat(formObj.b.value);
    var c = parseFloat(formObj.c.value);
    var d = parseFloat(formObj.dd.value);

    formObj.e.value = Format(a - b);
    formObj.f.value = Format(c - d);
    formObj.g.value = Format(a / (a + c) * 100);
    formObj.h.value = Format(c / (a + c) * 100);
    formObj.i.value = Format(b / (b + d) * 100);
    formObj.j.value = Format(d / (b + d) * 100);
    formObj.k.value = Format((a - b) / (a + c - b - d) * 100);
    formObj.l.value = Format((c - d) / (a + c - b - d) * 100);
    formObj.m.value = Format(a + c);
    formObj.n.value = Format(b + d);
    formObj.o.value = Format(a + c - b - d);
}


function ChgItem(itemName) {
    for (var i = 0; i < 3; i++) {
        GetObj("c" + i).style.display = "none";
    }
    GetObj(itemName).style.display = "block";
}

function Cal0(formObj) {

    if (!CheckElem(formObj.a, "初始投资金额")) return false;
    if (!CheckElem(formObj.b, "投资年限")) return false;
    if (!CheckElem(formObj.c, "实现本金加收益")) return false;

    var a = parseFloat(formObj.a.value);
    var b = parseFloat(formObj.b.value);
    var c = parseFloat(formObj.c.value);
    var i = Math.pow(c / a, 1 / b) - 1;
    formObj.i.value = Format(i * 100);
}

function Cal1(formObj) {

    if (!CheckElem(formObj.a, "初始投资金额")) return false;
    if (!CheckElem(formObj.b, "投资年限")) return false;
    if (!CheckElem(formObj.i, "预期年投资收益率")) return false;

    var a = parseFloat(formObj.a.value);
    var b = parseFloat(formObj.b.value);
    var i = parseFloat(formObj.i.value) / 100;

    formObj.b2.value = b;
    var c = Math.pow((1 + i), b) * a;
    formObj.c.value = Format(c);
    formObj.d.value = Format(c - a);
}

function Cal2(formObj) {

    if (!CheckElem(formObj.a, "初始投资金额")) return false;
    if (!CheckElem(formObj.c, "欲实现本金加收益共")) return false;
    if (!CheckElem(formObj.i, "预期年投资收益率")) return false;

    var a = parseFloat(formObj.a.value);
    var c = parseFloat(formObj.c.value);
    var i = parseFloat(formObj.i.value) / 100;

    var b = Math.log(c / a) / Math.log(1 + i);
    formObj.b.value = Format(b);
}


//子女教育金重置
function EduFunrset(formObj){
    formObj.reset();
    GetObj("result").innerHTML="&nbsp;";

}
function EduFun(formObj) {
    if (!CheckElem(formObj.c, "每年大学费用")) return false;
    if (!CheckElem(formObj.i, "当前年利率")) return false;

    var a = parseFloat(formObj.a.value);
    var b = parseFloat(formObj.b.value);
    var c = parseFloat(formObj.c.value);
    var i = parseFloat(formObj.i.value) / 100;
    var jg= Format(b * c * i / (Math.pow((1 + i), a) - 1));
    GetObj("result").innerHTML = "为顺利完成 <em class='bold'>" + b + "</em> 年深造，您需要从现在起，每年为你或你的小孩投资 <em class='bold'>" + jg + "</em> 元，共投资 <em class='bold'>" + a + "</em> 年。";
}


//定期定额
function soAttr() {
    if (GetObj("outputAttr_0").checked) {
        GetObj("input1").innerHTML="投资期限:";
        GetObj("input2").innerHTML="期末名义价值:";
        GetObj("output1").innerHTML="每月投资额度：";
    }
    if (GetObj("outputAttr_1").checked) {
        GetObj("input1").innerHTML="每月投资额度:";
        GetObj("input2").innerHTML="期末名义价值:";
        GetObj("output1").innerHTML="投资期限：";
    }
    if (GetObj("outputAttr_2").checked) {
        GetObj("input1").innerHTML="每月投资额度:";
        GetObj("input2").innerHTML="投资期限:";
        GetObj("output1").innerHTML="期末名义价值：";
    }
}
function soarset(formObj){
    formObj.reset();
    GetObj("input1").innerHTML="投资期限:";
    GetObj("input2").innerHTML="期末名义价值:";
    GetObj("output1").innerHTML="每月投资额度：";
}
function soA0(formObj) {
    if (!CheckElem(formObj.i, "预期投资回报率")) return false;
    if (GetObj("outputAttr_0").checked) {
        if (!CheckElem(formObj.n, "投资期限")) return false;
        if (!CheckElem(formObj.f, "期末名义价值")) return false;
        var lv = parseFloat(formObj.i.value)/100/12;
        var inp1 = parseFloat(formObj.n.value)*12;
        var inp2 = parseFloat(formObj.f.value);
        out_r = (inp2 * lv) / (Math.pow((1 + lv), inp1) - 1);
        formObj.w.value = Format(out_r);
    }
    if (GetObj("outputAttr_1").checked) {
        if (!CheckElem(formObj.n, "每月投资额度")) return false;
        if (!CheckElem(formObj.f, "期末名义价值")) return false;
        var lv = parseFloat(formObj.i.value)/100/12;
        var inp1 = parseFloat(formObj.n.value);
        var inp2 = parseFloat(formObj.f.value);
        out_n = (Math.log(1 + inp2*lv/inp1)/Math.log(1 + lv))/12;
        formObj.w.value = Format(out_n);
    }
    if (GetObj("outputAttr_2").checked) {
        if (!CheckElem(formObj.n, "每月投资额度")) return false;
        if (!CheckElem(formObj.f, "投资期限")) return false;
        var lv = parseFloat(formObj.i.value)/100/12;
        var inp1 = parseFloat(formObj.n.value);
        var inp2 = parseFloat(formObj.f.value)*12;
        out_fv = inp1 * (Math.pow((1 + lv), inp2) - 1) / lv;
        formObj.w.value = Format(out_fv);
    }

}
