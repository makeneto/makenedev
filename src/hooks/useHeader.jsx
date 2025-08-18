import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export default function useHeader() {
    const startDate = moment('2021-07-25')
    const now = moment()
    const currentCareerYears = now.diff(startDate, 'years')
    const isMobile = useMediaQuery({ maxWidth: 884 })
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    }, [])

    return {
        currentCareerYears,
        isMobile,
        animate
    }
}
