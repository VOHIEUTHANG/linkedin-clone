import { Modal } from "antd";

type ToastProps = {
  title?: string;
  message: string;
};
const info = ({ message }: ToastProps) => {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>{message}</p>
      </div>
    ),
    onOk() {},
  });
};

const success = ({ message }: ToastProps) => {
  Modal.success({
    content: message,
  });
};

const error = ({ title = "Error title !", message }: ToastProps) => {
  Modal.error({
    title: title,
    content: message,
  });
};

const warning = ({ title = "Warning title !", message }: ToastProps) => {
  Modal.warning({
    title: title,
    content: message,
  });
};

export { info, warning, error, success };
