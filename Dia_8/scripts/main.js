var templateUnderscore = "\
                <% for (var index = 0; index <  json.profiles.length; index++){ %>\
		<% var profile =  json.profiles[index]; %>\
                <div>\
                    <p>Name: <%= profile.name %></p>\
                    <p>Age: <%= profile.age %></p>\
                    <p>Company: <%= profile.company %></p>\
                    <p>Actualposition: <%= profile.actualposition %></p>\
                    <p>Lastposition: <%= profile.lastposition %></p>\
                    <p>City: <%= profile.city %></p>\
                    <p>University: <%= profile.university %></p>\
                    <p>Carrer: <%= profile.carrer %></p>\
                    <p>Phone: <%= profile.phone %></p>\
                    <p>Address: <%= profile.address %></p>\
                    <p>Civilstate: <%= profile.civilstate %></p>\
                </div>\
                <% } %>\
";


 var templateMustache = "<div>\
                                {{#profiles}}<p>Name: {{name}}</p>\
                                <p>Age: {{age}}</p>\
                                <p>Company: {{company}}</p>\
                                <p>Actualposition: {{actualposition}}</p>\
                                <p>Lastposition: {{lastposition}}</p>\
                                <p>City: {{city}}</p>\
                                <p>University: {{university}}</p>\
                                <p>Carrer: {{carrer}}</p>\
                                <p>Phone: {{phone}}</p>\
                                <p>Address: {{address}}</p>\
                                <p>Civilstate: {{civilstate}}</p>{{/profiles}}\
                 </div>";
 
var templateJSmart = "\
        {foreach $profiles as $i => $profile}\
            <p>Name: {$profile.name}</p>\
            <p>Age: {$profile.age}</p>\
            <p>Company: {$profile.company}</p>\
            <p>Actualposition: {$profile.actualposition}</p>\
            <p>Lastposition: {$profile.lastposition}</p>\
            <p>City: {$profile.city}</p>\
            <p>University: {$profile.university}</p>\
            <p>Carrer: {$profile.carrer}</p>\
            <p>Phone: {$profile.phone}</p>\
            <p>Address: {$profile.address}</p>\
            <p>Civil state: {$profile.civilstate}</p>\
            </div>\
        {/foreach}\
";

 $(document).ready(function() {
     var output = Mustache.render(templateMustache, json)
     $("#template1").html(output);
     var info = _.template(templateUnderscore, { json : json });
     $("#template2").html(info);
     var data = new jSmart(templateJSmart);
      var res = data.fetch( json );
     $("#template3").html(res);
 });