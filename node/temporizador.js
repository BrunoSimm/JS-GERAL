const schedule = require('node-schedule')


const tarefa1 = schedule.scheduleJob('*/5 * 17* * 5', function(){ //De 5 em 5 segundos, as 12 horas de terça feira (2)
    console.log("Executando tarefa 1!", new Date().getSeconds())
})



const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] //Seg a sex (1,5)
regra.hour = 17
regra.second = 30 //No segundo 30 de cada minuto irá rodar a tarefa
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log("Executando tarefa2", new Date().getSeconds())
})

