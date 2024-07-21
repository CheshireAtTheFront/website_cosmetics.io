const modal = () => {
  const openPopUp = document.querySelector(".block-user__link");
  const popup = document.querySelector(".popup");

  // открывает модальное окно
  const openModal = (e) => {
    e.preventDefault();
    popup.style.display = "block";
  };
  // закрывает модальное окно
  const closeModal = (e) => {
    let target = e.target;
    if (
      target.matches(".popup__close") ||
      target.matches(".popup__container")
    ) {
      popup.style.display = "none";
    }
  };

  openPopUp.addEventListener("click", openModal);
  popup.addEventListener("click", closeModal);
};

export default modal;
