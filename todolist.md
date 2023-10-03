### Ajeitar Interface


### Ajustes
- 3 histogramas, um para cada canal (r,g e b)

- Equalizar para cada canal separadamente(Do jeito que está implementado está errado): equilibrar intensidades de vermelho entre si, equilibrar intensidades de verde entre si e equilibrar intensidades de azul entre si. 

- Exemplo do GIMP: https://docs.gimp.org/en/gimp-layer-equalize.html

- Limiarização por canais e geral.

- Verificar Original copy nas convoluções.

### Implementações por fazer

- Aplicação de filtro genérico por convolução;
  
- Filtro de suavização da média (simples e ponderado);
  
- Filtragem pela mediana.
  
Deve ser possível o usuário escolher o tamanho do filtro. Só são necessários filtros quadrados de dimensões ímpares: 3x3, 5x5, 7x7, 9x9, etc. O tamanho máximo deve ser, pelo menos, 9x9 (pode ser maior). A imagem processada deve ter o mesmo tamanho da imagem original.

- Aguçamento (nitidez) por Laplaciano e High-Boost

- Filtros de Sobel – x e y separados (o resultado da aplicação de cada filtro deve ser normalizado, isto é, as imagens esperadas devem ficar em tons “acinzentados”); Detecção não linear de bordas pelo gradiente (magnitude)

- Cálculo da Transformada Discreta de Fourier (opcional: implementar a própria Transformada Rápida de Fourier), exibição do espectro (deslocado) com possibilidade de edição por parte do usuário (ferramenta de desenho que permita riscar com pontos pretos e brancos a imagem do espectro ou pontos em escala de cinza - “pincel suave”) e cálculo da transformada inversa (dadas as modificações editadas pelo usuário no espectro), obtendo a imagem filtrada.

- Atenção: você deve implementar a sua própria transformada discreta de fourier (opcionalmente implementar a transformada rápida, ganhando pontos extras). Caso você implemente apenas a transformada discreta da maneira “ingênua”, deve disponibilizar também a possibilidade de cálculo da transformada rápida usando a função implementada em alguma biblioteca para a linguagem escolhida, de tal forma que fique viável trabalhar com o processamento no domínio da frequência de imagens grandes em seu programa.

- criar ferramenta para transformação entre sistemas de cores: RGB<->HSV; Algoritmos de escala de cinza: média aritmética simples e média ponderada; Negativo.

-Chroma-Key (deve ser possível escolher a ‘distância’ da cor verde e a imagem que substituirá); Histograma (R, G, B e I); Equalização de Histograma em imagens coloridas (HSI); Suavização e Aguçamento em imagens coloridas; Ajuste de Matiz, Saturação e Brilho; Ajuste de Canal (C/R, M/G, Y/B); Sépia (“escala de cinza amarelada”).
