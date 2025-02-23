export default async function Docs({params,}:{params: Promise<{slug:string[]}>}){
    const {slug}=await params
    if (slug?.length === 2){
        return <h1>view doc feature{slug[0]} and concept{slug[1]}.</h1>
    }else if(slug?.length === 3){
        return <h1>view doc feature{slug[0]} ,concept{slug[1]} and exmaple{slug[2]}. </h1>
    }else if(slug?.length === 1){
        return <h1>view doc feature{slug[0]}.</h1>
    }
    return <h1>doc</h1>
}
