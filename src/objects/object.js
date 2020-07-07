const fetch = require('node-fetch');
class API{
    async obtenPersona(){
        const persona = await fetch("https://randomuser.me/api/");
		var apiData = await persona.json();
		return apiData;
    
    }

}
module.exports = API;