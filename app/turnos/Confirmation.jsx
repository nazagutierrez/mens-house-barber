import React from "react";
import { useDateContext } from "../../components/contexts/dateContext";
import { BsScissors } from "react-icons/bs";

function Confirmation() {
    const { date } = useDateContext();
    
  return (
    <section className="p-5 text-center md:min-h-[440px] w-full flex justify-around items-center flex-col text-darkerWhite bg-neutral-950/90">
        <h1 className="text-effect pb-2 md:pb-0 text-2xl">
            CONFIRMACIÓN
        </h1>
        <div className="flex-container flex-col md:text-lg">
          <p>Usted va a reservar un turno para el día:</p>
          <div className="flex-container gap-3">
            <h2 className="underline underline-offset-4 md:text-xl decoration-green-300">{date.day}/{date.month}/{date.year}</h2>
            <p>a las:</p>
            <h2 className="underline underline-offset-4 md:text-xl decoration-green-300">{date.hour}:00</h2>
          </div>
          <p className="mt-8">Porfavor revisá que el turno sea en un día laboral.</p>
          <p className="mt-8">Hacé click en finalizar para agendar el turno.</p>
        </div>
        <div className=" flex items-center gap-2 text-effect">
          <i> <BsScissors /> </i>
          <h3 className="underline underline-offset-4 decoration-1 decoration-yellow-500/70 pt-2 md:pt-0">
              MEN{"'"}S HOUSE BARBER
          </h3>
          <i> <BsScissors /> </i>
        </div>
    </section>
  );
}

export default Confirmation;
