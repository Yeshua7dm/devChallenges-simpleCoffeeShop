import fullStar from "../../assets/Star_fill.svg";
import emptyStar from "../../assets/Star.svg";

export interface CoffeeItemProps {
  id: number | undefined;
  name: string;
  image: string;
  price: string;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}

/**
   * {
"id": 1,
"name": "Cappuccino",
"image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
"price": "$5.20",
"rating": 4.7,
"votes": 65,
"popular": true,
"available": true
},
   */
export const CoffeeItem = ({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: CoffeeItemProps) => {
  return (
    <article className="flex flex-col gap-3 cursor-pointer">
      <div
        className="w-full rounded-[1rem] bg-green-100 bg-no-repeat bg-center bg-cover h-52 p-4"
        style={{ backgroundImage: `url(${image})` }}
      >
        {popular && (
          <span className="text-[#111315] bg-[#F6C768] rounded-full px-2 py-1 capitalize text-sm">
            popular
          </span>
        )}
      </div>
      <div className="text-white w-full flex justify-between items-center">
        <p className="text-sm">{name}</p>
        <p className="bg-[#BEE3CC] text-[#111315] rounded-lg px-2 py-1 text-xs">
          {price}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          {rating ? (
            <>
              <img src={fullStar} alt="rating" />
              <span>
                {rating} ({votes} votes)
              </span>
            </>
          ) : (
            <img src={emptyStar} alt="no rating" />
          )}
        </div>
        {!available && <p className="text-[#ED735D]">Sold Out</p>}
      </div>
    </article>
  );
};
