//Basic Functions
//Exemple 1: Find the Smallest and Biggest Numbers
function minMax(arr) {
	return [Math.min(...arr),Math.max(...arr)];
}
//Exemple 2: Equal number
function isSameNum(num1, num2) {
	if(num1 === num2)
		{return true;}
	return false;
}


//Arrays
//Exemple 1: Filter string from numbers
function filterArray(arr) {
	 var result = arr.filter(element => Number.isInteger(element));
	 return (result);
}
//Exemple 2: Absolute SUM
function getAbsSum(arr) {
	var AbsSum=0;
	for(i in arr)
		{AbsSum+=Math.abs(arr[i]);
		}
	return AbsSum;
}
//Exemple 3: Number of True
function countTrue(arr) {
	var NbTrue=0;
	for (i in arr)
		{if (arr[i]==true)
			{
				NbTrue++;
			}
		}
	return NbTrue;
}


//Objects
//Exemple 1: Printer Level
function inkLevels(inks) {
	var arr=Object.values(inks);
	return(Math.min(...arr));
}
//Exemple 2: Keys values into array
function objectToArray(obj) {
	return Object.entries(obj);
}
//Exemple 3: People budgets
function getBudgets(arr) {
var sumBudget=0;
arr.forEach(people => sumBudget+=people.budget);
	return sumBudget;
}
//Exemple 4: Ageing the population
function afterNYears(names, n) {
	nABS=Math.abs(n);
	for(i in names)
		{
			names[i]+=nABS;
		}
	return names;
}
//Exemple 5: Greeting
const GUEST_LIST = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
}

function greeting(name) {
	 if (GUEST_LIST.hasOwnProperty(name)) {
  return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
  }
  else {
      return ("Hi! I'm a guest.");
  }
	 
}


