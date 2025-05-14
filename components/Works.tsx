"use clients"

import WorksCard from "./WorksCard"

const Works = ()=>{
    const data = [{
        heading : "Apps",
        images : ["/work_apps01.png","/work_apps02.png","/work_apps03.png",]
    },{
        heading : "Emailer",
        images : ["/work_emailer01.png","/work_emailer02.png","/work_emailer03.png","/work_emailer04.png","/work_emailer05.png","/work_emailer06.png","/work_emailer07.png",]
    },{
        heading : "Website",
        images : ["/work_website01.png","/work_website02.png","/work_website03.png","/work_website04.png","/work_website05.png","/work_website06.png","/work_website07.png","/work_website08.png","/work_website09.png","/work_website10.png"]
    },{
        heading : "Ad banners",
        images : ["/work_adbanners01.png","/work_adbanners02.png","/work_adbanners03.png","/work_adbanners04.png","/work_adbanners05.png","/work_adbanners06.png","/work_adbanners07.png"]
    },{
        heading : "Presentation",
        images : ["/work_presentation01.png","/work_presentation02.png","/work_presentation03.png","/work_presentation04.png","/work_presentation05.png"]
    },{
        heading : "Social Media",
        images : ["/work_socialmedia01.png","/work_socialmedia02.png","/work_socialmedia03.png","/work_socialmedia04.png","/work_socialmedia05.png","/work_socialmedia06.png","/work_socialmedia07.png","/work_socialmedia08.png","/work_socialmedia09.png","/work_socialmedia10.png","/work_socialmedia11.png","/work_socialmedia12.png"]
    },{
        heading : "OOH/Print",
        images : ["/work_oohprint01.png","/work_oohprint02.png","/work_oohprint03.png","/work_oohprint04.png","/work_oohprint05.png","/work_oohprint06.png","//work_oohprint07.png","/work_oohprint08.png","/work_oohprint09.png"]
    }]
    return(
        <div className="w-[100%] h-auto">
            <div className="flex w-[100%] h-auto">
                {
                    data.map((item , index)=>(
                        <WorksCard item={item} key={index}></WorksCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Works