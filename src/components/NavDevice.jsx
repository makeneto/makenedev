import { BiWifi, BiWifiOff } from "react-icons/bi"
import styled from "styled-components"
import useDeviceInfo from "../hooks/useDeviceInfo"

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
                gap: .3rem;

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
    const { isOnline, currentTime, batteryIcon, batteryInfo } = useDeviceInfo()

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