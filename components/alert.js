import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Logo from './UIElements/Logo';
import LogoImage from '../public/image/logo.png';

export default function Alert({ preview }) {
  return (
    <>
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>


                <Logo
                    href="/"
                    logoSrc={LogoImage}
                    title="Agency Digital"
                    className="main-logo"
                  />

              .
            </>
          )}
        </div>
      </Container>
    </div>
    <style jsx>
      {`
    .main-logo {
      min-width: 145px;
      max-width: 145px;
    }
    `}
  </style>
</>
  )
}
