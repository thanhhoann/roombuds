import { LayoutProps } from "../../types";

export default function AccountMainWrapper({ children }: LayoutProps) {
  return (
    <>
      <main className="grid place-items-center tablet:-mt-32">{children}</main>
    </>
  );
}
