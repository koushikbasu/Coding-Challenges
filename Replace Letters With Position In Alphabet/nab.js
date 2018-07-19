//Create a function that takes a string and replaces each letter with its appropriate position in the alphabet.


function alphabetIndex(str) {
	let alphabet=["abcdefghijklmnopqrstuvwxyz"].toString().split("");
	let result=[];
	let arry=str.split(' ');
	arry=arry.toString().toLowerCase().split('');
  for(let i=0;i<arry.length;i++){
		if(alphabet.indexOf(arry[i])!==-1){
			 result.push(alphabet.indexOf(arry[i]) + 1);
	  }
	}
	return result.join(' ');
}

Test.assertEquals(alphabetIndex("Wednesday is hump day, but has anyone asked the camel if he’s happy about it?"), "23 5 4 14 5 19 4 1 25 9 19 8 21 13 16 4 1 25 2 21 20 8 1 19 1 14 25 15 14 5 1 19 11 5 4 20 8 5 3 1 13 5 12 9 6 8 5 19 8 1 16 16 25 1 2 15 21 20 9 20")
Test.assertEquals(alphabetIndex("Check back tomorrow; I will see if the book has arrived."), "3 8 5 3 11 2 1 3 11 20 15 13 15 18 18 15 23 9 23 9 12 12 19 5 5 9 6 20 8 5 2 15 15 11 8 1 19 1 18 18 9 22 5 4")
Test.assertEquals(alphabetIndex("We have a lot of rain in June."), "23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5")
Test.assertEquals(alphabetIndex("Sixty-Four comes asking for bread."), "19 9 24 20 25 6 15 21 18 3 15 13 5 19 1 19 11 9 14 7 6 15 18 2 18 5 1 4")
Test.assertEquals(alphabetIndex("The#b00k$is*in^fr0nt#0f!the_taBle."), "20 8 5 2 11 9 19 9 14 6 18 14 20 6 20 8 5 20 1 2 12 5")
Test.assertEquals(alphabetIndex("Lets all be unique together until we realise we are all the same."), "12 5 20 19 1 12 12 2 5 21 14 9 17 21 5 20 15 7 5 20 8 5 18 21 14 20 9 12 23 5 18 5 1 12 9 19 5 23 5 1 18 5 1 12 12 20 8 5 19 1 13 5")
Test.assertEquals(alphabetIndex("The river stole the gods."), "20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19")
Test.assertEquals(alphabetIndex("Wow, does that work?"), "23 15 23 4 15 5 19 20 8 1 20 23 15 18 11")
Test.assertEquals(alphabetIndex("If Purple People Eaters are real… where do they find purple people to eat?"), "9 6 16 21 18 16 12 5 16 5 15 16 12 5 5 1 20 5 18 19 1 18 5 18 5 1 12 23 8 5 18 5 4 15 20 8 5 25 6 9 14 4 16 21 18 16 12 5 16 5 15 16 12 5 20 15 5 1 20")
Test.assertEquals(alphabetIndex("Abstraction is often one floor above you."), "1 2 19 20 18 1 3 20 9 15 14 9 19 15 6 20 5 14 15 14 5 6 12 15 15 18 1 2 15 22 5 25 15 21")
