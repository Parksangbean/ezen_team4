let map =[0,0,0,0,0,0,0,0,0]
let winIdxList = [
	1,2,3,4,5,6,7,8,9,7,5,3,1,5,9
]

function WinChecker()
{
	let count = 0
	for(let idx=0;idx<9;idx++)
	{	
		if(map[idx] != -1)
		{
			count ++
		}
	}
	if (count == 9)
	{
		return 3 //무승부
	}
	for(let i=0;i<24;i+=3)
	{
		let sum = 0
		for(let j=i;j<i+3;j++)
		{
			sum += map[     winIdxList[j]        ]
		}
		if(sum == 3)
		{
			return 1    //사용자 승
		}
		else if(sum == -3)
		{
			return -1    //컴퓨터 승
		}
	}
}