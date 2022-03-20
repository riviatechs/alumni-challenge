import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/logo.png';

export function MyNavigationBar(props) {
  return (
    <nav>
      <div>
        <Image src={Logo} width={400} height={400} alt={'Company logo'} />
        <div>
          <div>
            <Link href={'/'}>
              <a>Home</a>
            </Link>
          </div>

          <div>
            <Link href={'/organizers'}>
              <a>Organizers</a>
            </Link>
          </div>

          <div>
            <Link href={'/partners'}>
              <a>Partners</a>
            </Link>
          </div>

          <div>
            <Link href={'/contact-us'}>
              <a>Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ElevationScroll(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};
