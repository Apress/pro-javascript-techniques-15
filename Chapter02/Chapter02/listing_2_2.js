// Create an array of items
// (Similar to 2-1, using [] is shorter than "new Array()")
var items = [ 'one', 'two', 'three' ];

// Create a reference to the array of items
var itemsRef = items;

// Add an item to the original array
items.push( 'four' );

// The length of each array should be the same,
// since they both point to the same array object
console.log( items.length == itemsRef.length );
