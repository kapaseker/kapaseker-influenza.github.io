$(function(){
      $("input[name=rhinorrhea]").click(function(event) {

        if($("#btn-norh").get(0).checked){
          $("#rh-much-div").slideUp(400);  
        }else{
          $("#rh-much-div").slideDown(400);  
        }

      });

      $("#btn-look").click(function(event) {

        var look_chart = "";
        var fever_grade = 0;

        var val_rh = $("input[name=rhinorrhea]:checked").val();
        if(val_rh != null){
          if(val_rh == "rh_on"){
              var val_rh_good = $("input[name=rhinorrhea-much]:checked").val();
              if(val_rh_good != null){
                if(val_rh_good == "rh-some"){
                  look_chart+="我就流一点点，";
                  fever_grade += 10;
                }else if(val_rh_good == "rh-mid"){
                  look_chart+="我就有点儿堵鼻子，";
                  fever_grade += 20;
                }else{
                  look_chart+="我鼻子已经堵得不能呼吸了，";
                  fever_grade += 30;
                }
              }else{
                alert("你没选择流鼻涕的程度啊，茜宝宝！！");
                return;
              }
          }else{
            look_chart += "我不流鼻涕，";
          }
        }else{
          alert("你没选择流不流鼻涕！！");
          return;
        }


        var throat_ache = $("input[name=throat-ache]:checked").val();
        if(throat_ache == null){
            alert("你没选择嗓子疼不疼！！");
            return;
        }else{
          if(throat_ache == "throat-no"){
            look_chart+="嗓子不疼，";
          } else if (throat_ache == "throat-mid") {
            look_chart+="嗓子有点点疼,";
            fever_grade += 20;
          } else {
            look_chart+="嗓子疼的不行了，肿起来了肯定，";
            fever_grade += 30;
          }
        }

        look_chart += "脑袋，你知道的，我今天清醒时间不超过半小时，";
        fever_grade += 20;

        var cough_str = $("input[name=cough]:checked").val();

        if(cough_str == null){
          alert("你没选择咳嗽不，都要选，茜宝宝！！");
          return;
        }else{
          if(cough_str == "cough-no"){
              look_chart += "没咳嗽，";
              fever_grade += 10;
            }else if (cough_str == "cough-mid") {
              look_chart += "有点点咳嗽倒是，";
              fever_grade += 20;
            } else {
              look_chart += "哎呀不行了，我这咳嗽的嗓子已经没声儿了，";
              fever_grade += 30;
            }
        }

        var fever_val = $("input[name=fever]:checked").val();

        if(fever_val == null) {
          alert("你没选择发烧不，茜宝宝！！");
          return;
        }else {
          if(fever_val == "fever-no"){
              look_chart += "幸好，没发烧，";
            }else if (fever_val == "fever-mid") {
              look_chart += "我现在已经有点烫了，";
              fever_grade += 20;
            } else {
              look_chart += "发高烧了我感觉，不行了已经，";
              fever_grade += 30;
            }
        }


        var hotcold_val = $("input[name=hotcold]:checked").val();
        if(hotcold_val == null) {
          alert("你没选择怕冷还是怕热呢！！");
          return;
        }else {
          if(hotcold_val == "hotcold-no"){
              look_chart += "体温正常，都不怕，";
            }else if (hotcold_val == "hotcold-mid") {
              look_chart += "怕冷，我觉得现在好冷，";
              fever_grade += 20;
            } else {
              look_chart += "哎，我觉得现在好热啊，";
              fever_grade += 20;
            }
        }

        var effort_var = $("input[name=effort]:checked").val();
        if(effort_var == null) {
          alert("你没选择怕冷还是怕热呢！！");
          return;
        }else {
          if(effort_var == "effort-no"){
              look_chart += "我现在一点力气都没有，";
              fever_grade += 30;
            }else if (effort_var == "effort-mid") {
              look_chart += "力气吗？还好吧，就是手上软，";
              fever_grade += 20;
            } else {
              look_chart += "力气没啥问题，感觉还行，有力气的，";
            }
        }

        look_chart += "就这些了，你快帮我看看吧，我觉得要很久才能好的，怎么办啊？";

        $("#look-chart-con").text(look_chart);

        var fever_con = "";

        if(fever_grade < 90) {
            fever_con = "好吧，茜宝宝，你这个还不算很严重，你先休息两天看看嘛，下周要是还这样，我就要找医生了。"
        } else {
            fever_con = "茜宝宝，你这个有点严重了，茜宝宝，茜宝宝，我要给你开药了，茜宝宝，再这样下去，谁受得了啊，茜宝宝。"    
        }

        $("#my-con").text(fever_con);

        $("#chart-container").slideUp(400,function () {
           $("#con-container").fadeIn(200, function() {
               
           }); 
        });
      });



      // function return_not_choose(dv) {
      //   dv.scroll();
      // };
    });
