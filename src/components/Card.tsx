interface CardProps {
  key: number;
  name: string;
  sex: string;
  image: string;
}
const Card = ({ name, sex, image }: CardProps) => {
  return (
    <div className="max-w-xs mx-4 my-6 bg-white rounded-lg shadow-lg">
      <img
        src={image}
        alt="Card"
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700">
          <span className="font-bold">Sex:</span> {sex}
        </p>
      </div>
    </div>
  );
};

export default Card;
