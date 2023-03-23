

import './typography.scss'

export default function Typography() {
  return (
    <section className='mt-4'>
      <h2 className='text-grey'>Typography</h2>
      <div className="mt-3">
        <div className='row'>
          <div className="col-12-xs col-6-lg">
            <p className="typography__title">Spartan</p>
          </div>
          <div className="col-12-xs col-6-lg">
            <p className="typography__alphabet font-lg text-grey">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()</p>
          </div>
        </div>
        <div className="mt-3">
          <div className='row'>
            <div className="col-12-xs col-6-lg">
              <div className='mb-3'>
                <p className='text-grey mb-1'>H1  |  Spartan Bold  |  32px  |  36px Line  |  -1 Spacing</p>
                <h1>Aliquam porttitor mauris sit amet orci Aenean</h1>
              </div>
              <div className='mb-3'>
                <p className='text-grey mb-1'>H2  |  Spartan Bold  |  20px  |  22px Line  |  -0.63 Spacing</p>
                <h2>Aliquam porttitor mauris sit amet orci Aenean</h2>
              </div>
              <div className='mb-3'>
                <p className='text-grey mb-1'>H3  |  Spartan Bold  |  16px  |  24px Line  |  -0.8 Spacing</p>
                <h3>Aliquam porttitor mauris sit amet orci Aenean</h3>
              </div>
              <div className='mb-3'>
                <p className='text-grey mb-1'>H4  |  Spartan Bold  |  12px  |  15px Line  |  -0.25 Spacing</p>
                <h4>Aliquam porttitor mauris sit amet orci Aenean</h4>
              </div>
            </div>
            <div className="col-12-xs col-6-lg">
              <div>
                <div className='mb-3'>
                  <p className='text-grey mb-1'>Body 1  |  Spartan Medium  |  12px  |  15px Line  |  -0,25 Spacing</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. 
                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. 
                    Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. 
                    Nullam mollis. Ut justo. Suspendisse potenti.
                  </p>
                  <br />
                  <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper est, 
                    vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. 
                    Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, 
                    lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, 
                    dapibus eu, fermentum et, dapibus sed, urna.
                  </p>
                </div>
              </div>
              <div>
              <div className='mb-3'>
                  <p className='text-grey mb-1'>Body 2  |  Spartan Medium  |  11px  |  18px Line  |  -0,23 Spacing</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. 
                    In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, 
                    tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. 
                    Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus 
                    libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. 
                    Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}