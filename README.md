# Image-Processing

### Ajeitar Interface

- Sessão de transformações

- Sessão de Esteganografia

- Sessão de Convoluções

- Sessão de Sistemas de cores

- Input de matriz (Filtro genérico, Deve ser possível o usuário escolher o tamanho do filtro. Só são necessários filtros quadrados de dimensões ímpares: 3x3, 5x5, 7x7, 9x9, etc. O tamanho máximo deve ser, pelo menos, 9x9 (pode ser maior). A imagem processada deve ter o mesmo tamanho da imagem original.)

### Ajustes


### Implementações por fazer

- Aplicação de filtro genérico por convolução;

- High-Boost

- Filtros de Sobel – x e y separados (o resultado da aplicação de cada filtro deve ser normalizado, isto é, as imagens esperadas devem ficar em tons “acinzentados”);

- Detecção não linear de bordas pelo gradiente(magnitude)

- Cálculo da Transformada Discreta de Fourier (opcional: implementar a própria Transformada Rápida de Fourier),

- exibição do espectro (deslocado) com possibilidade de edição por parte do usuário (ferramenta de desenho que permita riscar com pontos pretos e brancos a imagem do espectro ou pontos em escala de cinza - “pincel suave”)

- Cálculo da transformada inversa (dadas as modificações editadas pelo usuário no espectro), obtendo a imagem filtrada. Atenção: você deve implementar a sua própria transformada discreta de fourier (opcionalmente implementar a transformada rápida, ganhando pontos extras). Caso você implemente apenas a transformada discreta da maneira “ingênua”, deve disponibilizar também a possibilidade de cálculo da transformada rápida usando a função implementada em alguma biblioteca para a linguagem escolhida, de tal forma que fique viável trabalhar com o processamento no domínio da frequência de imagens grandes em seu programa.

- criar ferramenta para transformação entre sistemas de cores: RGB<->HSV;

- Mostrar mensagem do decrypt da esteganografia

- Chroma-Key (deve ser possível escolher a ‘distância’ da cor verde e a imagem que substituirá);

- Histograma (R, G, B e I)

- Equalização de Histograma em imagens coloridas (HSI);

- Ajuste de Matiz, Saturação e Brilho; Ajuste de Canal (C/R, M/G, Y/B);

- Implementar escala e rotação com interpolação pelo vizinho mais próximo e linear.
