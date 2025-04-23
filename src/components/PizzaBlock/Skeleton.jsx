import ContentLoader from "react-content-loader";

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={290}
      height={500}
      viewBox="0 0 290 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="145" cy="120" r="120" />
      <rect x="45" y="271" rx="10" ry="10" width="200" height="40" />
      <rect x="0" y="333" rx="10" ry="10" width="290" height="93" />
      <rect x="0" y="443" rx="10" ry="10" width="100" height="50" />
      <rect x="140" y="443" rx="30" ry="30" width="150" height="50" />
    </ContentLoader>
  );
}

export default Skeleton;
