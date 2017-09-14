var participants=['Alsonso','Ellie','Rik','Steve','Julian','Flavio','Aucher','Yicen','George','Isabel','Benz','Rye','Joe'];



//reports
var report=[];
report[0]= 'Werner Herzog. Lo and Behold';
report[1]= 'Kurgan,Laura. Close up at a Distance';
report[2]= 'Steyerl, Hito. A Sea of Data';
report[3]= 'Kate Crawford, Can an Algorithm be Agonistic?';
report[4]= 'Hayles, Katherine N. Unthought, Chapter 5';
report[5]= 'Hayles, Katherine N. Unthought, Chapter 6';
report[6]= 'Selected UNDP RBA reading';

var assignment=[];

for(var i=0; i<report.length; i++) {
    assignment[i] = {
        report: report[i],
        team: []
    }
}

console.log(assignment);

var rnd = Math.floor(Math.random()*participants.length);
console.log(rnd);

for(var key in assignment){
    while (assignment[key].team.length<2){
        var rnd = Math.floor(Math.random()*participants.length);
        console.log(rnd);
        assignment[key].team.push(participants[rnd]);
        participants.splice(rnd,1);
    }
}

console.log(assignment);