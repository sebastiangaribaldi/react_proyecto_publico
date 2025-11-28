import Pizza from "./../assets/fondo.jpg";

const Inicio = () => {
  return(
    <div className="bg-fixed bg-center bg-cover h-dvh flex items-center justify-center">
      <img src={Pizza} alt="fondo" />
    </div>
  );
}

export default Inicio;

