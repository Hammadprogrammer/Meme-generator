import React from 'react'
import Show from './Show'
export default async function Details(props) {
    // console.log("params", props.params.id)
    const res = await fetch("https://api.imgflip.com/get_memes")
    const result = await res.json()
    // result.data.memes<<<---- q k memes ki array hai
    let singleProduct = result.data.memes.filter((data) => data.id == props.params.id)
    // filter return an array
    singleProduct = singleProduct[0]

    // console.log("env log--->", process.env.REACT_APP_SECRET_UNAME)
    // console.log("env log--->", process.env.REACT_APP_SECRET_UPASS)

    return (
        <>
            <Show singleProduct={singleProduct} />
        </>

    )
}
