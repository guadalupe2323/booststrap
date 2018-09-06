var countries = '[{"Nombre":"Diego","Apellido":"Cueto","Edad":"23","Sexo":"H","Gmail":"diegocueto-9@hotmail.com","Telefono":"9662323090","Direccion":"16 de Septiembre"},' +
  '{"Nombre":"Lucio","Apellido":"Escobar","Edad":"22","Sexo":"H","Gmail":"lucio48@outlook.com","Telefono": "9681197536","Direccion":"Col. Revolucion"},' +
  '{"Nombre":"Tomas","Apellido":"Lopez","Edad":"22","Sexo":"H","Gmail":"thomas_mcthom@Outlook.com","Telefono":"9681009079","Direccion":"Segunda Avenida Sur"},' +
  '{"Nombre":"Fidel","Apellido":"Rodriguez","Edad":"22","Sexo":"H","Gmail":"fidelin24_@hotmail.com","Telefono":"9684547383","Direccion":"Avenida calle central"},' +
  '{"Nombre":"Lorena","Apellido":"Zarate","Edad":"22","Sexo":"M","Gmail":"anerol_brumars@hotmail.com","Telefono":"9684556783","Direccion":"8a orient entre 4a y 5a Nort"},' +
  '{"Nombre":"Roxana","Apellido":"Salazar","Edad":"22","Sexo":"M","Gmail":"monce.26@hotmail.com","Telefono":"9689542380","Direccion":"Entrada de tehuacan"},' +
  '{"Nombre":"Guadalupe","Apellido":"Aguilar","Edad":"22","Sexo":"M","Gmail":"guadalupeaguilar@outlook.com", "Telefono": "9684345300","Direccion":"Avenida Ferrocarril"}]';

$("#wrapper").on("click",function(){
	var response = $.parseJSON(countries);
  var $table = $('<table></table>');
	$table.append("<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Sexo</th><th>Gmail</th><th>Telefono</th><th>Direccion</th></tr>")
  $.each(response, function(i, item) {
      var tr = $('<tr>').append(
        $('<td>').text(item.Nombre),
        $('<td>').text(item.Apellido),
        $('<td>').text(item.Edad),
        $('<td>').text(item.Sexo),
        $('<td>').text(item.Gmail),
        $('<td>').text(item.Telefono),
        $('<td>').text(item.Direccion));
      $table.append(tr);
    });
    $("#wrapper").append($table)
    $("#wrapper button").hide()
})
