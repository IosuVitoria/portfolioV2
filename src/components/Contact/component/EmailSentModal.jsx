import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const CheckModel = () => {
  return (
    <mesh>
      <torusKnotGeometry args={[1, 0.4, 100, 16]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const XModel = () => {
  return (
    <group>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[7, 0.15, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh rotation={[0, 0, -Math.PI / 4]}>
        <boxGeometry args={[7, 0.15, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};

const EmailSentModal = ({ isOpen, isSuccess, onClose }) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div
            className={`bg-white rounded-lg p-6 w-[90%] max-w-md text-center border-4 ${
              isSuccess ? "border-green-500" : "border-red-500"
            }`}
          >
            <h2
              className={`text-lg font-bold ${
                isSuccess ? "text-green-600" : "text-red-600"
              }`}
            >
              {isSuccess ? t("emailSent.successTitle") : t("emailSent.errorTitle")}
            </h2>
            <p className="mt-4 text-sm text-gray-600">
              {isSuccess
                ? t("emailSent.successMessage")
                : t("emailSent.errorMessage")}
            </p>

            <div className="w-full h-64">
              <Canvas>
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <OrbitControls enableZoom={false} />
                {isSuccess ? <CheckModel /> : <XModel />}
              </Canvas>
            </div>

            <button
              onClick={onClose}
              className={`mt-6 py-2 px-4 rounded text-white font-bold transition ${
                isSuccess
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              <Close />
              {t("emailSent.closeButton")}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailSentModal;
