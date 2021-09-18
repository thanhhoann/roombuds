import { HStack } from "@chakra-ui/layout";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";

export default function AccountPinInput() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <HStack>
        <PinInput type="alphanumeric" mask>
          {arr.map((index) => (
            <PinInputField
              key={index}
              className="border-2 p-3 desktop:p-5 dark:bg-background_dark border-headline dark:border-btn_dark w-14 laptop:w-20 text-center rounded-md "
            />
          ))}
        </PinInput>
      </HStack>
    </>
  );
}
