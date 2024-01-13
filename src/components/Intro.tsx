import cloud from "../assets/cloudDark.png";
import heroBg from "../assets/webdev.svg";
import { motion } from "framer-motion";


const Intro = () => {

    return (
        <>
            <div
                style={
                    { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
                }
            >
                <main
                    className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
                    id="/"
                >
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            Interview Mate
                        </h1>
                        <p
                            className={
                                "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                            }
                        >
                            An interview tool for mock interviews and interview preparation with a focus on the technical aspects of the interview.
                        </p>

                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">

                            </div>
                        </div>
                    </div>
                    <motion.img
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                        src={heroBg}
                        alt=""
                        className="md:w-3/6 hidden sm:block"
                    />
                </main>
            </div>
        </>
    );
};

export default Intro;