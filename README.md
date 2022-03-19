# Projeto para visualização de arquivos 3d
Neste projeto react foram utilizadas bibliotecas de terceiros como @react-three/drei e @reract-three/fiber para visualizar arquivos 
3d.

### Adicionando as dependências do projeto
Depois de clonar o repositório rodar.
`npm install`

### Rodando o projeto
Para rodar o projeto basta rodar o comando `yarn start` ou `npm run start` 

## Bibliotecas utilizadas
Para utilizar as bibliotecas abaixo é necessário instalá-las globalmente na máquina antes de começar a conversão.

- [https://github.com/CesiumGS/obj2gltf](CesiumGS/obj2gltf) Esta biblioteca converte o arquivo 3d (.obj) em arquivo 3d (.gltf)
- [https://github.com/CesiumGS/gltf-pipeline](CesiumGS/gltf-pipeline) Esta biblioteca converte o arquivo .gltf convertido para a versão 2.0 do arquivo.gltf
- [https://github.com/pmndrs/gltfjsx](pmndrs/gltfjsx) Esta biblioteca cria um arquivo .js com as informações do arquivo .gltf para utilizar com a biblioteca @react-three.

### Utilizando os arquivos convertidos

Depois de realizar os processos de conversão o arquivo .gltf deve ser colocado dentro da pasta public do projeto.
O arquivo .js dentro da pasta src, recomenda-se colocar o arquivo dentro de uma pasta components/modelos-3d, ficando mais organizado.

### Ajuste no arquivo .js

Em alguns casos será necessário realizar ajustes neste arquivo a fim de ajustar o zoom, posição na tela e rotação da imagem.
Abaixo o arquivo gerado sem realizar ajustes.
```jsx

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/newitem.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Layer_0.geometry} material={nodes.Layer_0.material} />
        <mesh geometry={nodes.Layer_0_1.geometry} material={nodes.Layer_0_1.material} />
        <mesh geometry={nodes.Layer_0_2.geometry} material={nodes.Layer_0_2.material} />
        <mesh geometry={nodes.Layer_0_3.geometry} material={nodes.Layer_0_3.material} />
        <mesh geometry={nodes.Object001.geometry} material={nodes.Object001.material} />
        <mesh geometry={nodes.Object002.geometry} material={nodes.Object002.material} />
        <mesh geometry={nodes.Object003.geometry} material={nodes.Object003.material} />
    </group>
  )
}

useGLTF.preload('/newitem.gltf')
```
Abaixo arquivo com o ajuste
```jsx

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/newitem.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
    // Nas próximas linhas de group são definidas as configurações para a posição na tela,
    // rotação da imagem e o zoom que o item deve ter no momento da exibição.
      <group position={[0,-2,-0.01]} rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.01} rotation={[Math.PI / 2, 0, 0]}>
          <group scale={1}>
            <mesh geometry={nodes.Layer_0.geometry} material={nodes.Layer_0.material} />
            <mesh geometry={nodes.Layer_0_1.geometry} material={nodes.Layer_0_1.material} />
            <mesh geometry={nodes.Layer_0_2.geometry} material={nodes.Layer_0_2.material} />
            <mesh geometry={nodes.Layer_0_3.geometry} material={nodes.Layer_0_3.material} />
            <mesh geometry={nodes.Object001.geometry} material={nodes.Object001.material} />
            <mesh geometry={nodes.Object002.geometry} material={nodes.Object002.material} />
            <mesh geometry={nodes.Object003.geometry} material={nodes.Object003.material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/newitem.gltf')
```
