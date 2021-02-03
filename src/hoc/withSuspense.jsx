import React, { Suspense } from "react";
import { connect } from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = (Component) => {
  return (props) => {
    return (
      <Suspense fallback={<Preloader isFetching={true} />}>
        <Component {...props} />
      </Suspense>
    );
  };
};
