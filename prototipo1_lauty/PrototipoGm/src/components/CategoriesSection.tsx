import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Our Categories
      </h2>
      <div className="flex justify-between flex-wrap gap-y-10">
        <CategoryItem
          categoryTitle="Special Edition"
          image="heladera.jpg"
          link="special-edition"
        />
        <CategoryItem
          categoryTitle="Luxury Collection"
          image="gomas.png"
          link="luxury-collection"
        />
        <CategoryItem
          categoryTitle="Summer Edition"
          image="ventilador.jpg"
          link="summer-edition"
        />
        <CategoryItem
          categoryTitle="Unique Collection"
          image="garrafa-refrigerante.jpg"
          link="unique-collection"
        />
      </div>
    </div>
  );
};
export default CategoriesSection;
