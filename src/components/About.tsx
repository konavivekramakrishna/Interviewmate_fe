
const About = () => {

    return (
        <div id="about">
            <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
                <h2
                    className=
                    "text-5xl font-bold px-4 md:px-0 text-center"
                >
                    About
                </h2>
                <div>
                    <h4 className="mt-12 text-3xl font-semibold text-slate-700">
                    Why Interview Mate?
                    </h4>
                    <p
                        className="mt-4 text-xl text-justify text-gray-500"
                    >
                        Tailored for Technical Excellence: Our platform is designed with a laser focus on technical interviews. We provide a comprehensive set of features to help you hone your coding, problem-solving, and technical communication skills.
                    </p>
                    <p 
                       className="mt-4 text-xl text-justify text-gray-500"
                    >
                        Realistic Interview Simulations: Practice makes perfect. Interview Mate offers realistic interview simulations, mimicking the intensity and format of actual technical interviews. Gain confidence by tackling algorithmic problems, system design challenges, and more.
                    </p>
                    <p 
                       className="mt-4 text-xl text-justify text-gray-500"
                       >
                        Built with React: We've leveraged the power of React to create a seamless and user-friendly experience. Our intuitive interface ensures that you can navigate through the platform effortlessly, focusing on what matters the most - your interview preparation.
                       </p>
                </div>
            </div>
        </div>
    );
};

export default About;