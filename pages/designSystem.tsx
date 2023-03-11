import Image from 'next/image'
import Color from "@/components/Color/color"
import { colors } from "@/data/static/colors"

export default function DesignSystem() {
  return (
    <div className="p-4">
      <section className="row">
      <Image
            className="logo mr-2"
            src="/images/logo.svg"
            alt="App Logo"
            width={40}
            height={38}
            priority
          />
        <h1>Design System</h1>
      </section>
      <section className='mt-4'>
        <h2 className='text-grey'>Colors</h2>
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
      <section className='mt-4'>
        <h2 className='text-grey'>Typography</h2>
      </section>
    </div>
  )
}