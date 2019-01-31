var settings = {
           "async": true,
           "crossDomain": true,
           "url": "https://api.ipdata.co/?api-key=2abd99f078c1b237f9b9b906f9617f46d0acd560884d71fd1a06bd20",
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
