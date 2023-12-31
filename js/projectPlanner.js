$(document).ready(function() {
    $('#item_starter').css('border', '2px solid var(--card-border-color-selected)');
    $('#item_essentials').css('border', '2px solid var(--card-border-color)');
    $('#item_professionals').css('border', '2px solid var(--card-border-color)');
    $('#item_advanced').css('border', '2px solid var(--card-border-color)');
    $('#tag_starter').css('display', 'block');
    $('#tag_essentials').css('display', 'none');
    $('#tag_professionals').css('display', 'none');
    $('#tag_advanced').css('display', 'none');
    $('#i_service_1').css('display', 'block');
    $('#i_service_2').css('display', 'none');
    $('#i_service_3').css('display', 'none');
    $('#i_service_4').css('display', 'none');
    $('#i_service_5').css('display', 'none');
    $('#i_service_6').css('display', 'none');
    $('#i_service_7').css('display', 'none');
    $('#i_service_8').css('display', 'block');
    $('#i_service_9').css('display', 'none');
    
    $('.slider').bxSlider();

    var cost_estimate = 0;
    var feature_type = 0;
    var maintenance_month = 0;
    var maintenance_hour = 0;    
    var added_maintenance = 0;
    var added_opfeature = 0;

    const maintenance_houly_cost = 5;
    const optional_feature_cost = 2300;
    
    $('#item_starter').on("click", function() {
      feature_type = 0;
      $('#item_starter').css('border', '2px solid var(--card-border-color-selected)');
      $('#item_essentials').css('border', '2px solid var(--card-border-color)');
      $('#item_professionals').css('border', '2px solid var(--card-border-color)');
      $('#item_advanced').css('border', '2px solid var(--card-border-color)');
      $('#tag_starter').css('display', 'block');
      $('#tag_essentials').css('display', 'none');
      $('#tag_professionals').css('display', 'none');
      $('#tag_advanced').css('display', 'none');
      $('#i_service_1').css('display', 'block');
      $('#i_service_2').css('display', 'none');
      $('#i_service_3').css('display', 'none');
      $('#i_service_4').css('display', 'none');
      $('#i_service_5').css('display', 'none');
      $('#i_service_6').css('display', 'none');
      $('#i_service_7').css('display', 'none');
      $('#i_service_8').css('display', 'block');
      $('#i_service_9').css('display', 'none');
      calc_estimate();
    });
    $('#item_essentials').on("click", function() {
      feature_type = 1;
      $('#item_starter').css('border', '2px solid var(--card-border-color)');
      $('#item_essentials').css('border', '2px solid var(--card-border-color-selected)');
      $('#item_professionals').css('border', '2px solid var(--card-border-color)');
      $('#item_advanced').css('border', '2px solid var(--card-border-color)');
      $('#tag_starter').css('display', 'none');
      $('#tag_essentials').css('display', 'block');
      $('#tag_professionals').css('display', 'none');
      $('#tag_advanced').css('display', 'none');
      $('#i_service_1').css('display', 'block');
      $('#i_service_2').css('display', 'block');
      $('#i_service_3').css('display', 'none');
      $('#i_service_4').css('display', 'none');
      $('#i_service_5').css('display', 'none');
      $('#i_service_6').css('display', 'none');
      $('#i_service_7').css('display', 'block');
      $('#i_service_8').css('display', 'none');
      $('#i_service_9').css('display', 'none');
      calc_estimate();
    });
    $('#item_professionals').on("click", function() {
      feature_type = 2;
      $('#item_starter').css('border', '2px solid var(--card-border-color)');
      $('#item_essentials').css('border', '2px solid var(--card-border-color)');
      $('#item_professionals').css('border', '2px solid var(--card-border-color-selected)');
      $('#item_advanced').css('border', '2px solid var(--card-border-color)');
      $('#tag_starter').css('display', 'none');
      $('#tag_essentials').css('display', 'none');
      $('#tag_professionals').css('display', 'block');
      $('#tag_advanced').css('display', 'none');
      $('#i_service_1').css('display', 'block');
      $('#i_service_2').css('display', 'block');
      $('#i_service_3').css('display', 'block');
      $('#i_service_4').css('display', 'none');
      $('#i_service_5').css('display', 'none');
      $('#i_service_6').css('display', 'block');
      $('#i_service_7').css('display', 'none');
      $('#i_service_8').css('display', 'none');
      $('#i_service_8').css('display', 'none');
      $('#i_service_9').css('display', 'block');
      calc_estimate();
    });
    $('#item_advanced').on("click", function() {
      feature_type = 3;
      $('#item_starter').css('border', '2px solid var(--card-border-color)');
      $('#item_essentials').css('border', '2px solid var(--card-border-color)');
      $('#item_professionals').css('border', '2px solid var(--card-border-color)');
      $('#item_advanced').css('border', '2px solid var(--card-border-color-selected)');
      $('#tag_starter').css('display', 'none');
      $('#tag_essentials').css('display', 'none');
      $('#tag_professionals').css('display', 'none');
      $('#tag_advanced').css('display', 'block');
      $('#i_service_1').css('display', 'block');
      $('#i_service_2').css('display', 'block');
      $('#i_service_3').css('display', 'block');
      $('#i_service_4').css('display', 'block');
      $('#i_service_5').css('display', 'block');
      $('#i_service_6').css('display', 'none');
      $('#i_service_7').css('display', 'none');
      $('#i_service_8').css('display', 'none');
      $('#i_service_8').css('display', 'none');
      $('#i_service_9').css('display', 'block');     
       calc_estimate();
    });

    $("#maintenance_month").on("input change", function (event) {
      maintenance_month = $(this).val();
      $("#maintenance_month_value span").html($(this).val());
      $("#maintenance_cost span").html(new Intl.NumberFormat('en-US').format(maintenance_month * maintenance_hour * maintenance_houly_cost));
      calc_estimate();
    });

    $("#maintenance_hour").on("input change", function (event) {    
      maintenance_hour = $(this).val();      
      $("#maintenance_hour_value span").html($(this).val());
      $("#maintenance_cost span").html(new Intl.NumberFormat('en-US').format(maintenance_month * maintenance_hour * maintenance_houly_cost));
      calc_estimate();
    });

    $('#mt_add').on("click", function() {
      added_maintenance = (added_maintenance === 0 ? 1 : 0);
      if (added_maintenance == 1) {
        $('#mt_add').addClass('btn_added');
        $('#mt_add').html("Remove");
      }
      else {
        $('#mt_add').removeClass('btn_added');
        $('#mt_add').html("Add");
      }
      calc_estimate();
    });

    $('#af_add').on("click", function() {
        added_opfeature = (added_opfeature === 0 ? 1 : 0);
      if (added_opfeature == 1) {
        $('#af_add').addClass('btn_added');
        $('#af_add').html("Remove");
      }
      else {
        $('#af_add').removeClass('btn_added');
        $('#af_add').html("Add");
      }
      calc_estimate();
    });

    function feature_cost(feature_type) {
        var cost = 0;
        switch (feature_type) {
            case 0:
                cost = 15000;
                break;
            case 1:
                cost = 35000;
                break;
            case 2:
                cost = 75000;
                break;
            case 3:
                cost = 125000;
                break;
        }
        return cost;
    }

    function feature_type_str(feature_type) {
        var type = "";
        switch (feature_type) {
            case 0:
                type = "Starter";
                break;
            case 1:
                type = "Essentials";
                break;
            case 2:
                type = "Professionals";
                break;
            case 3:
                type = "Advanced";
                break;
        }
        return type;
    }

    function calc_estimate() {
      cost_estimate = feature_cost(feature_type)
              + (added_maintenance === 1 ? maintenance_month * maintenance_hour * 5 : 0)
              + (added_opfeature === 1 ? optional_feature_cost : 0);
      $("#btn_estimate span").html(new Intl.NumberFormat('en-US').format(cost_estimate));
      $("#d_feature_type").html(feature_type_str(feature_type));
      var mat = (added_maintenance == 0 || maintenance_month == 0 || maintenance_hour == 0) ? "No" :
                  (maintenance_month + " months, " + maintenance_hour + " hours");
      $("#d_maintanence").html(mat);
      $("#d_op_feature").html(added_opfeature == 1 ? "Yes" : "No");
      $("#d_cost_estimate span").html(new Intl.NumberFormat('en-US').format(cost_estimate));
    }
    calc_estimate();

    $('#btn_estimate').on("click", function() {
      calc_estimate();
    });
   
       
    $('#btnSubmitConfirm').on("click", function() {
//      if (req_confirm != 0) return;
//      req_confirm = 1;
//      d.dialog('close');
        writeUserData(
          $("#user_name").val(),
          $("#user_mail").val(),
          $("#user_describe").val(),
          feature_type,
          added_maintenance === 1 ? maintenance_month : 0,
          added_maintenance === 1 ? maintenance_hour : 0,
          added_opfeature,
          cost_estimate
        );
    });

    function makeKey(length) {
      var result           = [];
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
      }
      return result.join('');
    }

    function writeUserData(user_name, user_mail, user_describe, feature_type, mt_month, mt_hour, op_feature, cost_estimate) {
        var userId = "0BGKxnfaUoQ8CIx8UWhnskdB3S12";
        var database = firebase.database();        
        var node_name = makeKey(16);
        console.log(node_name);
        database.ref(node_name).set({
          user_name: user_name,
          user_mail: user_mail,
          user_describe : user_describe,
          feature_type : feature_type,
          mt_month : mt_month,
          mt_hour : mt_hour,
          op_feature : op_feature,
          cost_estimate : cost_estimate
        });
      }
  });