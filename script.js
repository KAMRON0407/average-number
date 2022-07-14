var x = +prompt('первое число');
var y = +prompt('Второе число');
var z = +prompt('Третье число');

if(x < y && x > z){
   alert('Ваше среднее число ' + x);
} else if(x < z && x > y){
   alert('Ваше среднее число ' + x);
} else if(y < x && y > z){
   alert('Ваше среднее число ' + y);
} else if(y < z && y > x){
   alert('Ваше среднее число ' + y);
} else if(z < x && z > y){
   alert('Ваше среднее число ' + z);
} else if(z < y && z > x){
   alert('Ваше среднее число ' + z);
}  
