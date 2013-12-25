$(window).load(function(){

  // Hiding and showing attributes for vehicles
  $("#vehicle_vehicle_type").val() =='Satellite'
  $("#payload_weight").show();
  $("#occupants").hide();

  $( "#vehicle_vehicle_type" ).change(function() {
    if ($("#vehicle_vehicle_type").val() == 'Shuttle'){
      $("#payload_weight").hide();
      $("#occupants").show();
    }
    else if ($("#vehicle_vehicle_type").val() == 'Satellite'){
      
      $("#payload_weight").show();
      $("#occupants").hide();
    }
  });

  // AJAX call for getting engine power and payload.
  $("#vehicle_engine_id").change(function() {
  $.ajax({ url: "engine_data", context: document.body,data: {engine_model : $(this).val()}, success: function(){
  }});
});

});