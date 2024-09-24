import { useRouter } from "next/router";
import Menu from "../menu";

type AppShellProps = {
    children: React.ReactNode
}

const disableNavbar = ["/"];
const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const {pathname} = useRouter();
    console.log(pathname);
    return (
        <main>
            {!disableNavbar.includes(pathname) && <Menu/>}
            {children}
        </main>
    );
};
export default AppShell;