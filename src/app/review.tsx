import { H1, P } from "@/components/typography";
import styles from "../lib/stylings/review.module.css";

export default function ReviewSection() {
    return (
        <>
            <section className={"w-100 h-100 bg-[#FFF] py-10 px-[50px] md:py-10 md:px-[100px] flex flex-col gap-10 rounded-b-[48px]"}>
                <H1 
                    color="#070F04"
                    text={"SOME REVIEWS."}
                />

                <div className={styles.reviewcardcontainer}>
                    <div className="w-[65%]">
                        <P 
                            color="#070F04"
                            fontWeight="normal"
                            fontSize="32px"
                            text={"Lorem ipsum dolor sit amet consectetur. Ac pretium scelerisque nullam hac blandit tristique augue. Elementum rhoncus aenean suspendisse magnis urna est ac vestibulum. Euismod fringilla purus sit amet"}                    
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="rounded-full bg-[#EEFFAA] h-20 w-20">

                        </div>
                        <div className="flex flex-col gap-2 justify-center">
                            <small>
                                <b>Tabitha Madu</b>
                            </small>
                            <small>
                                Greenoak Foundation@TechForum
                            </small>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}