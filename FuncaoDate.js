const currentDate = new Date();
const lastAccessDate = new Date('2020/04/12 17:00:00');

let msg = "";

const currentHour = currentDate.getHours();

if(currentHour<12){   
    msg = "Bom dia!\n";
}else if(currentHour>=12 && currentHour<18){
    msg = "Boa tarde!\n";
}else{    
    msg = "Boa Noite!\n";    
};

let TimeDifference = currentDate.getTime() - lastAccessDate.getTime();


const daytoMillisecond = 86400000;
const weektoMillisecond = daytoMillisecond * 7;
const hourtoMillisecond = daytoMillisecond / 24;

if(TimeDifference > weektoMillisecond){
    msg+="Você está ausente há semanas!!!\n";
}else if(TimeDifference > daytoMillisecond ){
    msg += "Você está ausente há dias!!!\n";
}else if(TimeDifference > hourtoMillisecond){
    msg += "Você está ausente há horas!!!\n";
}else{
    msg += "Que bom que ainda está aqui <3!!!\n"
}

console.log(msg);