// Goi su kien khi giao dien load xong
$(document).ready(function(){
    // Tao su kien click
    $('#eye').click(function(){
        // Ng dung bam vao eye
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            // alert('Type text');
            $(this).prev().attr('type', 'text');
        }
        else {
            $(this).prev().attr('type', 'password');
        }

    });
});

