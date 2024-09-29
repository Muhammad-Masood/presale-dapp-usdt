export default function Page() {
  return (
    <div className="bg-white bg-gradient-to-b from-white to-[#DBDBDB] py-4 h-fit">
      <h1 className="text-center text-[#3D214B] pt-8 font-roborto font-bold text-[32px]">
        Share your Referral Link along with an Advertising Banner 🚀
      </h1>

      <div className="flex md:flex-row flex-col  md:gap-4 pt-14 px-8 w-auto gap-4">
        <a href="/banner/banner 728x90.gif" download>
          <img
            className="w-11/12"
            src="/banner/banner 728x90.gif"
            alt="Banner 728x90"
          />
        </a>
        <a href="/banner/banner 728x901.gif" download>
          <img
            className="w-11/12"
            src="/banner/banner 728x901.gif"
            alt="Banner 728x901"
          />
        </a>
      </div>

      <div className="flex md:flex-row flex-col justify-center md:justify-around gap-4 md:gap-0 pt-8 px-8">
        <a href="/banner/banner 300x250.gif" download>
          <img src="/banner/banner 300x250.gif" alt="Banner 300x250" />
        </a>
        <a href="/banner/banner 300x2502.gif" download>
          <img src="/banner/banner 300x2502.gif" alt="Banner 300x2502" />
        </a>
      </div>

      <div className="flex md:flex-row flex-col justify-center md:justify-around gap-4 md:gap-0 pt-9 px-8">
        <a href="/banner/banner 200x200.gif" download>
          <img src="/banner/banner 200x200.gif" alt="Banner 200x200" />
        </a>
        <a href="/banner/banner 200x2001.gif" download>
          <img src="/banner/banner 200x2001.gif" alt="Banner 200x2001" />
        </a>
      </div>
    </div>
  );
}
