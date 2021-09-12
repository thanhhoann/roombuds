import { Text } from "@chakra-ui/layout";
export default function TopBarUsername() {
  return (
    <>
      <main className="m-5 grid place-items-center">
        <Text
          className="font-bold text-xl text-headline dark:text-headline_dark"
          as="samp"
        >
          Hi there, Hoàn !
        </Text>
      </main>
    </>
  );
}
