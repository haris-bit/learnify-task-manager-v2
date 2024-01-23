// components/HeroSection.js

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <div className="hero w-full h-full text-black py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Supercharge Your Tasks with Learnify</h1>
                <p className="text-lg md:text-xl mb-8">Unlock your potential and achieve your goals with our powerful platform.</p>
                <Link href="/createtask" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold bg-blue-500 text-white transition duration-300">Get Started</Link>
                <Image
                    src="/hero.png"
                    alt="Hero Image"
                    width={500}
                    height={500}
                    className="mx-auto mt-8 rounded-md "
                />
            </div>




        </div>
    );
};

export default HeroSection;
