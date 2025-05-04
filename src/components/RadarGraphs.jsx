import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import styled from 'styled-components'

import { SmallTitle } from './ui/SmallTitle'
import RadarGraph2 from './ui/RadarGraph2'
import { Graphs } from './ui/Graphs'

const ChartContainer = styled.div`
    width: 100%;
    height: 40rem;
    margin: -1rem 0 4rem;
    
    @media (max-width: 1919px) {
        height: 32rem;
    }
`

export default function RadarGraphs() {
    const chartRef = useRef(null)

    useEffect(() => {
        if (!chartRef.current) return

        const myChart = echarts.init(chartRef.current)

        const getOption = () => {
            const isMobile = window.innerWidth <= 480;

            return {
                radar: {
                    radius: isMobile ? '56%' : '75%',
                    indicator: [
                        { name: 'Agility', max: 10000 },
                        { name: 'Adaptability', max: 10000 },
                        { name: 'Creativity', max: 10000 },
                        { name: 'Organization', max: 10000 },
                        { name: 'Leadership', max: 10000 },
                        { name: 'Proactivity', max: 10000 }
                    ],
                    name: {
                        textStyle: {
                            color: 'white',
                            fontSize: isMobile ? 12 : 15,
                            fontFamily: getComputedStyle(document.body).fontFamily,
                            fontWeight: 500
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(255, 255, 255, 0.1)', 'rgb(63, 104, 157)']
                        }
                    }
                },
                series: [
                    {
                        name: 'Main Skills',
                        type: 'radar',
                        data: [
                            {
                                value: [9200, 9300, 9100, 10000, 9100, 8000],
                                name: 'Main Skills',
                                areaStyle: {
                                    color: 'rgba(99, 161, 242, 0.84)'
                                },
                                lineStyle: {
                                    color: 'rgb(0, 145, 255)',
                                    width: 2
                                },
                                symbol: 'circle',
                                symbolSize: isMobile ? 4 : 8,
                                itemStyle: {
                                    color: ' #003720',
                                    borderWidth: 1
                                }
                            }
                        ]
                    }
                ]
            }
        }

        myChart.setOption(getOption())

        const handleResize = () => {
            myChart.setOption(getOption())
            myChart.resize()
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
            myChart.dispose()
        }
    }, [])

    return (
        <>
            <SmallTitle>Professional differential</SmallTitle>

            <Graphs id="graphs">
                <ChartContainer ref={chartRef} />
                <RadarGraph2 />
            </Graphs>
        </>
    )
}