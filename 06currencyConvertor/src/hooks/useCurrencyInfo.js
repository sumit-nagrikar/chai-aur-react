import {useEffect, useState} from "react"

//custome hook
function useCurrencyInfo(currency){
    //usestate variable
    const [data, setData] = useState({})

    //useeffect take one callback and a dependency array
    //we are doing this for if by any chance the currency change code inside useeffect will get executed and recreated again
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    //it is returning data
    return data
}
//now we are exoporting this custom hook so that we could use it wherever we want get the data
//we just need to pass particualr currency and we got the data we want
export default useCurrencyInfo;
