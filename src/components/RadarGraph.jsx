import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import styled from 'styled-components'
import { SmallTitle } from './TechnologiesPassing'

const ChartContainer = styled.div`
    width: 100%;
    height: 40rem;
    margin: -1rem 0 4rem;
    
    @media (max-width: 1280px) {
        margin-top: -2rem;
        height: 30rem;
    }

    @media (max-width: 480px) {
        height: 20rem;
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
                        { name: 'Agility', max: 10000 },
                        { name: 'Adaptability', max: 10000 },
                        { name: 'Creativity', max: 10000 },
                        { name: 'Organization', max: 10000 },
                        { name: 'Leadership', max: 10000 },
                        { name: 'Proactivity', max: 10000 }
                    ],
                    name: {
                        textStyle: {
                            color: '#003720',
                            fontSize: isMobile ? 12 : 18,
                            fontFamily: getComputedStyle(document.body).fontFamily,
                            fontWeight: 500
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(255, 255, 255, 0.1)', 'rgba(125, 232, 101, 0.23)']
                        }
                    }
                },
                series: [
                    {
                        name: 'Main Skills',
                        type: 'radar',
                        data: [
                            {
                                value: [9200, 9300, 9100, 10000, 8800, 8000],
                                name: 'Main Skills',
                                areaStyle: {
                                    color: 'rgba(0, 255, 0, 0.3)'
                                },
                                lineStyle: {
                                    color: ' #00ff00',
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
            <ChartContainer ref={chartRef} />
        </>
    )
}