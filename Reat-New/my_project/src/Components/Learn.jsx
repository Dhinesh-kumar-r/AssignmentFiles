import { useState } from "react"
export const Learn=()=>{

    const [content,setContent]=useState(1);

    const Data=[
        {step:'Step 1',example:'Welcome To React'},
        {step:'Step 2',example:'Explore the React World'},
        {step:'Step 3',example:'Hello World'},
       
    
       
    ];
    
    const Next=()=>{
        setContent(Previous=>Math.min(Previous+1 ,Data.length));
    };                                

    const Previous =()=>{
        setContent(Previous=>Math.max ( Previous -1,1))};

    

    return(
        <>
        <div className="main">
        <div className="all">
            <div className="numbers">
                {Data.map((_,index)=>(
                    <span key={index} className={content===index+1 ? 'active' : ''}>
    {index+1}</span>))}
                
            </div>

            <div className="contents">
                <h3>{Data[content-1].step}</h3>
                <h3>{Data[content-1].example}</h3>
                <h4>Learn how</h4>
            </div>

            <div className="footer">
                <button className="btn" onClick={Previous} disabled={content==1} >Previous</button>
                <button className="btn3" onClick={Next} disabled={content===Data.length}>Next</button>
            </div>

        </div>
        </div>
        </>
    )}
