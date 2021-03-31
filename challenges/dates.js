function whatIsTheDay(date){

	let theDate = new Date(date);

	switch(theDate.getUTCDay()) {
	    case 0:
	        return "Sunday";
	        break;

	    case 1:
	        return "Monday";
	        break;

	   	case 2:
	        return "Tuesday";
	        break;

	    case 3:
	    	return "Wednesday";
	    	break;

	    case 4:
	    	return "Thursday";
	   		break;

	   	case 5:
	    	return "Friday";
	   		break;

	   	case 6:
	    	return "Saturday";
	   		break;

	    default:
	        console.log('default');
		}
}

console.log(whatIsTheDay("01/09/2000"));
