import { Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium } from 'lucide-react'
import moment from 'moment'
import { useEffect, useState } from 'react'

export default function useDeviceInfo() {
    const [isOnline, setIsOnline] = useState(navigator.onLine)
    const [currentTime, setCurrentTime] = useState(moment().format('h:mm A ddd, MMM D'))
    const [batteryIcon, setBatteryIcon] = useState('')
    const [batteryInfo, setBatteryInfo] = useState({ charging: false, level: 1 })

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


    useEffect(() => {
        const updateBatteryStatus = (battery) => {
            setBatteryInfo({ charging: battery.charging, level: battery.level });
        };

        navigator.getBattery().then((battery) => {
            updateBatteryStatus(battery);

            battery.addEventListener("chargingchange", () => updateBatteryStatus(battery));
            battery.addEventListener("levelchange", () => updateBatteryStatus(battery));

            console.log(battery)

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

    return { isOnline, currentTime, batteryIcon, batteryInfo }
}
