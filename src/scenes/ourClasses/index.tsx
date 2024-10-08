import { ClassType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> =  [
    {
        name: "Weight Training Classes",
        description: "Weight training classes are designed to help you improve your cardiovascular fitness, strength training.",
        image: image1,
    },
    {
        name: "Cardio Classes",
        description: "Cardio classes are designed to help you improve your cardiovascular fitness and improve your overall fitness.",
        image: image2,
    },
    {
        name: "Flexibility Classes",
        description: "Flexibility classes are designed to help you improve your flexibility and range of motion.",
        image: image3,
    },
    {
        name: "Yoga Classes",
        description: "Yoga classes are designed to help you improve your flexibility, balance, and mental clarity.",
        image: image4,
    },
    {
        name: "Pilates Classes",
        description: "Pilates classes are designed to help you improve your flexibility, balance, and strength.",
        image: image5,
    },
    {
        name: "Zumba Classes",
        description: "Zumba classes are designed to help you improve your flexibility, balance, and mental clarity.",
        image: image6,
    }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <div className="md:w-3/5">
                <HText>OUR CLASSES </HText>
                <p className="py-5">
                    Our classes are designed to help you develop your fitness skills and achieve your goals. We offer a variety of classes tailored to your specific needs and preferences.
                    Whether you're looking to improve your cardiovascular fitness, strength training, or flexibility, we've got you covered.
                </p>
            </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
                {classes.map((item: ClassType, index) => (
                    <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    />
                ))}
            </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
