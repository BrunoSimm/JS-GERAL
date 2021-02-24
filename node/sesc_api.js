const fs = require('fs') //Importando o FileSystem do node (nativo)
const { dirname } = require('path')
const ObjectsToCsv = require('objects-to-csv');
var csv = require("csvtojson");
var path = require('path');
const fetch = require('node-fetch');
const arquivo = require('./sesc')


async function obterDados(){
    try {
        var clientes = await arquivo.lerCSV();
        console.log(clientes.length)
        var result = []
        
        for (let i = 0; i < clientes.length; i++) {
            
            const url = new URL(
                "https://api.iporto.com.br/api/panel/contact"
            );
    
            let params = {
                "search": clientes[i].email
            };
            Object.keys(params)
                .forEach(key => url.searchParams.append(key, params[key]));
    
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer XXX",
            };
            fetch(url, {
                method: "GET",
                headers: headers,
            }).then(response => response.json()).then(json => {
                    var data = json.data;
                    console.log(json.data.email)
                    result.push({
                        "email": data[0].email,
                        "name": data[0].name,
                        "address": data[0].address,
                        "phone1": data[0].phone1
                    })
                    new ObjectsToCsv(result).toDisk('./clientesSESC.csv', { allColumns: true });
                })
        } 
    } catch (error) {
        console.log("deu ruim",error)
    }
        
    }
        
        
    


let resp = obterDados();
console.log(resp[10])