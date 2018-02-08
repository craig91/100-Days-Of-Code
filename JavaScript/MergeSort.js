// function mergeSort(arr) {  // takes in an array
//     if (arr.length < 2) { // if the length of the array is less than 2
//       return; // return that array
//     }
//     var step = 1; // controls the size of the leftArr and rightArr arrays
//     var left, right; // 
//     while (step < arr.length) {
//       left = 0;
//       right = step;
      
      
//       while (right + step <= arr.length) {
//         mergeArrays(arr, left, left + step, right, right + step);
//         left = right + step;
//         right = left + step;
        
        
//       }
//       if (right < arr.length) {
//         mergeArrays(arr, left, left + step, right, arr.length);
//       }
//       step *= 2;
//     }
//   }
  
  
  
  
  
//   function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
//     var rightArr = new Array(stopRight - startRight + 1);
//     var leftArr = new Array(stopLeft - startLeft + 1);
//     k = startRight;
//     for (var i = 0; i < rightArr.length - 1; ++i) {
//       rightArr[i] = arr[k];
//       ++k;
//     }
//     k = startLeft;
//     for (var i = 0; i < leftArr.length - 1; ++i) {
//       leftArr[i] = arr[k];
//       ++k;
//     }
//     rightArr[rightArr.length - 1] = Infinity; // a sentinel value
//     leftArr[leftArr.length - 1] = Infinity; // a sentinel value
//     var m = 0;
//     var n = 0;
//     for (var k = startLeft; k < stopRight; ++k) {
//       if (leftArr[m] <= rightArr[n]) {
//         arr[k] = leftArr[m];
//         m++;
//       } else {
//         arr[k] = rightArr[n];
//         n++;
//       }
//     }
//     console.log('left array - ', leftArr);
//     console.log('right array - ', rightArr);
//   }
  
//   var nums = [6,10,1,9,4,8,2,7,3,5];
//   console.log(nums);
//   console.log();
//   mergeSort(nums);
//   console.log();
//   console.log(nums);

// var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

// function mergeSort(arr) {
//     if( arr.length < 2) 
//         return arr;

//     var middle = parseInt(arr.length / 2);
//     var left = arr.slice(0, middle);
//     var right = arr.slice(middle, arr.length);

//     return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//     var result = [];

//     while (left.length && right.length) {
//         if(left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }

//     while (left.length)
//         result.push(left.shift());

//     while (right.length)
//         result.push(right.shift());

//     return result;
// }

// console.log(mergeSort(a));  

var items = [34, 203, 3, 746, 200, 984, 198, 764, 9]

function merge( left, right ) {
    var result = [];
    il = 0;
    ir = 0;

        while( il < left.length && ir < right.length ) {
            if( left[il] < right[ir] ) {
                result.push( left[il++] );
            } else {
                result.push( right[ir++] );
            }
        }
        return result.concat( left.slice(il) ).concat (right.slice(ir) );
}

function mergeSort( items ) {
    if( items.length < 2 ) {
        return items;
    }

    var middle = Math.floor( items.length/2 ),
    left = items.slice( 0, middle ),
    right = items.slice( middle );

    return merge( mergeSort( left ), mergeSort( right ) );
}

console.log( mergeSort( items ) );
  