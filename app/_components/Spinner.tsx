

import React from "react";
type SpinnerProps = {
  visible: boolean;
};
const Spinner: React.FC<SpinnerProps> = ( visible) => {
    return visible ? (
      <div className="absolute top-5 animate-spin rounded-full bg-white h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    ) : null;
  };

export default Spinner;