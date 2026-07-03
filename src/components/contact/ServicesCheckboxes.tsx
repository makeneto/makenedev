import { Checkbox } from "../ui/checkbox"

interface Props {
  services: string[]
  selected: string[]
  onChange: (value: string[]) => void
}

export function ServicesCheckboxes({ services, selected, onChange }: Props) {
  function toggle(service: string) {
    if (selected.includes(service)) {
      onChange(selected.filter((item) => item !== service))

      return
    }

    onChange([...selected, service])
  }

  return (
    <div className="flex flex-wrap gap-5">
      {services.map((service) => (
        <label
          key={service}
          className="
            flex
            items-center
            gap-2
            text-sm
            text-black
            dark:text-white
            cursor-pointer
          "
        >
          <Checkbox
            checked={selected.includes(service)}
            onCheckedChange={() => toggle(service)}
          />

          {service}
        </label>
      ))}
    </div>
  )
}
