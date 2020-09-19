// ZeroCool
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print "Zero" instead of the number and for the multiples of five print "Cool".
// For numbers which are multiples of both three and five print "ZeroCool".
// This should be written in Javascript and be able to run in the console.

// O(n) time complexity and O(1) in space complexity
for (let i = 1; i <= 100; i++) {
	if (i % 15 === 0) console.log('ZeroCool');
	else if (i % 3 === 0) console.log('Zero');
	else if (i % 5 === 0) console.log('Cool');
	else console.log(i);
}

//Complete time ~7 min
