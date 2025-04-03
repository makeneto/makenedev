import moment from "moment"
import { useState, useEffect } from "react"
import { BiWifi, BiWifiOff } from "react-icons/bi"
import { BatteryCharging, Battery, BatteryLow, BatteryMedium, BatteryFull } from 'lucide-react'
import styled from "styled-components"

const NavInfo = styled.div`
    position: fixed;
    top: -100px;
    right: 3%;
    animation: slideDown 0.5s ease-out forwards;

    background: rgba(1,28,64,0.5);
    -webkit-backdrop-filter: blur(17px);
    backdrop-filter: blur(17px);

    padding: .1rem .7rem;
    border-radius: 20rem;
    border: var(--light-border);
    z-index: 9999;

    & p {
        color: var(--light-grey);
    }
    
    & h6 {
        font-size: .9rem;
        word-spacing: .1rem;
    }
    
    & div {
        font-size: .9rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        
        & span {
            display: flex;
            align-items: center;
            gap: .8rem;

            & svg {
                width: 1rem;
                height: 1rem;
            }
            
            & div {
                gap: .4rem;

                svg {
                    width: 1.2rem;
                    height: 1.2rem;
                }

                & span {
                    display: flex;
                    align-items: center;
                    gap: .1rem;
                }
            }
        }
    }

    @keyframes slideDown {
        from {
            top: -100px;
        }
        to {
            top: 4.5%;
        }
    }
    
    @media (max-width: 1280px) {
        @keyframes slideDown {
            from {
                top: -100px;
            }
            to {
                top: 5.2%;
            }
        }
    }
`;

export default function NavDevice() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const [currentTime, setCurrentTime] = useState(moment().format('h:mm A ddd, MMM D'))
    const [batteryIcon, setBatteryIcon] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format('h:mm A ddd, MMM D'))
        }, 100)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine)

        window.addEventListener("online", updateOnlineStatus)
        window.addEventListener("offline", updateOnlineStatus)

        return () => {
            window.removeEventListener("online", updateOnlineStatus)
            window.removeEventListener("offline", updateOnlineStatus)
        }
    }, [])

    const [batteryInfo, setBatteryInfo] = useState({ charging: false, level: 1 })

    useEffect(() => {
        const updateBatteryStatus = (battery) => {
            setBatteryInfo({ charging: battery.charging, level: battery.level });
        };

        navigator.getBattery().then((battery) => {
            updateBatteryStatus(battery);

            battery.addEventListener("chargingchange", () => updateBatteryStatus(battery));
            battery.addEventListener("levelchange", () => updateBatteryStatus(battery));

            return () => {
                battery.removeEventListener("chargingchange", updateBatteryStatus);
                battery.removeEventListener("levelchange", updateBatteryStatus);
            }
        })
    }, [])

    useEffect(() => {
        const batteryLevel = Math.round(batteryInfo.level * 100)
        const batteryCharging = batteryInfo.charging

        if (batteryCharging) {
            setBatteryIcon(<BatteryCharging />)
        }
        else if (!batteryCharging && batteryLevel === 0) {
            setBatteryIcon(<Battery />)
        }
        else if (batteryLevel < 20) {
            setBatteryIcon(<BatteryLow />)
        }
        else if (batteryLevel < 80) {
            setBatteryIcon(<BatteryMedium />)
        }
        else {
            setBatteryIcon(<BatteryFull />)
        }
    }, [batteryInfo])

    return (
        <NavInfo>
            <div>
                <span>
                    {isOnline ? <BiWifi /> : <BiWifiOff />}
                    <div>
                        {batteryIcon}
                        <span>{Math.round(batteryInfo.level * 100)}%</span>
                    </div>
                </span>
                <p>|</p>
                <h6>{currentTime}</h6>
            </div>
        </NavInfo>
    );
}