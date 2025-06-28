import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
      Nuestras categorias
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Electrodomésticos"
          image="heladera.jpg"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Repuestos"
          image="gomas.png"
          link="luxury-collection"
        />
        <CategoryItem
          categoryTitle="Herramientas"
          image="ventilador.jpg"
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Garrafas"
          image="garrafa-refrigerante.jpg"
          link="unique-collection"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
