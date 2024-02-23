import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://dummyapi.online/api/products");
      const data = await res.json();
      setProducts(data);
      setFiltered(data);
    };
    getData();
  }, []);

  console.log(products);

  const filterProducts = (category) => {
    const filteredCategory = products.filter(
      (product) => product.productCategory === category
    );
    setFiltered(filteredCategory);
  };
  const categoriesButtons = ["Smartphone", "Laptop", "Tablet"];

  return (
    <section className="mt-5">
      <div className="px-6 lg:px-12 pt-20 pb-10">
        {/*  */}
        <div className="flex justify-between pb-8">
          <input
            className="text-black outline-none pl-1"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="space-x-5">
            <button onClick={() => setFiltered(products)}>All</button>
            {categoriesButtons.map((el) => (
              <button className="" key={el} onClick={() => filterProducts(el)}>
                {el}
              </button>
            ))}
          </div>
        </div>
        {/*  */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered
            .filter((el) => {
              if (el.name.toLowerCase().includes(query.toLowerCase())) {
                return el;
              }
            })
            .map(({ id, thumbnailImage, name, basePrice }) => {
              return (
                <li key={id} id={id}>
                  <Link to={`/product/${id}`}>
                    <img src={thumbnailImage} alt="thumbnailImage" />
                    <h3 className="font-semibold mt-2">{name}</h3>
                    <p className="text-sm">£ {basePrice}</p>
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
