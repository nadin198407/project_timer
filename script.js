
const btn = document.querySelector('.btn');

let timerId,
    i = 0;

    function myAnimation(){
        const elem = document.querySelector('.box');//элемент 
        let pos = 0;//стартовая позиция

        const id = setInterval(frame, 10);//запускается движение через  10 мс
        
        //функция движения
        function frame(){
            if (pos == 300){// если позиция достигает 300. конец, то очистить интервал, убрать повторение
                clearInterval(id);
            }else{//если еще не конец, то позиция увел на 1, а кооорд верх и лево смещаются на позицию пос
                pos++;
                elem.style.top = pos + "px";
                elem.style.left = pos + "px";
            }
        }
    }
 btn.addEventListener('click', myAnimation);//по клику на кнопку запускается анимация


// function logger(){
//     if (i === 3){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500)
// }, 500);