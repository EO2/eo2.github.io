// Phonetic Numbers

var char = '';
//var num = document.querySelector('input').value;
var num = 141592653589793238462643383279502884197169399375105820974944592307816406286 // PI.decimals
console.log(num);
if (num > Number.MAX_VALUE) console.log("JS forcing scientific notation - use python here.. or similar.");

var numS = [...num.toString()];

if (numS[1]) {

  for(const i in numS) {

    //console.log("i: "+ i +" Num: "+ number.charAt(i) +" n: "+ number[i]);

	switch (i) {
	  case 1:
	    char = 't';   // 1 = t d
	    break;
	  case 2:
	    char = 'n';   // 2 = n
	    break;
	  case 3:
	    char = 'm';   // 3 = m
	    break;
	  case 4:
	    char = 'r';   // 4 = r
	    break;
	  case 5:
	    char = 'l';   // 5 = l
	    break;
	  case 6:
	    char = 'j';   // 6 = j ch sh
	    break;
	  case 7:
	    char = 'k';   // 7 = k g
	    break;
	  case 8:
	    char = 'f';   // 8 = f v
	    break;
	  case 9:
	    char = 'b';   // 9 = b p
	    break;
	  case 0:
	    char = 's';   // 0 = z s
	    break;
	  default:
	    break;
    }
  }
}
