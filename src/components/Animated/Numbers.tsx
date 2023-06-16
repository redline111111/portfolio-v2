"use client"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import {  FC,useEffect, useRef } from "react"

export const AnimNumbers:FC<{value: number}> = ({value}) => {
    const ref= useRef<HTMLInputElement>(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}