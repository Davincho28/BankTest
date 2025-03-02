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

  //Modal de confirmacion
  const confirmModalAlert = async ({ title }) => {
    return Swal.fire({
      title,
      showDenyButton: true,
      confirmButtonText: "SI",
      denyButtonText: "NO",
    }).then((result) => {
      return result.isConfirmed;
    });
  };

  return {
    modalAlert,
    confirmModalAlert,
  };
};
