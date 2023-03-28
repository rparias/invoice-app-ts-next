import Image from 'next/image'
import Colors from '@/templates/Colors/colors'
import Typography from '@/templates/Typography/typography'
import Buttons from '@/templates/Buttons/buttons'
import FormElements from '@/templates/FormElements/formElements'
import '@/styles/designSystem.scss'

export default function DesignSystem() {
  return (
    <div className="design-system__container">
      <section className="row">
        <Image
          className="logo mr-2"
          src="/assets/logo.svg"
          alt="App Logo"
          width={40}
          height={38}
          priority
        />
        <h1>Design System</h1>
      </section>
      <Colors />
      <Typography />
      <Buttons />
      <FormElements />
    </div>
  )
}