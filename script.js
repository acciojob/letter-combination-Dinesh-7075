function letterCombinations(input) {
  //Complete the function
	map={
    "2":"abc",
    "3":"def",
    "4":"ghi",
    "5":"jkl",
    "6":"mno",
    '7':"pqrs",
    "8":"tuv",
    "9":"wxyz"
}


	solution =[];
    if(input.length==0) return solution;
    function backTrack(indx ,a){
        if(indx>=input.length){
            solution.push(a);
            return;
        }
        for(let i=0;i<map[input[indx]].length;i++){
            backTrack(indx+1,a+map[input[indx]][i]);
        }
    }
    backTrack(0,"");
    return solution;
}

module.exports = letterCombinations;
