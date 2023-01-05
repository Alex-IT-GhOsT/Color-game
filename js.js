'use strict'

let field = document.querySelector('#field')
let win = document.querySelector('#win')
let rows = 3;
let cols = 3;
let colors = ['red','green','blue']
let count = document.querySelector('#count')

//создание таблицы
let click = 0;
for(let i=0; i<cols; i++){
    count.textContent = 'Кол-во сделанных ходов: '
    let tr = document.createElement('tr');
    for(let j=0; j<rows; j++){
        let td = document.createElement('td');
        td.classList.add(getColor(colors));
        
        td.addEventListener('click',function changeColor(ev){
            click++
            // добавление цвета
            let color = ev.target.classList.value;
            this.classList.remove(color)
            for(let i=0; i<colors.length; i++){
                if(colors[i] == color && i!=colors.length-1){
                    color = colors[i+1]                    
                    this.classList.add(color)
                    break
                }else if(i == colors.length-1){
                    i=0
                    color = colors[i]                    
                    this.classList.add(color)
                    break
                }   
            }
    
            // проверка победы

            let tds = document.querySelectorAll("td");
            let res = [];
            tds.forEach(function(elem){
                res.push(elem.className)
            })
            
            let check = res.every(function(elem){
                if(elem == color){
                    return true;
                }
            })

            if(check == true){
                win.textContent = 'Победа'
            }else{
                win.textContent = 'Продолжаем играть' 
            }
            count.textContent ='Кол-во сделанных ходов : ' +  click
              
        })
        tr.appendChild(td)
    }
    field.appendChild(tr) 
}

function random(min,max){
    return Math.floor(Math.random() * (max - min +1)) + min
}

function getColor(arr){
    for(let i=0; i<arr.length; i++){
       return arr[random(i,arr.length-1)]
    }
}

function checkWin(arr){
    for(let elem of arr){
        console.log(elem.classList)
    }
}

