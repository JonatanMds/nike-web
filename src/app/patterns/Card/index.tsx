import Image from "next/image";


interface CardInfoProps{
  photoShoes: any,
  nameShoes: string,
  valueShoes: string
}

export default function Card({photoShoes, nameShoes, valueShoes}:CardInfoProps){
  return(
    <>
      <div className="flex flex-col items-center">
        <Image 
          src={photoShoes}
          alt=""
          width={180}
        />
      </div>
      <div>
        <p>{nameShoes}</p>
        <p className="text-zinc-300">{valueShoes}</p>
      </div>
    </>
  )
}