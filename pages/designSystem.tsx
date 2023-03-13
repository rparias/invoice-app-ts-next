import Image from 'next/image'
import Colors from '@/templates/Colors/colors'
import Typography from '@/templates/Typography/typography'
import styles from '@/styles/DesignSystem.module.scss'
import Buttons from '@/templates/Buttons/buttons'

export default function DesignSystem() {
  return (
    <div className={`bg-white ${styles.container}`}>
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
      <Colors />
      <Typography />
      <Buttons />
    </div>
  )
}