import styles from "../style";
import { trusted_clients_logo } from "../assets";

const TrustedClients = () => {
  return (
    <section id="trusted-clients" className={`flex flex-col items-center ${styles.paddingY}`}>
      <div className="text-center max-w-[470px]">
        <h1 className="font-poppins font-bold ss:text-[36px] text-[26px] text-black mb-4">
          Trusted Clients
        </h1>
        <p className="font-poppins font-regular text-gray mb-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
          sed diam nonumy eirmod tempor invidunt ut labore et.
        </p>
      </div>
      <img src={trusted_clients_logo} alt="Trusted Clients Logo" className="mx-auto" />
    </section>
  );
};

export default TrustedClients;
