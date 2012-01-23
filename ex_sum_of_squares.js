/* A function that takes 3 numbers as arguments and returns the sum of the
2 larger numbers
*/

sum_squares_module = require('./sum_of_squares')

function sum_of_two_largest(x, y, z)
{
  if (x >= y && y >= z)
  	return sum_squares_module.sum_of_squares(x, y);
  else if (x >= y && z >= y)
  	return sum_squares_module.sum_of_squares(x, z);
  else
  	return sum_squares_module.sum_of_squares(y, z);
}

console.log(sum_of_two_largest(2, 3, 4));

