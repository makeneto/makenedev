import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import styled from 'styled-components'

const ChartContainer = styled.div`
    width: 100%;
    height: 40rem;
    margin: -1rem 0 4rem;
    
    @media (max-width: 1919px) {
        height: 20rem;
    }

    @media (max-width: 480px) {
        display: none;
    }
`

export default function RadarGraph() {
    const chartRef = useRef(null)

    useEffect(() => {
        if (!chartRef.current) return

        const myChart = echarts.init(chartRef.current)

        const getOption = () => {
            const isMobile = window.innerWidth <= 480;

            return {
                radar: {
                    radius: isMobile ? '60%' : '75%',
                    indicator: [
                        { name: 'Laziness', max: 10000 },
                        { name: 'Irresponsibility', max: 10000 },
                        { name: 'Procrastination', max: 10000 },
                        { name: 'Lack of focus', max: 10000 },
                        { name: 'Neglect', max: 10000 },
                        { name: 'Selfishness', max: 10000 }
                    ],
                    name: {
                        textStyle: {
                            color: 'white',
                            fontSize: isMobile ? 12 : 11,
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
                                value: [1000, 1000, 1000, 1000, 1000, 3000],
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

    return <ChartContainer ref={chartRef} />
}