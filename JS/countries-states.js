const fs = require('fs/promises');

function readCountries(){
    let countries = [];
    fs.readFile('./o_ctrs.json').then((conts)=>{
        let c_js = conts.toString();
        c_js = JSON.parse(c_js);
        c_js.forEach((country)=>{
            let states = [];
            country.states.forEach((state)=>{
                states.push({
                    code: state.code,
                    name: state.name
                });
            });

            countries.push({
                code: country.code2,
                name: country.name,
                hasStates: country.states.length > 0,
                states: states
            });
        });

        console.log("Countries and States read");

        fs.writeFile('./countries.json', JSON.stringify(countries)).then(()=>{
            console.log("File written");
        }).catch(e=>{
            console.log(e);
        });
    });
}

readCountries();