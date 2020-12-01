var one_=document.getElementsByClassName('sanjiao_one');
var two_=document.getElementsByClassName('sanjiao_two');
var three_=document.getElementsByClassName('sanjiao_three');
var four_=document.getElementsByClassName('sanjiao_four');
var triangle = document.getElementsByClassName('jiao');
var byhouse_ = document.getElementsByClassName('byhouse');
var shade = document.getElementsByClassName('zhezhao');
Touch.on(one_,'touchstart',function(){
    this.triangle.css({
        'border-top': '.05rem solid rgba(0, 0, 0, 0) ',
        'border-bottom': '.05rem solid #ff8a00',
        'border-left': '.05rem solid rgba(0, 0, 0, 0)',
        'border-right': '.05rem solid rgba(0, 0, 0, 0)'
    });
    byhouse_
})