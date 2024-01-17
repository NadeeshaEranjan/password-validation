$(document).ready(function () {
	console.log('aaaa')
})

/**
 * password validation
 */
function passwordValidation(ele)
{
    ele.closest('form').find('.psw-validation-container ul').addClass('active')

    var rules = [
        {Pattern: "[A-Z]",Target: "upper"},
        {Pattern: "[a-z]",Target: "lower"},
        {Pattern: "[0-9]",Target: "number"},
        {Pattern: "[!@@#$%^&*]",Target: "special"}
    ];

    var password = ele.val();

    if ((password.length >= 12) && (password.length <= 20)) {
        $(".psw-validation-container ul li.length").removeClass('error').addClass('ok')
    } else {
        $(".psw-validation-container ul li.length").removeClass('ok').addClass('error')
    }

    for (var i = 0; i < rules.length; i++) {
        $(".psw-validation-container ul li." + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "error" : "ok");
        $(".psw-validation-container ul li." + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "ok" : "error");
    }

    // console.log("all checks : " + $(".psw-validation-container ul li.ok").length)

    if ($(".psw-validation-container ul li.ok").length == 5) {
        $('.btn-submit').removeAttr('disabled')
    } else {
        $('.btn-submit').prop("disabled",true);
    }
}