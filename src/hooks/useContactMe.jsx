import { useForm } from '@formspree/react'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useForm as useFormHookForm } from 'react-hook-form'

export default function useContactMe() {
    const isMobile = useMediaQuery({ maxWidth: 480 })
    const [step, setStep] = useState(1)
    const prevStep = () => setStep(step - 1)
    const [state, handleSubmitSpree] = useForm("mnnvvbop")
    const sent = state.succeeded

    const {
        register,
        handleSubmit: handleSubmitHookForm,
        formState: { errors: hookFormErrors, isValid }
    } = useFormHookForm({ mode: 'onChange' })

    const onSubmit = (data) => {
        handleSubmitSpree(data)
    }

    const nextStep = () => {
        if (isValid) {
            setStep(step + 1)
        }
    }


    return {
        state,
        isValid,
        step,
        isMobile,
        prevStep,
        sent,
        register,
        onSubmit,
        nextStep,
        handleSubmitHookForm,
        hookFormErrors
    }
}
