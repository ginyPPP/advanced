/**
 * Created by Administrator on 2017-07-27.
 */

//반응형 스마트폰에서 햄버거 버튼 클릭하면 메뉴나오게~~
$(function(){

  $('.gnb-toggle').data({'open' : false}).on('click',function(){
    if($(this).data().open){
      $('.gnb').removeClass('on');
      $(this).data({open : false});
    } else{
      $('.gnb').addClass('on');
      $(this).data({open : true});
    }
  });
});