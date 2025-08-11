let nums = [3,2,2,3];
val = 3
let res = [];
function removeElement(nums){
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val)
        {
            res.push(nums[i]);
        }
    }
    console.log(res)

    return res.length;
}

console.log(removeElement(nums));