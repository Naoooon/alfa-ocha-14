window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

$(function () {
    if (localStorage.getItem('memo')) {
        $('#te').val(localStorage.getItem('memo'));
    }
    $('#te').bind('keyup', function () {
        localStorage.setItem('memo', $('#te').val());
    });

});
