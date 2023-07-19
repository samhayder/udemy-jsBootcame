let sentence = `The 420 quick brown 365 fox jumps over the 974 lazy dog ! @ # $ % ^ & * () _ + [] {}`;

// Example 1 => Matching a word in a sentence (case-sensitive) (the test method)
// let regX1 = /fox/;
let regX1 = /Fox/;
let result1 = regX1.test(sentence);
// console.log(result1);

// Example 2 => Matching Multiple words (OR|) (case-sensitive) (the test method)
// let regX2 = /for | over | dog/;
let regX2 = /Dog | Lazy/;
let result2 = regX2.test(sentence);
// console.log(result2);

// Example 3 => Ignoring the case-sensitiveness (using the i flag) (the test method)
let regX3 = /Dog/i;
let result3 = regX3.test(sentence);
// console.log(result3);

// Example 4 => Getting the matched word (the match method)
// let regX4 = /the/;
let regX4 = /the/i;
let result4 = sentence.match(regX4);
// console.log(result4);

// Example 5 => Getting the matched words (using the g flag) (the match method)
let regX5 = /the/gi;
let result5 = sentence.match(regX5);
// console.log(result5);

// Example 6 => Getting the matched words with the dot (the match method)
let regX6 = /.o./gi;
let result6 = sentence.match(regX6);
// console.log(result6);

// Example 7 => Getting the matched characters with [] (the match method)
let regX7 = /[dog]/g;
let result7 = sentence.match(regX7);
// console.log(result7);

// Example 8 => Getting the matched characters of alphabet with [] (the match method)
let regX8 = /[a-f]/gi;
let result8 = sentence.match(regX8);
// console.log(result8);

// Example 9 => Getting the matched numbers & characters of alphabet with [] (the match method)
let regX9 = /[1-5a-d]/gi;
let result9 = sentence.match(regX9);
// console.log(result9);

// Example 10 => Getting NOT the matched numbers & characters with [] (the match method) -> Negated Character Sets
let regX10 = /[^1-5a-d]gi/;
let result10 = sentence.match(regX10);
// console.log(result10);

// Example 11 => Getting the matched numbers & characters that occur one or more times
let sentence2 = "Gooooooooooogle";

let regX11 = /go*/i;
let result11 = sentence2.match(regX11);
// console.log(result11);

// Example 12 => Getting the matched characters that occur zero or more times
let regX12 = /o+/;
let result12 = sentence.match(regX12);
// console.log(result12);

// Example 13 => Getting the matched characters with lazy matching ?
let regX13 = /T.*?/;
let result13 = sentence.match(regX13);
// console.log(result13);

// Example 14 => Matching the beginning string patterns
let regX14 = /^The/;
let result14 = sentence.match(regX14);
// console.log(result14);

// Example 15 => Matching the ending string patterns
let regX15 = /dog$/;
let result15 = sentence.match(regX15);
// console.log(result15);

// Example 16 =>  Matching all letters & numbers & _
let regX16 = /\w/g;
let result16 = sentence.match(regX16);
// console.log(result16);

// Example 17 => Matching all non-letters & non-numbers  & not _
let regX17 = /\W/g;
let testResult17 = regX17.test(sentence);
let matchResult17 = sentence.match(regX17);
// console.log(testResult17, matchResult17);

// Example 18 => Matching all numbers
let regX18 = /\d/g;
let testResultX18 = regX18.test(sentence);
let matchResultX18 = sentence.match(regX18);
// console.log(testResultX18, matchResultX18);

// Example 19 => Matching all non-numbers
let regX19 = /\D/g;
let testResultX19 = regX19.test(sentence);
let matchResultX19 = sentence.match(regX19);
// console.log(testResultX19, matchResultX19);

// Example 20 => Matching all the whitespace (space, enter, tab etc)
let regX20 = /\s/g;
let testResultX20 = regX20.test(sentence);
let matchResultX20 = sentence.match(regX20);
// console.log(testResultX20, matchResultX20);

// Example 21 => Matching all the non-whitespace (space, enter, tab etc)
let regX21 = /\S/g;
let testResultX21 = regX21.test(sentence);
let matchResultX21 = sentence.match(regX21);
// console.log(testResultX21, matchResultX21);

// Example 22 => Specifying upper & lower number of matches using the quantity specifiers
let regX22 = /o{17,25}/g;
// let regX22 = /o{3,5}/g;
let testResultX22 = regX22.test(sentence2);
let matchResultX22 = sentence2.match(regX22);
// console.log(testResultX22, matchResultX22);

// Example 23 => Specifying only the lower number of matches using the quantity specifiers
let regX23 = /o{3,}/g;
let testResultX23 = regX23.test(sentence2);
let matchResultX23 = sentence2.match(regX23);
// console.log(testResultX23, matchResultX23);

// Example 24 => Specifying the exact number of matches using the quantity specifiers
let regX24 = /o{3}/g;
// let regX24 = /o{5}/g;
let testResultX24 = regX24.test(sentence2);
let matchResultX24 = sentence2.match(regX24);
// console.log(testResultX24, matchResultX24);

// Example 25 => Check for all or none
let sentence3 = "colour";
let regX25 = /colou?r/;
let testResult25 = regX25.test(sentence3);
let matchResult25 = sentence3.match(regX25);
// console.log(testResult25, matchResult25);

// Example 26 =>

//*-*-*-*- Positive lookahead -> testing for a +ve condition to be true
let sentence4 = "Bangladesh is a big country";
let regX26 = /b(?=s)/i;
let testResult26 = regX26.test(sentence4);
let matchResult26 = sentence4.match(regX26);
// console.log(testResult26, matchResult26);

//*-*-*-*- Negative lookahead -> testing for a -ve condition to be true
let regX27 = /b(?!s)/i;
let testResult27 = regX27.test(sentence4);
let matchResult27 = sentence4.match(regX27);
// console.log(testResult27, matchResult27);
