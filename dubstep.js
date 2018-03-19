/* dubstep.js
   Insert a certain number of words "WUB" before the first word (the number may be zero),
   after the last word (the number may be zero),
   and between words (at least one between any pair of neighbouring words),
   and then glue together all the words, including "WUB", in one string.

   For example, words "I AM X" can transform into "WUBWUBIWUBAMWUBWUBX"
   and cannot transform into "WUBWUBIAMWUBX".

   Input
   The input consists of a single non-empty string,
   consisting only of uppercase English letters,
   the string's length doesn't exceed 200 characters.

   Output
   Return initial words. Separate the words with a space.

   Example
   songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
   // => WE ARE THE CHAMPIONS MY FRIEND
 */

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

/*
describe("Solution", function(){
	it("should test for something", function(){
		Test.assertEquals("actual", "expected", "This is just an example");
	});
});
*/
/*
Test.assertEquals(songDecoder("AWUBBWUBC"), "A B C","WUB should be replaced by 1 space");
Test.assertEquals(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C","multiples WUB should be replaced by only 1 space");
Test.assertEquals(songDecoder("WUBAWUBBWUBCWUB"), "A B C","heading or trailing spaces should be removed");
*/
var testSongDecoder = function(generator, solution, tests){
	tests = tests || 100;
	var i = 0, result, values;
	while( tests --> 0){
		values = generator();
		result = solution.apply(this, values);
		if(i++ < 3){
			Test.assertEquals(user, result, "didn't work on the following argument array: " + values);
		} else if(reference !== user){
			Test.assertEquals(user, result, "didn't work on the following argument array: " + values);
		}
	}
};
