let nums = [1, 2, 2, 3, 4, 5, 5, 6];
let x = 0
for(let i = 0; i < nums.length; i++){
    if(nums[i] > nums[x]){
        x = x + 1;
        nums[x] = nums[i]
    }
}

let final = [];

for(let j = 0; j <= x; j++){
 final.push(nums[j])
}

console.log(final);
console.log(x+1)