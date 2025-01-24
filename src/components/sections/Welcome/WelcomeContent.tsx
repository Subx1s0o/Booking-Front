'use client';
import { motion } from 'framer-motion';

export default function WelcomeText() {
    const text = 'Welcome to the Booking App';

    return (
        <div className="justify-beetwen mb-10 flex gap-2">
            <div className="">
                <motion.h1 className="xs:text-xl mb-5 text-balance text-lg font-semibold">
                    {text.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: index * 0.06,
                                duration: 0.2,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                    className="xs:text-md text-base font-medium"
                >
                    Find your perfect booking in our service!
                </motion.p>
            </div>
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.5 }}
                src="/images/click.png"
                width={130}
                height={100}
                className="h-[100px] w-[130px]"
                alt="dsds"
            />
        </div>
    );
}
