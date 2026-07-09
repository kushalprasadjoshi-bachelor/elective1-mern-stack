import React from "react";
import ReadAllProduct from "../product/ReadAllProduct";
import CreateProduct from "../product/CreateProduct";
import ReadSpecificProduct from "../product/ReadSpecificProduct";
import UpdateProduct from "../product/UpdateProduct";
import { Route, Routes } from "react-router-dom";
import ReadAllUser from "../user/ReadAllUser";
import ReadAllSchool from "../school/ReadAllSchool";
import CreateSchool from "../school/CreateSchool";
import ReadSpecificSchool from "../school/ReadSpecificSchool";
import UpdateSchool from "../school/UpdateSchool";
import UpdateUser from "../user/UpdateUser";
import ReadSpecificUser from "../user/ReadSpecificUser";
import CreateUser from "../user/CreateUser";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/product" element={<ReadAllProduct />} />
      <Route path="/product/create" element={<CreateProduct />} />
      <Route path="/product/:id" element={<ReadSpecificProduct />} />
      <Route path="/product/:id/update" element={<UpdateProduct />} />

      <Route path="/user" element={<ReadAllUser />} />
      <Route path="/user/create" element={<CreateUser />} />
      <Route path="/user/:id" element={<ReadSpecificUser />} />
      <Route path="/user/:id/update" element={<UpdateUser />} />

      <Route path="/school" element={<ReadAllSchool />} />
      <Route path="/school/create" element={<CreateSchool />} />
      <Route path="/school/:id" element={<ReadSpecificSchool />} />
      <Route path="/school/:id/update" element={<UpdateSchool />} />
    </Routes>
  );
};

export default AppRoute;
