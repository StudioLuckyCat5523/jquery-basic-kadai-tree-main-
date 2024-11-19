$(function(){
   //文字を赤に変更
   $('#change-color').click(function(){
    $('#target').css('color','red');
   });
   //文字列の変更
    $('#change-text').click(function(){
    $('#target').text('猫元気！');
});
    //フェードアウト
    $('#fade-out').click (function(){
        $('#target').fadeOut(3000);
    });
    //フェードイン
    $('#fade-in').click(function(){
        $('#target').fadeIn(3000);
    });
});