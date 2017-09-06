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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZnVuY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDctMjcuXHJcbiAqL1xyXG5cclxuLy/rsJjsnZHtmJUg7Iqk66eI7Yq47Y+w7JeQ7IScIO2WhOuyhOqxsCDrsoTtirwg7YG066at7ZWY66m0IOuplOuJtOuCmOyYpOqyjH5+XHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmduYi10b2dnbGUnKS5kYXRhKHsnb3BlbicgOiBmYWxzZX0pLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgIGlmKCQodGhpcykuZGF0YSgpLm9wZW4pe1xyXG4gICAgICAkKCcuZ25iJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICQodGhpcykuZGF0YSh7b3BlbiA6IGZhbHNlfSk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuIDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTsiXX0=
