import InfoBlock from "../../components/InfoBlock/InfoBlock";

import imgUrl from "../../assets/img/notFound.png";
import React from "react";

// Not found page
const NotFound: React.FC = () => {
  return <InfoBlock title="Страница не найдена" imgUrl={imgUrl} />;
};

export default NotFound;
