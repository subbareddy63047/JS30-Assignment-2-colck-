const HoursEle=document.querySelector(".hours")
const minutesEle=document.querySelector(".minutes");
const secondsEle=document.querySelector(".seconds")



setInterval(()=>{
    const DateObj=new Date();
    const seconds=DateObj.getSeconds();
    const secondsDeg=((seconds/60)*360)+90;
    secondsEle.style.transform=`rotate(${secondsDeg}deg)`

    const minutes=DateObj.getMinutes();
    const minutesDeg=((minutes/60)*360)+ 90;
    minutesEle.style.transform=`rotate(${minutesDeg}deg)`

    const hours=DateObj.getHours();
    const hoursDeg=((hours/12)*360)+ ((minutes/60)*30) + 90;
    HoursEle.style.transform=`rotate(${hoursDeg}deg)`


},1000)