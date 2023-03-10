import Color from "@/components/Color/color"
import { colors } from "@/data/static/colors"

export default function DesignSystem() {
  return (
    <>
      <section>
        <h1>Design System</h1>
      </section>
      <section>
        <h2>Colors</h2>
        <div className="row gap-2 justify-center">
          {colors.map(color => {
            return (
              <div className="col-12-xs col-6-sm col-4-lg col-3-xl" key={color.variableName}>
                <Color color={color} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}