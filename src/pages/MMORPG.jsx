import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardImg, CardTitle } from "./style"

export const MMORPG = () => {

  const [jogos, setJogos] = useState()
  
  async function buscar_jogos(){
    const{data} = await axios.get("http://localhost:3000/mmorpg")
   setJogos(data)
  }
   
  useEffect(()=>{
    buscar_jogos()
  },[])

  return (
    <>
    <h1>MMORPG</h1>
    
    {jogos && jogos.map((jogo)=>(
      <Card>
        <CardTitle>{jogo.titulo}</CardTitle>
        <CardImg src={jogo.foto}/>
      </Card>
    ))}
    </>
  )
}
