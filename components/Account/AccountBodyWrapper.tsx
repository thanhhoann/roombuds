import { LayoutProps } from "../../types";

export default function AccountBodyWrapper({ children }: LayoutProps) {
  return (
    <>
      <div className="grid place-items-center z-50 w-screen h-screen">
        <div className="w-screen h-screen flex flex-col items-center justify-around z-50">
          {children}
        </div>
      </div>
    </>
  );
}
