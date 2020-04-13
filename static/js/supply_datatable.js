// Replace this url with production url
const nodeServerUrl = 'http://localhost:3000';


datatableDemandSupply = $('#datatableDemandSupply').DataTable({
    responsive: true,
    ajax: {
        url: nodeServerUrl + '/getSuppliers',
        dataSrc: function (data) {
            if(data && data.length > 0){
                $("#quickSearchRow").show();
            }
            return data;
        }
    },
    columnDefs: [
        {
            targets: 0,
            render: function (a, t, e, n) {
                var data = e;
                var output = "";

                var product = data["Product Name"];
                if(product)
                    output = product;

                return output;
            }
        },
        {
            targets: 1,
            render: function (a, t, e, n) {
                var data = e;
                var output = "";
                
                if(data.Supplier)
                    output = data.Supplier;
                
                return output;
            }
        },
        {
            targets: 2,
            render: function (a, t, e, n) {
                var data = e;
                var output = "";

                if("Pricing (INR Range)" in data){
                    output = data["Pricing (INR Range)"];
                }

                return output;
            }
        },
        {
            targets: 3,
            render: function (a, t, e, n) {
                var data = e;
                var output = "";

                var locations = data.Location;
                if(locations && locations.length>0){
                    for (var i = 0; i < locations.length; i++) {
                        output = output + locations[i]
                    }
                }
                

                return output;
            }
        },
        {
            targets: 4,
            render: function (a, t, e, n) {
                var data = e;
                var output = "";

                var states = data.State;
                if(states && states.length>0){
                    for (var i = 0; i < states.length; i++) {
                        if(states[i])
                            output = output + states[i]
                    }
                }

                return output;
            }
        },
        {
            targets: 5,
            render: function (a, t, e, n) {
                 var data = e;
                var output = "";
                
                var contactPersons = data["Contact Person"];
                if(contactPersons && contactPersons.length>0){
                    for (var i = 0; i < contactPersons.length; i++) {
                        output = output + contactPersons[i] 
                    }
                }

                return output;
            }
        },
        {
            targets: 6,
            render: function (a, t, e, n) {
                 var data = e;
                var output = "";
                
                var contactNumbers = data.Phone;
                if(contactNumbers && contactNumbers.length>0){
                    for (var i = 0; i < contactNumbers.length; i++) {
                        output = output + contactNumbers[i] 
                    }
                }

                return output;
            }
        },
        {
            targets: 7,
            render: function (a, t, e, n) {
                 var data = e;
                var output = "";
                
                var deliveryLocations = data["Delivery Location"];
                if(deliveryLocations && deliveryLocations.length>0){
                    for (var i = 0; i < deliveryLocations.length; i++) {
                        output = output + deliveryLocations[i] 
                    }
                }

                return output;
            }
        }
    ]
});

function setSearch(element){
    $('input[type="search"]').val(element.value);

    // Triggering an enter key press event
    var e = $.Event( "keyup", { which: 13 } );
    $('input[type="search"]').trigger(e);
}