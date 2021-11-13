$(document).ready(function () {
    $("form[calculator-element='calculator']").append("<input type='hidden' name='val' id='calculator-val-sent' value>");

    function returnTotal() {
        let sum = 0;

        $.each($("input:checkbox"), function () {
            let attr = $(this).attr('calculator-value');
            if (typeof attr !== typeof undefined && attr !== false) {
                if ($(this).is(':checked')) {
                    sum += Number(($(this).attr('calculator-value')));
                }
            }            
        });

        $.each($("input:radio"), function () {
            let attr = $(this).attr('calculator-value');
            if (typeof attr !== typeof undefined && attr !== false) {
                if ($(this).is(':checked')) {
                    sum += Number(($(this).attr('calculator-value')));
                }
            }                 
        });
        
        $.each($("input[type='number']"), function () {
            let attr = $(this).attr('calculator-value');
            if (typeof attr !== typeof undefined && attr !== false) {
                sum += Number(($(this).val() * ($(this).attr('calculator-value'))));
            }    
        });

        $.each($("select[calculator-element='select'"), function () {
            if(!isNaN($(this).val())) {
                sum += Number(($(this).val()));
            }
        });

        let currency = $('[calculator-element=price]').attr('calculator-currency');
        ($('[calculator-element=price]')).text(sum + " " + currency);
        $("form[calculator-element='calculator'] input[id='calculator-val-sent']").attr("value", sum);
    }

    returnTotal();
    $("form[calculator-element='calculator'] input:checkbox[calculator-value], form[calculator-element='calculator'] input:radio[calculator-value]").on('click', function () {
        returnTotal();
    })
    $("form[calculator-element='calculator'] input[type='number'][calculator-value], form[calculator-element='calculator'] select[calculator-element='select']").on('input', function () {
        returnTotal();
    })
});