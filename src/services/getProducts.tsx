"use client"
import { useEffect, useState } from "react"
import { instance } from "../hooks/instance"

export const getProduct = (api:string) => {
    const [state,setState] = useState([])
    useEffect(() => {
        instance().get(api).then(res => {
            setState(res.data)
        })
    },[])
    return state
}
