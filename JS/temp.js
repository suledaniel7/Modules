const fs = require('fs/promises');

fs.readFile('./country_flags.json').then((val) => {
    console.log("Read Countries");
    countries = val.toString();
    countries = JSON.parse(countries);

    fs.readFile('./country_extensions.json').then((v2) => {
        console.log("Read Extensions");
        extensions = v2.toString();
        extensions = JSON.parse(extensions);

        let cArr = [];

        extensions.forEach((ext) => {
            countries.forEach((c) => {
                if (ext.code == c.code) {
                    cArr.push({
                        "name": c.name,
                        "code": c.code,
                        "unicode": c.unicode,
                        "ext": ext.dial_code,
                        "reg_match": "^\+{1}(\d){13,14}$|^(\d){11}$"
                    });
                }
            });
        });

        fs.writeFile('./final_countries.txt', JSON.stringify(cArr)).then(() => {
            console.log("Operation Completed!");
        });
    });
});