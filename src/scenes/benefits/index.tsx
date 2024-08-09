import { BenefitType, SelectedPage } from "@/shared/types";

import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphics from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Our facilities are designed to provide the best possible experience for our clients.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "We offer a variety of classes to cater to your fitness needs.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert Trainers",
    description: "Our trainers are certified and experienced in their field.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We rovide world class fitness equipment, trainers and classes to get
            you to your ultimate fitness goals with ease. We provide true care
            into each and every member.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHICS */}

          <img
            className="mx-auto"
            alt="benefit-page-graphic"
            src={BenefitsPageGraphics}
          />

          {/* description */}

          <div>
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500"> FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* descript */}
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}>
              <p className="my-5">
                Our mission is to provide the best possible experience for our
                clients, offering them true care and support. We strive to make
                our gym the most enjoyable and accessible place to be in for
                your fitness goals and help them achieve their fitness goals. 
                We are committed to supporting our members and providing them
                with the best possible care. We strive to make our gym the most
                enjoyable and accessible place to be in for your fitness goals.
              </p>
              <p className="mb-5">
                Our Vission is to be the leading fitness destination for our members, offering them with the best possible experience for their fitness goals, offering them true care and support. We strive to make our gym the most enjoyable and accessible place to be in for your fitness goals and
              </p>
            </motion.div>

            {/* button */}
            <motion.div className="relative mt-16" initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay:0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
