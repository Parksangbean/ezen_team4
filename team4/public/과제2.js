let map = [0,0,0,0,0,0,0,0,0]


function userClick(num){
	if( map[num] != 0 ){
		return ;
	}
	map[num] = 1
	console.log( map )
}
