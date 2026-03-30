import { Form, Input} from "antd";
import type { RegisterFormValues } from "./types";
import BaseButton from "../../../../components/common/buttons/BaseButton";
import styles from "./styles.module.css";
import { useTranslation } from 'react-i18next'; 

const RegisterForm = () => {
  const { t } = useTranslation();

  const [form] = Form.useForm();

  const onFinish = (values: RegisterFormValues) => {
    console.log("Form values:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400 }}
    >
      <Form.Item
        name="fullname"
        rules={[
          { required: true, message: t("account.fullnameRequired") },
        ]}
      >
        <Input placeholder={t("account.fullnamePlaceholder")} />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[
          { required: true, message: t("account.emailRequired") },
          { type: "email", message: t("account.register.invalidEmail") },
        ]}
      >
        <Input placeholder={t("account.emailPlaceholder")} />
      </Form.Item>

      <Form.Item
        name="phone"
        rules={[
          { required: true, message: t("account.phoneRequired") },
          {
            pattern: /^[0-9+() -]+$/,
            message: t("account.invalidPhone"),
          },
        ]}
      >
        <Input placeholder={t("account.phonePlaceholder")} />
      </Form.Item>

      <Form.Item className={styles.registerbutton}>
        <BaseButton >
          {t("account.registerButton")}
        </BaseButton>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;