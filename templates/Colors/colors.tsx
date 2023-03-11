import Color from "@/components/Color/color"
import { colors } from "@/data/static/colors"

export default function Colors() {
  return (
    <section className='mt-4'>
      <h2 className='text-grey'>Colors</h2>
      <div className="row gap-2 justify-center mt-2">
        {colors.map(color => {
          return (
            <div className="col-12-xs col-6-sm col-4-lg col-3-xl" key={color.variableName}>
              <Color color={color} />
            </div>
          )
        })}
      </div>
    </section>
  )
}