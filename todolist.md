
### Ajustes
- 3 histogramas, um para cada canal (r,g e b)

- Equalizar para cada canal separadamente(Do jeito que está implementado está errado): equilibrar intensidades de vermelho entre si, equilibrar intensidades de verde entre si e equilibrar intensidades de azul entre si. 

- Exemplo do GIMP: https://docs.gimp.org/en/gimp-layer-equalize.html

### Implementações por fazer

- Aplicação de filtro genérico por convolução; 
- Filtro de suavização da média (simples e ponderado); 
- Filtragem pela mediana.

Deve ser possível o usuário escolher o tamanho do filtro. Só são necessários filtros quadrados de dimensões ímpares: 3x3, 5x5, 7x7, 9x9, etc. O tamanho máximo deve ser, pelo menos, 9x9 (pode ser maior). A imagem processada deve ter o mesmo tamanho da imagem original.

- Aguçamento (nitidez) por Laplaciano e High-Boost

- Filtros de Sobel – x e y separados (o resultado da aplicação de cada filtro deve ser normalizado, isto é, as imagens esperadas devem ficar em tons “acinzentados”); Detecção não linear de bordas pelo gradiente (magnitude)