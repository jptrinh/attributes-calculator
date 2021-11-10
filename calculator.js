$(document).ready(function () {
    $("form[calculator-element='calculator']").append("<input type='hidden' name='val' id='calculator-val-sent' value>");

    function returnTotal() {
        let sum = 0;

        $.each($("input:checkbox"), function () {
            if ($(this).is(':checked')) {
                sum += Number(($(this).attr('calculator-value')));
            }
        });

        $.each($("input:radio"), function () {
            if ($(this).is(':checked')) {
                sum += Number(($(this).attr('calculator-value')));
            }
        });

        $.each($("input[type='number']"), function () {
            if ($(this).attr('calculator-value') = undefined) {
                sum += Number(($(this).val()));
            } else {
                sum += Number(($(this).val() * ($(this).attr('calculator-value'))));
            }   
        });

        $.each($("select[calculator-element='select'"), function () {
            sum += Number(($(this).val()));
        });

        ($('[calculator-element=price]')).text(sum);
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