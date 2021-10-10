// var output = document.getElementById("output");
// var input = document.getElementsByTagName('textarea')[0];

// input.onkeyup = function () {
// 	var filted = this.value.replace(badwords, function (fullmatch, badword) {
// 		return new Array(badword.length + 1).join('*');
// 	});
// 	output.value = filted;
// 	document.getElementById("outtext").innerHTML = filted;
// };

// input.onkeyup();
// input.focus();

$(function () {
    var className = ".checkbadword";
    var badwordInput = $(className);
    if (badwordInput.length > 0) {
        var url = "/api/badword/badwords";
        $.ajax({
            type: "POST",
            url: url,
            data: {},
            success: function (result) {
                var badwordReg = new RegExp("(?:^|\\s)(" + result + ")", "g");
                $(badwordInput).bind('input', function () {
                    var filted = $(this).val().replace(badwordReg, function (fullmatch, badword) {
                     		return " " + new Array(badword.length + 1).join('*');
                     	});
                    $(this).val(filted);
                });
                //console.log(result);
            }
        });
    }
});