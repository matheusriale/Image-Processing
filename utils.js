function getMedian(v) {
  var median = 0;
  var v = [1, 9, 3, 4, 5, 6, 7, 8, 12];
  v = v.sort(function (a, b) {
    return a - b;
  }); //sort array to get median
  if (v.length % 2 == 0) {
    median = (v[v.length / 2] + v[v.length / 2 - 1]) / 2;
  } else {
    median = v[(v.length - 1) / 2];
  }
  return median;
}

function rotate_filter(filter) {
  //recebe filtro e rotaciona 180 graus
  let matrix = [
    [1, 0, 1],
    [0, 1, 0],
    [0, 0, 0],
  ];
  let rotated_filter = [...matrix];
  for (let i = 0; i < matrix.length; i++) {
    rotated_filter[i] = matrix[matrix.length - i - 1];
  }
  return rotated_filter;
}

function arrayToMatrix(array) {
  let matrix = [];
  const width = canvas.width
  const height = canvas.height
  for(let i = 0; i < height;i++){
    let line = []
    for(let j = 0; j < width;j++){
        const color = [array[(j*4)+(i*(width))],array[1+(j*4)+(i*width)],array[2+(j*4)+(i*width)],array[3+(j*4)+(i*(width))]]
        line.push(color)
    }
    matrix.push(line)
  }
  return matrix;
}
function matrixToArray(matrix) {
    const px_array = [] 

    for(let i = 0; i < matrix.length;i++){
        for(let j = 0; j < matrix[i].length;j++){
          
            px_array.push(matrix[i][j][0])
            px_array.push(matrix[i][j][1])
            px_array.push(matrix[i][j][2])
            px_array.push(matrix[i][j][3])

        }
    }
    console.log(px_array)
    return px_array
}


/* Exemplo para trabalhar com matrizes ao inves de array 

  let matrix = arrayToMatrix(data)
  let a = 250;
  let b = 250;
  let raio = 50;
  let max = -1
  for (let i = 0; i < matrix.length;i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      f_circ = (i-a)*(i-a) + (j-b)*(j-b)
      if (f_circ <= raio*raio){
        max = Math.max(max,Math.abs(f_circ - raio))
      }
  }
}

for (let i = 0; i < matrix.length;i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    f_circ = (i-a)*(i-a) + (j-b)*(j-b)
    if (f_circ <= raio*raio){
      matrix[i][j][0] = 0 + 128*Math.abs(f_circ-raio)/(max);
      matrix[i][j][1] = 0 +  128*Math.abs(f_circ-raio)/(max);
      matrix[i][j][2] = 0 +  128*Math.abs(f_circ-raio)/(max);
      matrix[i][j][3] = 0 + 128*Math.abs(f_circ-raio)/(max);
    }
}
}

  const arr = matrixToArray(matrix)
  for (let i = 0; i < arr.length; i = i + 4) {
    data[i] = arr[i];
    data[i + 1] = arr[i+1];
    data[i + 2] = arr[i+2];
  }
  context.putImageData(pixels, 0, 0, 0, 0, canvas.width, canvas.height);
  getFrequencies();
  drawHistogram();

*/


