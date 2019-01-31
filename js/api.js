var settings = {
           "async": true,
           "crossDomain": true,
           "url": "http://api.ipstack.com/check?access_key=f2279bfcac789299f1756a5cd77f7606",
           "method": "GET"
        }

        $.ajax(settings).done(function (response) {
            console.log(response);

            var country = response.country_code;
            var continent = response.continent_code;
            $("#countryCode").append(country);
            console.log(country);
            console.log(continent);
            window.countryCode=country;
            window.continentCode=continent;
        });
