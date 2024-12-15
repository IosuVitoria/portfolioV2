import { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import EmailSentModal from "./component/EmailSentModal";
import { styles } from "../../styles";
import CanvasLoader from "../Loader";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaSpinner } from "react-icons/fa"

const EarthCanvas = () => {
  const Earth = () => {
    const earth = useGLTF("/planet/scene.gltf"); 
    return (
      <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
    );
  };

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modal, setModal] = useState({ isOpen: false, isSuccess: false });

  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Iosu Gómez Valdecantos",
          from_email: form.email,
          to_email: "iosugvaldecantos@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setModal({ isOpen: true, isSuccess: true }); // Mostrar modal de éxito

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          setModal({ isOpen: true, isSuccess: false }); // Mostrar modal de error
          console.error(error);
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>{t("touch")}</p>
        <h3 className={styles.sectionHeadText}>{t("Contact")}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("YourName")}</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("Whatname")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border cursor-pointer"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("Youremail")}</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("Whataddress")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border cursor-pointer"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">{t("YourMessage")}</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("wanttosay")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium border cursor-pointer"
            />
          </label>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center gap-5 border hover:bg-blue-700" 
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" /> 
                  {t("Sending")}
                </>
              ) : (
                <>
                  <FaPaperPlane /> 
                  {t("Send")}
                </>
              )}
            </button>
          </div>
        </form>
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <EmailSentModal
        isOpen={modal.isOpen}
        isSuccess={modal.isSuccess}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
