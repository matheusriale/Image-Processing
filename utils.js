function getMedian(v){
    var median = 0;
    var v = [1,9,3,4,5,6,7,8,12]
    v = v.sort(function(a, b){return (a - b);}) //sort array to get median
    if (v.length%2==0) {median = (v[(v.length/2)]+ v[(v.length/2)-1])/2;}
    else{median = v[(v.length-1)/2];}
    return median;
}   

function rotate_filter(filter){
    //recebe filtro e rotaciona 180 graus
    let matrix = [[1,0,1],[0,1,0],[0,0,0]]
    let rotated_filter = [...matrix];
    for (let i = 0; i<matrix.length;i++){
        rotated_filter[i] = matrix[matrix.length-i-1];
    }
    return rotated_filter;
}
