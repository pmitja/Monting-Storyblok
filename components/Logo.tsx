import Image from 'next/image'
import companyLogo from '../images/MONTING_PLUS_-_LOGO_2022_2-removebg-preview 1.png'

const Logo = () => {
  return (
    <>
      <Image
        src={companyLogo}
        width={50}
        height={50}
        alt="Monting Plus logo"
        className="w-10"
      />
    </>
  )
}

export default Logo
