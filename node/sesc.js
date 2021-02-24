const fs = require('fs') //Importando o FileSystem do node (nativo)
const { dirname } = require('path')
const ObjectsToCsv = require('objects-to-csv');
var csv = require("csvtojson");
var path = require('path');
const fetch = require('node-fetch');


   function lerCSV(){
        var caminho = __dirname + "/cliques_sesc.csv"
        var filePath = path.join(__dirname, '/cliques_sesc.csv');
        // Read CSV
        var f = fs.readFileSync(filePath, { encoding: 'utf-8' },
            function (err) { console.log(err); });

        // Split on row
        f = f.split("\n");

        // Get first row for column headers
        cabecalhos = f.shift().split(";");

        var json = [];
        var emails = [];
        f.forEach(function (d) {
            // Loop through each row
            tmp = {}
            row = d.split(";")
            for (var i = 0; i < cabecalhos.length; i++) {
                tmp[cabecalhos[i]] = row[i];
            }
            // Add object to list
            json.push(tmp);
            emails.push({
                "email": tmp.email,
                "phone1": "",
                "address": "",
                "name": ""
            });
        });

        console.log(json[2]);
        console.log(emails[2])
        return emails;
    }

    var dados = lerCSV();
    console.log(dados.length)

    module.exports = {
        lerCSV: lerCSV
    }
    
    
    

    

//}

/*
fs.readFile(caminho,'utf-8', (err,conteudo) => {






   /* const logs = JSON.parse(conteudo)
    console.log(`${logs.data[0]._id} + ${logs.data[0].address_from_auth}`)
    //console.log(logs)
    const total = logs.data;
    console.log(total.length)
    const filtrarByDomain = total.filter(function(value){
        if ((value.address_from_auth == "boleto@rovernet.com.br")){
            return value
        }
    })
*/
/*
    new ObjectsToCsv(filtrarByDomain).toDisk('./test.csv', { allColumns: true });
    

    console.log(filtrarByDomain.length)
    fs.writeFile(__dirname + "/logsFiltrado.json", JSON.stringify(filtrarByDomain),err => {
        console.log(err || "Arquivo salvos!")
    })
})*/
    
    