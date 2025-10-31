import { Input } from "@/components/Input";
import { useState } from "react";
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/redux/productsApi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "@/redux/store";
import { addProduct } from "@/redux/products-slice";

export const NewProduct = () => {
  const dispatch = useDispatch();
  useGetProductsQuery("4");
  const [formData, setFormData] = useState({
    id: Date.now(),
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [, setSelectedFile] = useState<File | null>(null);

  const handleBlur = (fieldName: string) => {
    const value = formData[fieldName as keyof typeof formData];

    if (typeof value === "string" && !value.trim()) {
      setErrors((prev) => ({ ...prev, [fieldName]: "Это поле обязательно" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file || null);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    } else {
      setFormData((prev) => ({ ...prev, image: "" }));
    }
  };

  const [createProduct, { isSuccess }] = useCreateProductMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newProduct = {
        ...formData,
        price: Number(formData.price),
        image: formData.image || 'https://mockimage.tw/photo/720x640/eaeaea/ff8800'
      };
      await createProduct(newProduct).unwrap();
      dispatch(addProduct(newProduct));

      setFormData({
        id: Date.now(),
        title: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <Input
        placeholder="Джинсы XL"
        labelText="Название товара"
        labelFor="title"
        type="text"
        id="title"
        required={true}
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        onBlur={() => handleBlur("title")}
        error={errors.title}
      />
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Описание товара
        </label>
        <textarea
          id="description"
          rows={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Введите описание товара"
        ></textarea>{" "}
      </div>
      <Input
        placeholder="5$"
        labelText="Цена товара"
        labelFor="price"
        type="text"
        id="price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required={true}
        error={errors.price}
        onBlur={() => handleBlur("price")}
      />
      <Input
        placeholder="Джинсы женские"
        labelText="Категория товара"
        labelFor="category"
        type="text"
        id="category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required={true}
        error={errors.category}
        onBlur={() => handleBlur("category")}
      />
      <Input
        labelText="Изображение товара"
        labelFor="image"
        type="file"
        id="image"
        onChange={handleFileChange}
        accept="image/*"
        required={false}
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      {isSuccess && (
        <NavLink to={"/products"}>
          <button className="font-medium text-2xl mt-4 rounded-lg bg-white px-4 py-2.5 cursor-pointer">
            Ваш товар успешно создан! Перейти на страницу продуктов
          </button>
        </NavLink>
      )}
    </form>
  );
};
