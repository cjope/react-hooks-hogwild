import { Profiler } from "react"

function PigTile({pig}){
    
    return (
        <>
        <div className="pigTile" >
            <h2	title={pig.name} key={pig.name}>{pig.name} 
                <img key={pig.image} src = {pig.image} alt={pig.id} style={{width:"200px"}}></img>
            </h2>
        </div>
        </>
    )
}

export default PigTile