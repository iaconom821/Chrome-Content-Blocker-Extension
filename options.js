
document.getElementById("accept").addEventListener("click", site_added)
document.getElementById("accept").addEventListener("click", site_submit)


function site_added(){
    document.getElementById("accepted").innerHTML = "Site Added"
    return false;
}

function site_submit() {
    const newSite = document.getElementById("accept").nodeValue
    const fs = require("fs");
    if (fs.readFile(`${newSite}.json`)) {
        return "Already Added"
    } else {
        const obj = {newSite: newSite}
        const json = JSON.stringify(obj);
        fs.writeFile(`${newSite}.json`, json, 'utf8', callback)
    }
}

