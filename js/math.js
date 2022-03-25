function CreateRan (a,b) {
	var num = Math.floor(Math.random()*(b-a)+a);
	return num;
}

function CreateEqua (){
	var num = CreateRan(0,4);
	var equation;
	if (num == 0) {
		equation = '+';
	}else if(num == 1){
		equation = '-';
	}else if(num == 2){
		equation = '×';
	}else if(num == 3){
		equation = '÷';
	}
	return equation;
}

function CreateQuestion (){
	var ques;
	var result;
	var num1 = CreateRan(1,101);
	var num2 = CreateRan(1,101);
	var equation = CreateEqua();
	question = num1 + equation + num2 + '=';
	if (equation == '+') {
		result = num1+num2;
	} else if(equation == '-'){
		result = num1-num2;
	}else if(equation == '×'){
		result = num1*num2;
	}else if(equation == '÷'){
		result = num1/num2;
		result = result.toFixed(2);
	}
	// result = result.toFixed(2);
	// console.log(ques+'---');
	return {question,result};
}

// module.exports = {
//   CreateQuestion,
//   CreateRan,
//   CreateEqua
// }


function CreateResult (){
	
}