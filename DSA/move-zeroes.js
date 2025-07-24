let nums = [1, 2, 12, 0, 1 , 3];
let p1 = 0;

for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
        nums[p1] = nums[i];
        p1++;
    }
}

for(let i = p1; i < nums.length; i++){
    console.log(i)
    nums[i] = 0
}

console.log(nums)