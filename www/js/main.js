function getPayrollDate(){
	var date = new Date();
	var day = date.getDate();
	var dayOfWeek = date.getDay();
	var payroll;
	if(((day == 15 || day == 30) && (dayOfWeek > 0 && dayOfWeek < 6)) || ((day == 14 || day == 29 || day == 13 || day == 28)&& dayOfWeek == 5)){
		var payroll = "You need to submit your payroll hours!!!";
	}else{
		var payroll = "You're all good!!!";
	}
	document.getElementById("payroll-date").innerHTML = payroll;
}