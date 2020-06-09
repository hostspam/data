 function getIP(json) {
        document.getElementById("ip").innerHTML =  json.ip;
        document.getElementById("country").innerHTML =  json.country;
        document.getElementById("city").innerHTML =  json.city;
        document.getElementById("loc").innerHTML =  json.loc;

  }
