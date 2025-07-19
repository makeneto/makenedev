import { PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import React, { useEffect, useState } from 'react'
import { UseUserContext } from '../context/UserContext'
import { skills } from '../data/skillsData'

export default function useSkills() {
    const { showSkills } = UseUserContext()
    const [items, setItems] = useState(skills.map(skill => skill.title))

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 }
        })
    )

    useEffect(() => {
        if (showSkills) {
            document.body.style.overflow = "hidden"
        }
        else {
            document.body.style.overflow = ""
        }
    }, [showSkills])

    return { showSkills, items, setItems, sensors }
}
