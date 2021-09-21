import Link from "next/link";
import { useRecoilState } from "recoil";
import { authPageSeleted } from "../../atoms";

interface AccountProps {
  page: string;
  supportNavigation: string;
  title: string;
}

export default function AccountBottom({
  page,
  supportNavigation,
  title,
}: AccountProps) {
  return (
    <>
      {page === "Sign In" && (
        <Link href="/account/recovery" passHref>
          <button className="underline font-thin text-main tablet:text-headline mb-5 desktop:mb-14 dark:text-headline_dark">
            Forgot password ?
          </button>
        </Link>
      )}

      <div className="text-main font-medium mt-5 tablet:text-headline desktop:text-xl dark:text-headline_dark">
        {supportNavigation}
        <Link href={`${page === "Sign In" ? "/account/signup" : "/"}`} passHref>
          <span className="font-bold cursor-pointer hover:underline">
            {title}
          </span>
        </Link>
      </div>
    </>
  );
}
