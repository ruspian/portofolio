import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-foreground">
      <div className="max-w-screen-xl mx-auto px-10 w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          {/* logo */}
          <div className="">
            <Link href="/" className="mb-10 block">
              <Image src="/logo.png" alt="logo" width={128} height={49} />
            </Link>
            <p className="text-gray-400">
              Dibuat dengan semangat dan secangkir kopi. Terima kasih sudah
              berkunjung.
            </p>
          </div>
          <div className="">
            <div className="flex gap-20 items-center justify-center">
              {/* links */}
              <div className="flex flex-col md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/skill">Skill</Link>
                  </li>
                  <li>
                    <Link href="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link href="/projects">contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* form news letter */}
          <div className="">
            <h4 className="mb-8 text-xl font-semibold text-white">
              Hubungi saya
            </h4>
            <p className="text-gray-400">
              Punya pertanyaan? Silakan menghubungi saya. Saya selalu siap
              membantu dan menjawab pertanyaan Anda.
            </p>

            {/* form */}
            <form action="" className="mt-5">
              <div className="mb-5">
                <input
                  type="text"
                  name="pesan"
                  placeholder="Tulis Pesan"
                  className="w-full p-3 rounded-sm bg-white"
                />
              </div>
              <button className="bg-orange-400 p-3 font-bold text-white w-full text-center ronded-sm hover:bg-orange-500">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
        &copy; 2025 Ruspian Majid - All rights reserved
      </div>
    </footer>
  );
};

export default FooterComponent;
