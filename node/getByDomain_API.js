const fetch = require('node-fetch');
const ObjectsToCsv = require('objects-to-csv');

var dados = []
var total = []

for (let index = 1; index <= 522; index++) {
    const url = new URL(
        `https://api.iporto.com.br/api/panel/send/history`
    );
    
    let params = {
        "start_at": "2020-11-30",
        "end_at": "2020-11-30",
        "page":`${index}`

    };
    Object.keys(params)
        .forEach(key => url.searchParams.append(key, params[key]));
    
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer XXXXX",
    };
    
    fetch(url, {
        method: "GET",
        headers: headers,
    })
        .then(response => response.json())
        .then(json => {
            try {
                var data = json.data;
                const filtrarByDomain = data.filter(function(value){
                    if ((value.address_from_auth == "boleto@rovernet.com.br")){
                        return value
                    }
                })

                filtrarByDomain.forEach((value) => {
                    dados.push(value);
                })

                console.log(dados.length)
                new ObjectsToCsv(dados).toDisk('./test3.csv', { allColumns: true });

            } catch (error) {
                console.log(error)
            }
            });

}