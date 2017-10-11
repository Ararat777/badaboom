$(document).ready(function(){

    window.setInterval(countDown, 500);

    function countDown() {
        var now = new Date();
        var future = new Date("10/15/2017 12:00:00");
        var timeLeft = future - now;
        var milli = timeLeft;

        var seconds = milli / 1000;
        var minutes = seconds / 60;
        var hours = minutes / 60;
        var days = hours / 24;
        var spareSeconds = seconds % 60;
        var spareMinutes = minutes % 60;
        var spareHours = hours % 24;
        var spareDays = days % 365;

        minutes = parseInt(minutes);
        hours = parseInt(hours);
        days = parseInt(days);
        spareSeconds = parseInt(spareSeconds);
        spareMinutes = parseInt(spareMinutes);
        spareHours = parseInt(spareHours);
        spareDays = parseInt(spareDays);

        days = padNumber(days);
        hours = padNumber(hours);
        minutes = padNumber(minutes);
        spareSeconds = padNumber(spareSeconds);
        spareMinutes = padNumber(spareMinutes);
        spareHours = padNumber(spareHours);
        spareDays = padNumber(spareDays);

        timeLeft = spareDays + ":" + spareHours + ":" + spareMinutes + ":" + spareSeconds;
        var mySpan = document.getElementById("timer");
        mySpan.innerHTML = timeLeft;
        // var myFooterSpan = document.getElementById("footer_timer");
        // myFooterSpan.innerHTML = timeLeft;

        if (milli <= 0) { //Time's run out! If all values go to zero
          mySpan.innerHTML = "00:00:00";
          // myFooterSpan.innerHTML = "00:00:00";
        }
    }

    function padNumber(number) {
      if (number < 10) {
        number = "0" + number;
      }
      return number;
    }

    $("header nav, .box_bonus").on("click","a[href^='#']", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
            top = $(id).offset().top;  
            $('body,html').animate({scrollTop: top-50}, 1500);
    });

    $(".footer_nav ul").on("click","a[href^='#']", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;  
        $('body,html').animate({scrollTop: top-50}, 1500);
    });

    $(".toggle_menu").click(function() {
        $(this).toggleClass("on");
        $("nav").slideToggle();
    });

    $(window).scroll(function() {
        var top = $(document).scrollTop();
        var height = $(".top_line").height();
        var scroll = $(document).scrollTop();
        var fixtop = $('.top');
        var screenHeight = window.innerHeight;
        if (top > height) {
            $(".top_line").addClass("fixed")
            .removeClass("content");
            $(".wrap_top_line").css({"height": height});
        }
        else {
            $(".top_line").removeClass("fixed")
            .addClass("content");
            $(".wrap_top_line").css({"height":"auto"});
        }
        if (scroll > screenHeight) {
            fixtop.css({'display':'block'});
        } 
        else if(scroll <= screenHeight) {
            fixtop.css({'display':'none'});
        }
    });

    $(".top").click(function(){
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });


    $('.language-select').click(function(){
        $(this).toggleClass('open');
    });

    $('.container').click(function(){
        $(this).toggleClass('flipped');
    });

    $('#faq li > .item').click(function(){
        $(this).toggleClass('active');
        $(this).next('div').slideToggle(200);
    });

    $('.gannt').click(function(){
        $('#gannt').fadeIn();
        if (window.innerWidth>1000) {
            q_width = (window.innerWidth - $('#gannt').width())/2;
        } else q_width = 0;
        q_height = (window.innerHeight - $('#gannt').height())/2;
        $('#gannt').css({
            'left': q_width,
            'top': q_height
        });
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        return false;
    });

    $("#popup_close").click(function(){
        $('#gannt').fadeOut();
        $('#fade').remove();
    });
    $(document).mouseup(function(e){
        var container = $("#gannt");
        if (container.has(e.target).length === 0){
            $('#gannt').fadeOut();
            $('#fade').remove();
        };
    });
    $("#gannt").mouseup(function(e){
        var container = $("#gannt");
        if (container.has(e.target).length === 0){
            return false;
        };
    });

    // google.charts.load('current', {'packages':['corechart']});
    // google.charts.setOnLoadCallback(drawChart);
    // function drawChart() {
    //     var percentage = google.visualization.arrayToDataTable([
    //         ["Structure", "Percent"],
    //         ["Supercomputer and infrastructure", 80.0],
    //         ["Development", 10.0],
    //         ["Marketing and PR", 7.0],
    //         ["Research", 3.0]
    //     ]);
    //     var options = {
    //         legend: {
    //             position: "labeled",
    //             textStyle: {fontSize: 22, fontName: "OpenSansRegular"}
    //         },
    //         chartArea: {width: "100%", height: "80%"},
    //         pieSliceText: "none",
    //         colors: ["#39d9b6", "#f4f083", "#78f8cf", "#a374f0"],
    //         tooltip: { trigger: 'none' },
    //         pieHole: 0
    //     };
    //     var chart = new google.visualization.PieChart(document.getElementById("piechart"));
    //     var redrawChart = function () {
    //         options.legend.position = (window.outerWidth < 768 ? "bottom" : "labeled");
    //         options.pieSliceText = (window.outerWidth < 768 ? "percentage" : "none");
    //         chart.draw(percentage, options);
    //     };
    //     redrawChart();

    //     if (window.addEventListener) {
    //         window.addEventListener("resize", redrawChart);
    //     } else {
    //         window.attachEvent("onresize", redrawChart);
    //     }
    // };



    $(".subscribe_email").submit(function() {
        var form_data = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: form_data,
            success: function() {
                $('.subscribe_email').html("<br/>Thank you. The application was accepted.");
            }
        });
    });


