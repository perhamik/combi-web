import React from 'react'; 

export default function ContentMain(props){ 
    const newText = props.Data.brandDescription.split(" ").map((obj, index) => {
        if(obj.toLowerCase().includes("combi")) return <b>{obj} </b>;
        else return obj + ' ';    
    });
    return(
        <>            
            <div className="pt-3 pb-3 mb-5">
                <div className="page-title"><h3>О бренде</h3></div>                
                <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 description-text">
                    <p>{newText}</p>
                </div>                
            </div>
        </>
    )
}