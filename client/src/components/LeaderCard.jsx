import { leaders } from "../utils/Data";

export const LeaderCard = ()=>{
    return (
        <>
         <div className="grid grid-cols-3 gap-10 contain p-10">
                  {leaders.map((elem) => {
                    const { name, title, image_url } = elem;
                    return (
                      <div key={name} className="w-80">
                        <div
                          className="h-96 rounded-2xl bg-cover bg-center relative overflow-hidden"
                          style={{ backgroundImage: `url(${image_url})` }}
                        >
                          <div className="absolute inset-0 "></div>
                          <div className="w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black/20 via-black/20 to-transparent">
                            <h3 className="text-lg font-semibold">{name}</h3>
                            <p className="text-sm">{title}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
        </>
    )
}