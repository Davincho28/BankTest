export const alerts = () => {
  const modalAlert = ({
    title,
    text,
    icon,
    allowOutsideClick,
    timer = 2000,
    showConfirmButton = false,
  }) => {
    Swal.fire({
      title,
      text,
      icon,
      timer,
      allowOutsideClick,
      showConfirmButton,
    });
  };
  return {
    modalAlert,
  };
};
