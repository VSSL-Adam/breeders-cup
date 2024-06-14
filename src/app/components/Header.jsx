import Image from "next/image";
import Logo from "../../../public/images/logo.png";
export default function Header() {
  return (
    <header className="bg-purple flex justify-center items-center py-3">
      <Image src={Logo} alt="Breeder's Cup" width={80} height={50}></Image>
    </header>
  );
}
