import Link from "next/link";
import { H1, H3, H4, H5, P } from "../typography";

export default function Footer() {
    return (<>
        <footer className="flex flex-col justify-end h-100 w-100 bg-[#FFF] py-5 px-[50px] md:py-10 md:px-[100px] mt-[100px]">
            <div className="flex flex-row w-100 text-center justify-center">
                <div className="md:w-9/12 w-100 flex flex-col gap-6 ">
                    <span className="md:w-[40%] w-100 flex flex-row self-center justify-center">
                        <H5
                            text={"Do you have a project?"}
                        />
                    </span>
                    <H1 
                        color="#070F04"
                        text={"GET IN TOUCH"}
                    />    
                </div>
            </div>
            <div className="md:grid md:grid-cols-3 flex flex-col gap-6 mt-10">
                <MenuList/>
            </div>
            <div className="flex flex-col mt-[40px]">
                <H5 
                    text={"© All rights Reserved | 2024 maceteligolden.com "}
                />
            </div>
        </footer>
    </>)
}

function MenuList() {
    const Menu = [
        {
            header: "Navigation",
            items: [
                {
                    label: "Home",
                    url: "/"
                },
                {
                    label: "About",
                    url: "/"
                },
                {
                    label: "Services",
                    url: "/"
                },
                {
                    label: "Projects",
                    url: "/"
                },
                {
                    label: "Reviews",
                    url: "/"
                },
                {
                    label: "Contact",
                    url: "/"
                },
            ]
        },
        {
            header: "Socials",
            items: [
                {
                    label: "Linkedln",
                    url: "https://www.linkedin.com/in/golden-maceteli-08a379222/"
                },
                {
                    label: "Twitter",
                    url: "https://twitter.com/golden_eteli"
                },
                {
                    label: "Instagram",
                    url: "https://instagram.com/golden_eteli"
                },
                {
                    label: "Github",
                    url: "https://github.com/maceteligolden"
                }
            ]
        },
        {
            header: "Contact",
            items: [
                {
                    label: "maceteligolden@gmail.com",
                    url: "emailto:maceteligolden@gmail.com"
                },
                {
                    label: "+447301934848",
                    url: "tel:+447301934848"
                },
            ]
        }
]
    return (
        <>
            {Menu.map((item: any, index: number)=> {
                return (
                    <>
                    <div className="flex flex-col gap-4">
                        <header className="flex flex-row justify-start items-center border-b-2 border-[#ACACAC] py-4">
                            <P
                                color="#454B43"
                                fontSize="18px"
                                fontWeight="800"
                                text={item.header}
                            />
                        </header>

                        {
                            item.items.map((page: any, index: number)=> {
                                return (
                                    <>
                                        <Link href={page.url}> {page.label}</Link>
                                    </>
                                )
                            })
                        }
                    </div>
                    </>
                )
            })}
        </>
    )
}