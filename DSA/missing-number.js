   let nums = [4, 2,0,1, 5]
   let len = nums.length;

    let totalSum = len * ( len + 1 ) / 2;
    console.log(totalSum)

    let add = 0;
    for(let i = 0; i< nums.length; i++){
        add = add + nums[i]
    }

    console.log(totalSum - add)