/*
*
*   Currency Converter
*
*/


/*
    var input = document.getElementById('amount_TFL_to_buy');
    var p = document.querySelector('.box_qty_me');
    var li = document.querySelectorAll('.selectric_items li');
    var controls = document.querySelector('.box_qty_form_btn');
    var selectActive = document.querySelector('.selected').innerHTML;
    var total_money = document.querySelector('.total_money span');
    console.log(total_money);

    var q = [1325, 21, 111.5, 92, 2];
    var currency = [' BTC', ' LTC', ' ETH', ' DASH', ' USD'];


    $('.selectric').click(function(){
        $('.selectric_items').slideToggle();
        return false;
    });

    $('.val_in').click(function(){
        if(!$(this).hasClass('selected')){ 
            $('.val_in').removeClass('selected').removeClass('highlighted');
            $(this).addClass('selected').addClass('highlighted'); 
            var labeSelectric = document.querySelector('.selectric .label');
            var selectActive = document.querySelector('.selected').innerHTML;
            var selectActive2 = labeSelectric.innerHTML = selectActive;
        }
        var curs = $('.val_in.selected');
        var span_curs = $('.curs');
        if(curs.hasClass('inbtc')){
            span_curs.html((Math.round(1/q[0] * 10000) / 10000)+currency[0]);
        } else if(curs.hasClass('inltc')){
            span_curs.html((Math.round(1/q[1] * 10000) / 10000)+currency[1]);
        } else if(curs.hasClass('ineth')){
            span_curs.html((Math.round(1/q[2] * 10000) / 10000)+currency[2]);
        } else if(curs.hasClass('indash')){
            span_curs.html((Math.round(1/q[3] * 10000) / 10000)+currency[3]);
        } else if(curs.hasClass('inusd')){
            span_curs.html((Math.round(1/q[4] * 10000) / 10000)+currency[3]);
        }
    });




    
    function bindOutput(targetElement, targetElementTotal) {
        return function(newValue) {
            var tElement = targetElement.innerHTML = newValue*0.2^0;
            var tElementTotal = targetElementTotal.innerHTML  = +tElement + +input.value;
            console.log(tElementTotal);
        };
    }
    // function bindTotal(targetElement) {
    //     return function(newValue) {
    //         targetElement.innerHTML = newValue*0.2^0;;
    //     };
    // }
    function bind2Output(tElement) {
        return function() {
            var inputValue = +(input.value);
            for (var i = 0; i < tElement.length; i++) {
                var element = (inputValue/q[i]);
                element = (Math.round(element * 10000) / 10000) + currency[i];

                var num = !isNaN(inputValue);
                tElement[i].innerHTML = num ? element : 0 + currency[i];
            }
            return tElement;       
        };
    }
    function getCallbacks(inputElement, outputCallback, currency) {
        return {
            plus: function(event) {
                var num = !isNaN(+inputElement.value)&&(+inputElement.value<10000000);
                inputElement.value = num ? +inputElement.value + 100 : 1;
                outputCallback(input.value);
                currency();
                selectAct();
            },
            minus: function (event) {
                var num = !isNaN(+inputElement.value)&&(+inputElement.value>100);
                inputElement.value = num ? +inputElement.value - 100 : 1;
                outputCallback(input.value);
                currency();
                selectAct();
            }
        };
    }
    function mapEventToValue(event) {
        return event.target.value;
    }
    function compose() {
        var args = Array.prototype.slice.call(arguments);   
        return function(initValue) {
            return args.reduce(function(acc, el) {                
                return el(acc);
            }, initValue);
        };
    }
    function selectAct(){
        var selectActive = document.querySelector('.selected').innerHTML;
        var labeSelectric = document.querySelector('.selectric .label');
        return labeSelectric.innerHTML = selectActive;
    }
   
    var pOutput = bindOutput(p, total_money);
    var liOutput = bind2Output(li);
    var callbacks = getCallbacks(input, pOutput, liOutput);
    input.addEventListener('input', compose(mapEventToValue, pOutput));
    input.addEventListener('input', compose(mapEventToValue, liOutput));
    input.addEventListener('input', function selectAct(){
        var selectActive = document.querySelector('.selected').innerHTML;
        var labeSelectric = document.querySelector('.selectric .label');
        return labeSelectric.innerHTML = selectActive;
    });
    controls.addEventListener('click', function(event) {
        event.preventDefault();
        var controlType = event.target.getAttribute('data-control');
        typeof callbacks[controlType] === 'function' && callbacks[controlType]();
    });

*/
    $(".slider_phone.owl-carousel").owlCarousel({
        items : 1,
        nav : true,
        navText : " ",
        loop : true,
        margin: 0,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 900,
        autoplaySpeed : 900,
        navSpeed : 200,
        dotsSpeed : 100,
        dragEndSpeed : 900
    });

    if(window.innerWidth <= 768){
        $(".people").addClass("owl-carousel");
    } else{
        $(".people").removeClass("owl-carousel");
    }

    
    $(".people.owl-carousel").owlCarousel({
        items : 2,
        nav : true,
        navText : " ",
        loop : true,
        margin: 10,
        autoplay : true,
        autoplayHoverPause : true,
        fluidSpeed : 900,
        autoplaySpeed : 900,
        navSpeed : 200,
        dotsSpeed : 100,
        dragEndSpeed : 900,
        responsive:{ 
            0:{
                items:1
            },
            480:{
                items:2
            }
        }
    });

    window.onresize = function(){
        if(window.innerWidth <= 768){
            $(".people").addClass("owl-carousel").owlCarousel({
                items : 2,
                nav : true,
                navText : " ",
                loop : true,
                margin: 10,
                autoplay : true,
                autoplayHoverPause : true,
                fluidSpeed : 900,
                autoplaySpeed : 900,
                navSpeed : 200,
                dotsSpeed : 100,
                dragEndSpeed : 900,
                responsive:{ 
                    0:{
                        items:1
                    },
                    480:{
                        items:2
                    }
                }
            });
        } else{
            $(".people").removeClass("owl-carousel").trigger('destroy.owl.carousel');
        }
    }


    Chart.defaults.global.defaultFontSize = 18;
    var dataPie = {
      labels: [
        "2%-Лотерея",
        "29.45%-Консультанты и команда",
        "0.55%-PRE-ICO",
        "3%-Bounty",
        "65%-ICO"
      ],
      datasets: [{
        data: [2, 29.45, 0.55, 3, 65],
        backgroundColor: [
          "#7754f2",
          "#984ee7",
          "#4670f4",
          "#c751cd",
          "#00baff"
        ],
        hoverBackgroundColor: [
          "#9176f2",
          "#b487e5",
          "#9bb4ff",
          "#d48cd8",
          "#5bcdf7"
        ]
      }]
    };
    var pie = $("#piechart");
    var myPie = new Chart(pie, {
      type: 'pie',
      data: dataPie,
      options: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    });


    var dataDonut = {
      labels: [
        "Heading1",
        "Heading2",
        "Heading3"
      ],
      datasets: [{
        data: [70, 20, 10],
        backgroundColor: [
          "#984ee7",
          "#c751cd",
          "#00baff"
        ],
        hoverBackgroundColor: [
          "#b487e5",
          "#d48cd8",
          "#5bcdf7"
        ]
      }]
    };
    var donut = $("#donutchart");
    var myDonut = new Chart(donut, {
      type: 'doughnut',
      data: dataDonut,
      options: {
        legend: {
          display: false,
        }
      }
    });


});