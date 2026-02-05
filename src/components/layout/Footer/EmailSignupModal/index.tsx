import { useState } from "react";
import { Modal, Input, Button, message } from "antd";
import { useTranslation } from "react-i18next";
import type { EmailSignupModalProps } from "./types";
import { MODAL_TEXTS, EMAIL_VALIDATION_REGEX } from "./const";
import { submitEmail } from "./utils";
import styles from "./styles.module.css";

const EmailSignupModal = ({ visible, onClose }: EmailSignupModalProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { t } = useTranslation();
  
  const validateEmail = (email: string): boolean => {
    return EMAIL_VALIDATION_REGEX.test(email);
  };

  const handleSubmit = async () => {
    if (!email.trim()) {
      message.warning(t(MODAL_TEXTS.emptyEmailMessage));
      return;
    }

    if (!validateEmail(email)) {
      message.error(t(MODAL_TEXTS.errorMessage));
      return;
    }

    setLoading(true);
    const success = await submitEmail(email);
    setLoading(false);

    if (success) {
      message.success(t(MODAL_TEXTS.successMessage));
      setEmail("");
      onClose();
    } else {
      message.error(t(MODAL_TEXTS.errorMessage));
    }
  };

  const handleCancel = () => {
    setEmail("");
    onClose();
  };

  return (
    <Modal
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={700}
      centered
      className={styles.modal}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          {t(MODAL_TEXTS.title)}
        </h1>

        <div className={styles.textSection}>
          <p className={styles.firstTimeText}>
            {t(MODAL_TEXTS.firstTimeText)}
          </p>
          <p className={styles.alreadyShopText}>
            {t(MODAL_TEXTS.alreadyShopText)}
          </p>
        </div>

        <div className={styles.formSection}>
          <Input
            placeholder={t(MODAL_TEXTS.placeholder)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onPressEnter={handleSubmit}
            className={styles.input}
            size="large"
          />
          <Button
            type="primary"
            onClick={handleSubmit}
            loading={loading}
            className={styles.button}
            size="large"
          >
            {t(MODAL_TEXTS.buttonText)}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default EmailSignupModal;
