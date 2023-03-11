

import styles from './typography.module.scss'

export default function Typography() {
  return (
    <section className='mt-4'>
      <h2 className='text-grey'>Typography</h2>
      <div className="mt-3">
        <div className='row'>
          <div className="col-12-xs col-6-lg">
            <p className={styles.typographyTitle}>Spartan</p>
          </div>
          <div className="col-12-xs col-6-lg">
            <p className={`${styles.alphabet} font-lg text-grey`}>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-12-xs col-6-lg">
            <p>Spartan</p>
          </div>
          <div className="col-12-xs col-6-lg">
            <p>ABC</p>
          </div>
        </div>
        <div className='row'>
          <div className="col-12-xs col-6-lg">
            <p>Spartan</p>
          </div>
          <div className="col-12-xs col-6-lg">
            <p>ABC</p>
          </div>
        </div>
      </div>
    </section>
  )
}